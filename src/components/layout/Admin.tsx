import Footer from '@/components/common/Footer'
import dynamic from 'next/dynamic'
import { LayoutProps } from '@/models'
const Auth = dynamic(() => import('../common/Auth'), { ssr: false })
const HeaderDesktop = dynamic(() => import('../common/Header/HeaderDesktop'), { ssr: false })


export const AdminLayout = ({ children }: LayoutProps) => {
    return (
        <Auth>
            <HeaderDesktop />
            {children}
            <Footer />
        </Auth>
    )
}

