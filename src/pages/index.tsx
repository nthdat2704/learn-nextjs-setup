import { AdminLayout, MainLayout } from '@/components/layout'
import { Box, Container } from '@mui/material'
import { FeatureWork, Hero, RecentPost } from '@/components/home'
import { Seo } from '@/components/common/Seo'

export default function Home() {
  return (
    <Box
    >
      <Seo
        data={{
          title: 'NextJS Tutorials | Easy Frontend',
          description:
            'Step by step tutorials to build a full CRUD website using NextJS for beginners',
          url: 'https://learn-nextjs-fawn.vercel.app/',
          thumbnailUrl:
            'https://cdn.getshifter.co/caa65008efb706a8bfc6f7e4045d6a018420c3df/uploads/2020/11/nextjs.png',
        }}
      />

      <Hero />
      <RecentPost />
      <FeatureWork />
    </Box>
  )
}
Home.Layout = MainLayout

