import Banner from '@/components/details/Banner'
import GenreContainer from '@/components/details/GenreContainer'
import ImageCard from '@/components/details/ImageCard'
import TVCastCarousel from '@/components/details/TVCastCarousel'
import TitleContainer from '@/components/details/TitleContainer'
import MainTitleContainer from '@/components/home/TitleContainer'
import Container from '@/components/home/Container'
import { GetSingleTV } from '@/helpers/getSingleTV'
import React from 'react'
import SimilarShows from '@/components/details/SimilarShows'
import TVVideoContainer from '@/components/details/TVVideoContainer'

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const id = params.slug
    const getSingleTV: Promise<TVData> = GetSingleTV(id)
    const singleTV = await getSingleTV
    return {
        title: `Animax | ${singleTV.name}`,
        description: singleTV.overview
    }
}

export default async function SingleTV({ params }: { params: { slug: string } }) {
    const id = params.slug
    const getSingleTV: Promise<TVData> = GetSingleTV(id)
    const singleTV = await getSingleTV
    return (
        <>
            <Banner image={singleTV.backdrop_path}>
                <Container className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-4xl w-full flex flex-col lg:flex-row gap-4">
                    <ImageCard image={singleTV.poster_path} />
                    <TitleContainer>
                        {/* heading */}
                        <h1 className='text-4xl md:text-5xl font-semibold'>{singleTV.name}</h1>
                        <GenreContainer data={singleTV.genres} />
                        {/* description */}
                        <p className='text-xs md:text-sm'>{singleTV.overview}</p>
                        <TVCastCarousel id={id} />
                    </TitleContainer>
                </Container>
            </Banner>
            <MainTitleContainer title='Videos' />
            <TVVideoContainer id={id} />
            <MainTitleContainer title='Similar Shows' />
            <SimilarShows id={id} />

        </>
    )
}
