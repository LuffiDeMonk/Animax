import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { GetMovieVideos } from '@/helpers/getMovieVideos'

type APIResponse = {
    results: MovieVideos[]
}

type Props = {
    id: string
}

export default async function TrailerPopover({ id }: Props) {
    const getTrailers: Promise<APIResponse> = GetMovieVideos(id)
    const videos = await getTrailers
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='rounded-full bg-transparent border-2 border-white text-white px-6 py-8 text-lg font-semibold transition-all hover:bg-transparent'>View Trailer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <div className="p-2 bg-white">
                    Hello
                </div>
                <DialogFooter>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}