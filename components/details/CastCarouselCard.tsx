import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

type Props = {
    image: string,
    name: string,
    character: string,
    className?: string
}

export default function CastCarouselCard({ image, name, character, className }: Props) {
    return (
        <div className='space-y-3'>
            <div className={cn("w-full h-52 relative overflow-hidden", className)}>
                <Image src={image ? `https://image.tmdb.org/t/p/w500${image}` : '/image-placeholder.svg'} fill alt="cast" className='absolute object-cover' />
            </div>
            <div className="space-y-1">
                <p className="text-xs">{name}</p>
                <p className='text-[9px] text-gray-300'>{character}</p>
            </div>
        </div>
    )
}
