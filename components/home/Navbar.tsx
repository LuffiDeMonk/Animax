import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { signOut } from '@/auth'

export default function Navbar() {
    return (
        <nav className='fixed top-0 z-50 w-full '>
            <Container className='py-4 flex items-center justify-between'>
                <div className="flex items-center gap-1">
                    <Link href='/'>
                        <div className='relative w-20 h-10'>
                            <Image src="/logo.svg" alt='logo' fill />
                        </div>
                    </Link>
                </div>
                <form
                    action={async () => {
                        'use server'
                        await signOut()
                    }}
                >
                    <Button>Log out</Button>
                </form>
            </Container>
        </nav>
    )
}
