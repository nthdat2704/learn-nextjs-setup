import { useAuth } from '@/swrHook'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

type AuthProps = {
    children: React.ReactNode
}

export const Auth = ({ children }: AuthProps) => {
    const router = useRouter();
    const { firstLoading, profile } = useAuth();
    useEffect(() => {
        if (!firstLoading && !profile?.username) router.push("/login")
    }, [router, profile, firstLoading])

    if (!profile?.username) return <div>loading...</div>

    return (
        <div>{children}</div>
    )
}
