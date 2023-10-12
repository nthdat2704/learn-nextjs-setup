import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { PostCard } from '@/components/home'
import React from 'react'
import { Post } from '@/models'

type Props = {}

export const RecentPost = (props: Props) => {
    const postList: Post[] = [
        {
            id: 1,
            slug: '',
            title: 'Making a design system from scratch',
            publishedDate: '2022-06-15T03:00:00Z',
            tagList: ['Design', 'Pattern'],
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
        {
            id: 2,
            slug: '',
            title: 'Creating pixel perfect icons in Figma',
            publishedDate: '2022-06-17T03:00:00Z',
            tagList: ['Figma', 'Icon Design'],
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        },
    ]
    return (
        <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
            <Container>
                <Stack direction="row" justifyContent={
                    {
                        xs: "center",
                        md: "space-between"
                    }
                } alignItems="center">
                    <Typography variant='h5'>
                        Recent Posts
                    </Typography>
                    <Link
                        sx={
                            {
                                display: {
                                    xs: "none",
                                    md: "inline"
                                }
                            }
                        }
                    >
                        View all
                    </Link>
                </Stack>
                <Stack
                    direction={{
                        xs: "column",
                        md: "row",
                    }}
                    sx={{
                        '& > div': {
                            width: {
                                xs: "100%",
                                md: "50%"
                            }

                        }
                    }}
                    spacing={4}
                >
                    {postList.map((item, index) => {
                        return <Box key={item.id}><PostCard post={item} /></Box>
                    })}
                </Stack>

            </Container>
        </Box>
    )
}

