import Footer from '@/components/common/Footer'
import { HeaderDesktop } from '@/components/common/Header/index'
import { LayoutProps } from '@/models'
import { Auth } from '../common/auth'


export const AdminLayout = ({ children }: LayoutProps) => {
    return (
        <Auth>
            <HeaderDesktop />
            sidebar
            {children}
            <Footer />
        </Auth >
    )
}

