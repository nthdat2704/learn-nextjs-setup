import axiosClient from '@/api-client/httpRequest'
import { EmptyLayout } from '@/components/layout'
import { AppPropsWithLayout } from '@/models'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'
import { SWRConfig } from 'swr'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout: any = Component.Layout ?? EmptyLayout
  return (
    <SWRConfig value={{
      fetcher: (url) => axiosClient.get(url),
      shouldRetryOnError: false,
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>)
}
