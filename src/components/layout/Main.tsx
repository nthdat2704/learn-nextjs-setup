import React from 'react'
import { LayoutProps } from '@/models'
import { HeaderDesktop } from '@/components/common/Header/index'
import Footer from '@/components/common/Footer'
import { Box, Stack } from '@mui/material'
import Link from 'next/link'


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

