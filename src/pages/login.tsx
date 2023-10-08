import { LoginForm } from '@/components/auth'
import { MainLayout } from '@/components/layout'
import React from 'react'

type Props = {}

const Login = (props: Props) => {
    const handleSubmitLogin = (data: any) => {
        console.log('login successed', data);
    }
    return (
        <LoginForm onSubmit={handleSubmitLogin} />
    )
}
Login.Layout = MainLayout
export default Login 