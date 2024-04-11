import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'

type Props = {
    index: number,
    title: string,
    posterImage: string,
    type: 'TV' | 'movie',
}

export default function MediaCard({ index, title, posterImage, type }: Props) {
    return (
        <div className=" pr-1 sm:pr-2 lg:pr-4 w-full">
            <div className='space-y-3'>
                <div className="relative rounded-xl overflow-hidden h-80">
                    <Suspense fallback={<>Loading</>}>
                        <Image src={posterImage ? `https://image.tmdb.org/t/p/w500${posterImage}` : "/image-placeholder.svg"} alt="Banner" fill className='absolute object-cover' />
                    </Suspense>
                </div>
                <div>
                    {type === 'movie' ? <Link href={`/movie/${index.toString()}`}><p className='text-sm font-semibold'>{title}</p></Link> :
                        <Link href={`/tv/${index.toString()}`}>
                            <p className='text-sm font-semibold'>{title}</p>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}
