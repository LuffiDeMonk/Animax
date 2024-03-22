import React from 'react'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import SocialLogin from './SocialLogin'

type CardWrapperProps = {
    children: React.ReactNode,
    cardTitle: string,
    socialIcons?: boolean,
    footerLink: string,
    footerTitle: string
}

export default function CardWrapper({ cardTitle, socialIcons, children, footerLink, footerTitle }: CardWrapperProps) {
    return (
        <Card className='w-96 rounded-lg drop-shadow-lg'>
            <CardHeader>
                <CardTitle className='text-center'>{cardTitle}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
                {/* login with social account */}
                {socialIcons && <SocialLogin />}
            </CardContent>
            <CardFooter
                className='flex items-center justify-center'
            >
                <Link href={footerLink} className='text-xs hover:underline'>{footerTitle}</Link>
            </CardFooter>
        </Card>
    )
}
