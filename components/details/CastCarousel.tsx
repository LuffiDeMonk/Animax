import React from 'react'
import Carousel from './Carousel'
import { GetMovieCast } from '@/helpers/getMovieCast'
import CastCarouselCard from './CastCarouselCard'

type Props = {
    id: string
}

type APIResponse = {
    id: number,
    cast: MovieCast[]
}

export default async function CastCarousel({ id }: Props) {
    const getMovieCast: Promise<APIResponse> = GetMovieCast(id)
    const { cast } = await getMovieCast
    return (
        <div className='space-y-2'>
            <h2 className='text-xl font-semibold'>Casts</h2>
            {cast.length < 4 ? (
                <div className='flex gap-2'>
                    {cast.map(item =>
                        <CastCarouselCard
                            character={item.character}
                            className='w-32'
                            name={item.name}
                            image={item.profile_path}
                            key={item.id} />)}
                </div>
            ) :
                (<Carousel data={cast} />)}
        </div>
    )
}
