import { PostItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils';
import { Box, Container, Link, Typography } from '@mui/material';
import { GetStaticProps } from 'next';
export interface BlogListPageProps {
    posts: Post[]
}

export default function BlogListPage({ posts }: BlogListPageProps) {


    return (
        <Box>
            <Container>
                <Typography variant="h1">Post</Typography>
                {
                    posts.map((item: Post, index: number) => (
                        <Link key={index} href={`/blog/${item.slug}`}>
                            <PostItem post={item} />
                        </Link>
                    ))
                }
            </Container>
        </Box>
    )
}
BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps = async () => {
    const postList = await getPostList();


    return {
        props: {
            posts: postList,
        },
    }
}