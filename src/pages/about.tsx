import axiosClient from '@/api-client/httpRequest'
import { MainLayout } from '@/components/layout'
import Student from '@/swrComponents/Student'
import Student2 from '@/swrComponents/Student2'
import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'

type Props = {}

const About = (props: Props) => {







    return (
        <>About
            <Box>
                <Typography component="h1" variant='h3' color="primary.main">
                    thanh dat
                </Typography>
            </Box>

            <Student studentId='lea11ziflg8xoixq' />
            <Student2 studentId='lea11ziflg8xoixv' />

        </>
    )
}
About.Layout = MainLayout

export default About