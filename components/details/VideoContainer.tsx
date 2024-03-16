import { GetMovieTrailers } from '@/helpers/getMovieTrailer'
import React from 'react'
import VideoPlayer from './VideoPlayer'
import Container from '../home/Container'

type Props = {
    id: string
}

type APIResponse = {
    id: number,
    results: MovieVideos[]
}

export default async function VideoContainer({ id }: Props) {
    const getMovieTrailer: Promise<APIResponse> = GetMovieTrailers(id)
    const { results } = await getMovieTrailer

    const filteredResults = results.filter(item => item.type.toLowerCase() === 'trailer')
    return (
        <Container className='space-y-7'>
            {
                filteredResults.map(item => (
                    <div key={item.key}>
                        <VideoPlayer id={item.key} />
                    </div>
                ))
            }
        </Container>
    )
}
