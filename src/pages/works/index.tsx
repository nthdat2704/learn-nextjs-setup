import { MainLayout } from '@/components/layout'
import WorkList from '@/components/work/WorkList'
import { ListParams, WorkFilterPayload } from '@/models'
import { useWorkList } from '@/swrHook'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import React from 'react'
// import dynamic from 'next/dynamic'
// const WorkFilter = dynamic(() => import('../../components/work/WorkFilter'), { ssr: false })
import WorkFilter from '@/components/work/WorkFilter'
import { useRouter } from 'next/router'


interface Props { }

const WorksPage = (props: Props) => {
    const router = useRouter()
    const filter: Partial<ListParams> = {
        _page: 1,
        _limit: 3,
        ...router.query
    }
    const initialSearchPayload: WorkFilterPayload = {
        search: filter.title_like || "",
        selectedTagList: filter.tagList_like?.split("|") || []
    }


    const { data, isLoading } = useWorkList({ params: filter, enabled: router.isReady })
    const { _limit, _totalRows, _page } = data?.pagination || {}
    const totalPages = Boolean(_totalRows) ? Math.ceil(_totalRows / _limit) : 0
    const handleNextPage = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...filter,
                _page: value
            },
        },
            undefined,
            { shallow: true }
        )
    }
    const handleFilterChange = (newFilters: WorkFilterPayload) => {
        router.push({
            pathname: router.pathname,
            query: {
                ...filter,
                _page: 1,
                title_like: newFilters.search,
                tagList_like: newFilters.taglist_like
            },
        },
            undefined,
            { shallow: true }
        )
    }

    return (
        <Box>
            <Container>
                <Box mb={4} mt={8}>
                    <Typography component="h1" variant='h3' fontWeight="bold">Work</Typography>
                </Box>
                <WorkFilter onSubmit={handleFilterChange} initialValue={initialSearchPayload} />
                <WorkList loading={!router.isReady || isLoading} workList={data?.data || []} />
                {totalPages > 0 &&
                    <Stack alignItems="center">
                        <Pagination count={totalPages} page={_page} onChange={handleNextPage} />
                    </Stack>
                }

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
