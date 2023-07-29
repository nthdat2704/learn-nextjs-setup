import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ROUTE_LIST } from './routers'
import { useRouter } from 'next/router'
import clsx from 'clsx'

type Props = {}

export const HeaderDesktop = (props: Props) => {
    const router = useRouter();

    return (
        <Box component="header" py={2} textAlign="center" display={{ xs: "none", md: "block" }}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {ROUTE_LIST.map(route =>
                        <MuiLink
                            key={route?.path}
                            href={route?.path}
                            component={Link}
                            className={clsx({ active: router.pathname === route.path })}
                            sx={{
                                ml: 2
                            }}>{route?.label}</MuiLink>
                    )}


                </Stack>

            </Container>
        </Box >
    )
}
