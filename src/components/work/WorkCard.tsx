import React from 'react'
import { Box, Stack, Typography, Chip } from '@mui/material'
import { Work, } from '@/models'
import Image from 'next/image'

interface WorkCardProps {
    work: Work
}

export const WorkCard = ({ work }: WorkCardProps) => {
    return (
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Box width={{ xs: "100%", sm: "246px" }} flexShrink={0}>
                <Image src={work.thumbnailUrl} width={246} height={180} layout='responsive' alt='work thumbnail' />
            </Box>
            <Box>
                <Typography variant='h4' fontWeight='bold'>{work.title}</Typography>
                <Stack direction="row" my={2}>
                    <Chip color='secondary' label={new Date(Number.parseInt(work.createdAt)).getFullYear()} size='small' />
                    <Typography ml={3} color="GrayText">{work.tagList.join(', ')}</Typography>
                </Stack>
                <Typography>{work.shortDescription}</Typography>
            </Box>
        </Stack>
    )
}

