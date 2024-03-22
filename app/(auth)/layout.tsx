import React from 'react'
import type { Metadata } from 'next'

type AuthLayoutProps = {
    children: React.ReactNode
}

export const metadata: Metadata = {
    title: "Animax | Login",
    description: 'This page restricts the unauthorized user to visit the application'
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className='h-screen flex items-center justify-center bg-[url("/auth-banner.jpg")] bg-center bg-cover bg-no-repeat'>
            {children}
        </div>
    )
}
