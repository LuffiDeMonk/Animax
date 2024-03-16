import React from 'react'
import Container from './Container'
import Link from 'next/link'

type Props = {
    title: string,
    link?: string
}

export default function TitleContainer({ title, link }: Props) {
    return (
        <Container className='mt-12'>
            <div className="flex items-center justify-between">
                <h1 className='text-2xl font-semibold'>{title}</h1>
                {link && <Link href={link} className='text-sm py-2 px-4 border border-white rounded-full'>Show more</Link>}
            </div>
        </Container>
    )
}
