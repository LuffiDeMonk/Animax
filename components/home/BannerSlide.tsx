import Image from 'next/image'
import React from 'react'
import Container from './Container'


type Props = {
    title: string,
    description: string,
    poster: string,
    backdrop_path: string,
    children: React.ReactNode
}

export default function BannerSlide({ title, description, poster, backdrop_path, children }: Props) {
    return (
        <div className='relative h-[85vh] w-full'>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-white/10"></div>
            <Image src={backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : '/banner.jpg'} fill alt="Banner" className='absolute object-cover -z-20' priority />
            <Container className='absolute left-1/2 -translate-x-1/2 w-full z-10 flex gap-8 justify-between items-end h-full text-white'>
                <div className='space-y-5'>
                    <h1 className='text-5xl sm:text-7xl font-semibold'>{title}</h1>
                    <p className='text-xs sm:text-base line-clamp-3'>{description}</p>
                    {children}
                </div>
                <div className="hidden lg:block relative w-72 h-96 overflow-hidden rounded-xl shrink-0">
                    <Image src={`https://image.tmdb.org/t/p/w500${poster}`} alt="Banner" fill className='absolute object-cover' priority />
                </div>
            </Container>
        </div>
    )
}
