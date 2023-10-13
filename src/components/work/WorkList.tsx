import { Work } from '@/models'
import { Box, Divider, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import { WorkCard } from './WorkCard'
import Image from 'next/image'
import { WorkSkeleton } from './WorkSkeleton'

interface WorkListProps {
    workList: Work[],
    loading?: boolean,
}

const WorkList = ({ workList, loading = false }: WorkListProps) => {
    if (loading) return (
        <Box>
            {Array.from({ length: 3 }).map((_, index) => {
                return (<>
                    <WorkSkeleton />
                    <Divider sx={{ my: 3 }} />
                </>)
            })}
        </Box>

    )
    if (workList.length === 0) return (
        <Box>
            <Image src="" alt="No Data" />
            <Typography>No data</Typography>
        </Box>
    );
    return (
        <Box>
            {workList.map((work, index) =>
                <Fragment key={index}>
                    <WorkCard work={work} />
                    <Divider sx={{ my: 3 }} />
                </Fragment>
            )}

        </Box>
    )
}

export default WorkList 