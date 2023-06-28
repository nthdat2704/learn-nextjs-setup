import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
        </div>
    )
}

export default Header