import PageAnimation from '@/components/animation/PageAnimation'
import Navbar from '@/components/home/Navbar'
import React from 'react'

export default function template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <PageAnimation>
                <Navbar />
                {children}
            </PageAnimation>
        </>
    )
}
