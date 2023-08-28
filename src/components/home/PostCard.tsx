import { Post } from '@/models'
import { Card, CardContent } from '@mui/material'
import { PostItem } from '../blog'
interface PostCardProps {
    post: Post

}

export const PostCard = ({ post }: PostCardProps) => {
    if (!post) return null

    return (
        <Card>
            <CardContent>
                <PostItem post={post} />
            </CardContent>
        </Card>
    )
}

