import Banner from '@/components/explore/Banner'
import CardContainer from '@/components/explore/CardContainer'
import Filters from '@/components/explore/Filters'
import Pagination from '@/components/explore/Pagination'
import Container from '@/components/home/Container'
import { GetMovies } from '@/helpers/getMovies'
import React, { Suspense } from 'react'



export default function ExploreMovies({ searchParams }: { searchParams?: { sort?: string, page?: string } }) {

    const sort = searchParams?.sort || 'popularity.desc'
    const page = searchParams?.page || '1'

    return (
        <>
            <Banner />
            <Container>
                <Suspense>
                    <Filters />
                </Suspense>
                <CardContainer sort={sort} newPage={page} />
            </Container>
        </>
    )
}
