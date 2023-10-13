import { Box, Container, Link, Stack, Typography } from '@mui/material'
import { PostCard } from '@/components/home'
import React from 'react'
import { Post, Work } from '@/models'
import WorkList from '../work/WorkList.1'
import { ImageFeatures } from '@/image'

type Props = {}

export const FeatureWork = (props: Props) => {
    const workList: Work[] = [
        {
            id: '1',
            title: 'Designing Dashboards',
            createdAt: '1648363391671',
            updatedAt: '1648363391671',
            tagList: ['Dashboard'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: ImageFeatures.image1,
        },
        {
            id: '2',
            title: 'Vibrant Portraits of 2020',
            createdAt: '1648363391671',
            updatedAt: '1648363391671',
            tagList: ['Illustration'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: ImageFeatures.image2,
        },
        {
            id: '3',
            title: '36 Days of Malayalam type',
            createdAt: '1648363391671',
            updatedAt: '1648363391671',
            tagList: ['Typography'],
            shortDescription:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
            fullDescription: '',
            thumbnailUrl: ImageFeatures.image3,
        },
    ]
    return (
        <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
            <Container>
                <Typography variant='h5' mb={4}>
                    Featured Works
                </Typography>
                <WorkList workList={workList} />

            </Container>
        </Box>
    )
}

