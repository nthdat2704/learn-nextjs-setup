import React from 'react'
import { LayoutProps } from '@/models'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'


export const MainLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

