import { Box, Container, Stack, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { ROUTE_LIST } from './routers'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { useAuth } from '@/swrHook'

type Props = {}

const HeaderDesktop = (props: Props) => {
    const router = useRouter();
    const { profile, logout } = useAuth();
    const isLoggedIn = Boolean(profile?.username)

    const routerlist = ROUTE_LIST.filter((route: any) => !route?.requireLogin || isLoggedIn)


    return (
        <Box component="header" py={2} textAlign="center" display={{ xs: "none", md: "block" }}>
            <Container>
                <Stack direction="row" justifyContent="flex-end">
                    {routerlist.map(route =>
                        <MuiLink
                            key={route?.path}
                            href={route?.path}
                            component={Link}
                            className={clsx({ active: router.pathname === route.path })}
                            sx={{
                                ml: 2
                            }}>{route?.label}</MuiLink>
                    )}
                    {!isLoggedIn &&
                        <MuiLink
                            href="/login"
                            component={Link}
                            sx={{
                                ml: 2
                            }}
                        >Login</MuiLink>
                    }
                    {isLoggedIn &&
                        <MuiLink
                            href=""
                            component={Link}
                            sx={{
                                ml: 2
                            }}
                            onClick={logout}
                        >Logout</MuiLink>
                    }


                </Stack>

            </Container>
        </Box >
    )
}

export default HeaderDesktop