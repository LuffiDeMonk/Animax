import React from 'react'
import Banner from '@/components/details/Banner'
import GenreContainer from '@/components/details/GenreContainer'
import ImageCard from '@/components/details/ImageCard'
import TitleContainer from '@/components/details/TitleContainer'
import MainTitleContainer from '@/components/home/TitleContainer'
import Container from '@/components/home/Container'
import { GetSingleMovie } from '@/helpers/getSingleMovie'
import CastCarousel from '@/components/details/CastCarousel'
import SimilarMovies from '@/components/details/SimilarMovies'
import VideoContainer from '@/components/details/VideoContainer'

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const getSingleMovie: Promise<MovieData> = GetSingleMovie(slug)
    const singleMovie = await getSingleMovie

    return {
        title: `Animax | ${singleMovie.title}`,
        description: singleMovie.overview
    }

}

export default async function MovieDetails({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const getSingleMovie: Promise<MovieData> = GetSingleMovie(slug)
    const singleMovie = await getSingleMovie
    return (
        <>
            <Banner image={singleMovie.backdrop_path}>
                <Container className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-4xl w-full flex flex-col lg:flex-row gap-4">
                    <ImageCard image={singleMovie.poster_path} />
                    <TitleContainer>
                        {/* heading */}
                        <h1 className='text-4xl md:text-5xl font-semibold'>{singleMovie.title}</h1>
                        <GenreContainer data={singleMovie.genres} />
                        {/* description */}
                        <p className='text-xs md:text-sm'>{singleMovie.overview}</p>
                        {/* <CastCarousel /> */}
                        <CastCarousel id={slug} />
                    </TitleContainer>
                </Container>
            </Banner>

            <MainTitleContainer
                title='Videos'
            />
            <VideoContainer id={slug} />
            <MainTitleContainer
                title='Similar Movies'
            />
            <SimilarMovies id={slug} />
        </>
    )
}
