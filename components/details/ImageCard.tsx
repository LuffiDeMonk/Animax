import Image from 'next/image'
import React from 'react'

type Props = {
    image: string
}

export default function ImageCard({ image }: Props) {
    return (
        <div className="hidden lg:block lg:w-72 lg:shrink-0 lg:min-h-96 lg:overflow-hidden lg:rounded-2xl relative">
            <Image src={image ? `https://image.tmdb.org/t/p/w500${image}` : '/image-placeholder.svg'} fill alt='banner' className='absolute object-cover' />
        </div>
    )
}
