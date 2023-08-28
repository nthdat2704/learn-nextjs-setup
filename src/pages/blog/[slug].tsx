import { MainLayout } from '@/components/layout'
import { Post } from '@/models'
import { getPostList } from '@/utils'
import { Box, Container, Divider } from '@mui/material'
import { GetStaticPaths, GetStaticProps } from 'next'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import remarkPrism from 'remark-prism'
import { unified } from 'unified'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Script from 'next/script'

type Props = {
    post: Post

}

export default function PostDetailPage({ post }: Props) {
    if (!post) return null
    return (
        <Box>
            <Container>
                <h1>PostDetailPage</h1>
                <p>{post.title}</p>
                <p>{post.author?.name}</p>
                <p>{post.description}</p>
                <Divider />
                <div dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}></div>
            </Container>
            <Script src='/prism.js' strategy='afterInteractive'></Script>
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const postList = await getPostList();

    return {
        paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
        fallback: false, // false or "blocking"
    }
}

PostDetailPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<{

}> = async (context) => {
    const postList = await getPostList();
    const slug = context.params?.slug
    if (!slug) return { notFound: true }
    const post = postList.find((x: Post) => x.slug === slug);
    if (!post) return { notFound: true }

    const file = await unified()
        .use(remarkParse)
        .use(remarkToc, { heading: 'agenda.*' })
        .use(remarkPrism)
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
        .use(rehypeDocument, { title: post.title })
        .use(rehypeFormat)
        .use(rehypeStringify)
        .process(post.mdContent || "")
    post.htmlContent = file.toString();


    return { props: { post } }
}