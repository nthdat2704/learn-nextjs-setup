import { AdminLayout, MainLayout } from '@/components/layout'
import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import { useWorkList } from '@/swrHook'
import WorkList from '@/components/work/WorkList'


interface Props { }

const WorksPage = (props: Props) => {
    const { data, isLoading } = useWorkList({ params: { _page: 1 } })

    return (
        <Box>
            <Container>
                <Box mb={4} mt={8}>
                    <Typography component="h1" variant='h3' fontWeight="bold">Work</Typography>
                </Box>
                <WorkList workList={data?.data || []} loading={isLoading} />
            </Container>
        </Box>
    )
}

WorksPage.Layout = MainLayout
export const getStaticProps: GetStaticProps = async () => {


    return {
        props: {
        },
    }
}
export default WorksPage
