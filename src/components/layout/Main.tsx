import Footer from '@/components/common/Footer'
import { LayoutProps } from '@/models'
import { Box, Stack } from '@mui/material'
import dynamic from 'next/dynamic'
const HeaderDesktop = dynamic(() => import('../common/Header/HeaderDesktop'), { ssr: false })


export const MainLayout = ({ children }: LayoutProps) => {
    return (
        <Stack minHeight="100vh">
            <HeaderDesktop />
            <Box flexGrow={1}>
                {children}
            </Box>
            <Footer />
        </Stack>
    )
}

