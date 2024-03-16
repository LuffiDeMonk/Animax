import { GetTopTV } from '@/helpers/getTopTV'
import React from 'react'
import CardSlider from './CardSlider'

type APIResponse = {
    page: string,
    results: TVData[]
}

export default async function TopRatedTVCarousel() {
    const getTopTv: Promise<APIResponse> = GetTopTV()
    const data = await getTopTv
    return (
        <>
            <CardSlider data={data.results} type='TV' />
        </>
    )
}
