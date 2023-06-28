import axiosClient from '@/api-client/httpRequest'
import { useStudent } from '@/swrHook'
import React, { useEffect } from 'react'
import useSWR from 'swr'
interface StudentProps {
    studentId: string
}

const Student2 = ({ studentId }: StudentProps) => {
    const { data, mutate } = useStudent({
        url: `/posts/${studentId}`
    })



    return (
        <div>Student2-
            {data?.author || '...'}

        </div>
    )
}

export default Student2