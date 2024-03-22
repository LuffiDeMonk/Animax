import RegisterForm from '@/components/auth/RegisterForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
    title: 'Animax | Register',
    description: "This page allows users to register to our application"
}

export default function page() {
    return (
        <RegisterForm />
    )
}
