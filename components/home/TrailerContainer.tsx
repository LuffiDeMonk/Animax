import React from 'react'
import { Button } from '../ui/button'
import { PlayCircle } from 'lucide-react'
import Link from 'next/link'
import TrailerPopover from './TrailerPopover'

type Props = {
    id: number
}


export default function TrailerContainer({ id }: Props) {
    return (
        <div className='flex items-center gap-5 pt-10'>
            <Link href={`/movie/${id}`}>
                <Button className="rounded-full bg-red-500 text-white px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-lg font-semibold hover:bg-white hover:text-black transition-all">
                    <PlayCircle size={32} className='mr-2' />
                    Watch Now
                </Button>
            </Link>
            {/* <TrailerPopover id={id.toString()} /> */}
        </div>
    )
}
