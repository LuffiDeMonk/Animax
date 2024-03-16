import React from 'react'
import CardSlider from '../home/CardSlider'
import { GetSimilarTV } from '@/helpers/getSimilarTV'

type APIResponse = {
    page: string,
    results: TVData[]
}

export default async function SimilarShows({ id }: { id: string }) {
    const getSimilarShow: Promise<APIResponse> = GetSimilarTV(id)
    const data = await getSimilarShow
    return (
        <>
            <CardSlider data={data.results} type='TV' />

        </>
    )
}
