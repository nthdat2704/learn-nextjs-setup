import axiosClient from '@/api-client/httpRequest'
import { useStudent } from '@/swrHook'
import React, { useEffect } from 'react'
import useSWR from 'swr'
interface StudentProps {
    studentId: string
}

const Student = ({ studentId }: StudentProps) => {
    const { data, mutate } = useStudent({
        url: `/posts/${studentId}`
    })


    const handleClickMutate = () => {
        mutate({
            author: 'thanh dat'
        })
    }



    return (
        <div>Student1-
            {data?.author || '...'}
            <div><button onClick={handleClickMutate}>Click</button></div>

        </div>
    )
}

export default Student