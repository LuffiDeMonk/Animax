import React from 'react'
import Container from './Container'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='fixed top-0 z-50 w-full '>
            <Container className='py-4 flex items-center justify-between'>
                <div className="flex items-center gap-1">
                    <div className='relative w-20 h-10'>
                        <Image src="/logo.svg" alt='logo' fill />
                    </div>
                </div>
            </Container>
        </nav>
    )
}
