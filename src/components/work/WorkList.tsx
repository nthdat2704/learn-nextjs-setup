import { Work } from '@/models'
import { Box, Divider } from '@mui/material'
import React, { Fragment } from 'react'
import { WorkCard } from './WorkCard'

interface WorkListProps {
    workList: Work[]
}

const WorkList = ({ workList }: WorkListProps) => {
    if (workList.length === 0) return null
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