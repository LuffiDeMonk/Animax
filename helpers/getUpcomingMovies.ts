export const GetUpcomingMovies = async () => {
    const response = await fetch(`${process.env.HOSTNAME}/movie/upcoming`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI2ODdlY2ZmMDJkNmE2MzQ5MzU2NzY4MTAyN2NjYiIsInN1YiI6IjYzOGUxMDJkMjQ0MTgyMDBiMjNlM2EwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuGipZrE3zBOJ-P8ehUMIo_-rqqZhf2xUa8sO6TEQl8',

        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error('Error while fetching upcoming movies')
    }
    return response.json()
}

