import Image from 'next/image'
import React from 'react'

type Props = {
    children: React.ReactNode,
    image: string
}

export default function Banner({ children, image }: Props) {
    return (
        <section className='relative h-[120vh]'>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            <Image
                src={`https://image.tmdb.org/t/p/w500${image}`}
                fill
                alt='Banner'
                className='absolute object-cover -z-10'
            />
            {children}
        </section>
    )
}
