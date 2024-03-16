import { getTVCasts } from '@/helpers/getTVCast'
import React from 'react'
import Carousel from './Carousel'
import CastCarouselCard from './CastCarouselCard'
import Image from 'next/image'

type Props = {
    id: string
}

type APIResponse = {
    cast: MovieCast[]
}

export default async function TVCastCarousel({ id }: Props) {
    const getTVCast: Promise<APIResponse> = getTVCasts(id)
    const data = await getTVCast
    return (
        <div className='space-y-2'>
            <h2 className='text-xl font-semibold'>Casts</h2>

            {data.cast.length === 0 &&
                (
                    <div className='h-44 bg-gray-100/60 relative'>
                        <Image src="/no-data-found.jpg" fill alt="no data found" className='object-cover' />
                    </div>
                )}

            {data.cast.length < 4 ? (
                <div className='flex gap-2'>
                    {data.cast.map(item =>
                        <CastCarouselCard
                            character={item.character}
                            className='w-32'
                            name={item.name}
                            image={item.profile_path}
                            key={item.id} />)}
                </div>
            ) :
                (<Carousel data={data.cast} />)}
        </div>
    )
}