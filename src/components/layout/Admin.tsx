import React from 'react'
import { LayoutProps } from '@/models'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'


export const AdminLayout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Header />
            sidebar
            {children}
            <Footer />
        </div>
    )
}

