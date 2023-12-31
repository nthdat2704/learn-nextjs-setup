import { LoginForm } from '@/components/auth'
import { MainLayout } from '@/components/layout'
import { useAuth } from '@/swrHook'
import { getErrorMessage } from '@/utils/get-error-message'
import { Box, Paper, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'
type Props = {}

const Login = (props: Props) => {
    const router = useRouter();
    const { login, logout } = useAuth({
        revalidateOnMount: false,
    })
    const handleSubmitLogin = async (data: any) => {
        try {
            await login(data)
            router.push('/')
        } catch (error) {
            const message = getErrorMessage(error)
            toast.error(message)
        }
    }
    return (
        <Box>
            <Paper
                elevation={4}
                sx={{
                    mx: 'auto',
                    mt: 8,
                    p: 4,
                    maxWidth: '480px',
                    textAlign: 'center',
                }}
            >
                <Typography component="h1" variant="h5" mb={3}>
                    Reusable Form - Login
                </Typography>
                <LoginForm onSubmit={handleSubmitLogin} />

            </Paper>

        </Box >

    )
}
Login.Layout = MainLayout
export default Login 