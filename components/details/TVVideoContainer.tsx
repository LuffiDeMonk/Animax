import { GetTVTrailer } from '@/helpers/getTVTrailer'
import React from 'react'
import Container from '../home/Container'
import VideoPlayer from './VideoPlayer'

type Props = {
    id: string
}

type APIResponse = {
    id: number,
    results: MovieVideos[]
}

export default async function TVVideoContainer({ id }: Props) {
    const getTVTrailer: Promise<APIResponse> = GetTVTrailer(id)
    const { results } = await getTVTrailer

    const filteredResults = results.filter(item => item.official === true)

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