import Image from 'next/image'
import React from 'react'
import AnimatedHeading from './AnimatedHeading'

export default function Banner() {
    return (
        <div className='h-[80vh] relative'>
            <div className="absolute inset-0 bg-opacity-45 z-10 bg-black"></div>
            <AnimatedHeading />
            <Image src="/banner.jpg" fill alt='banner' className='object-cover' />
        </div>
    )
}
