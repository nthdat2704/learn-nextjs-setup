import axiosClient from '@/api-client/httpRequest'
import { MainLayout } from '@/components/layout'
import Student from '@/swrComponents/Student'
import Student2 from '@/swrComponents/Student2'
import React, { useEffect } from 'react'

type Props = {}

const About = (props: Props) => {







    return (
        <>About

            <Student studentId='lea11ziflg8xoixq' />
            <Student2 studentId='lea11ziflg8xoixv' />

        </>
    )
}
About.Layout = MainLayout

export default About