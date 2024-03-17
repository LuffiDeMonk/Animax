export const GetPopularMovies = async () => {
    const response = await fetch(`${process.env.HOSTNAME}/movie/popular?language=en-US&page=1`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error('Error occured while fetching popular movies')
    }
    return response.json()
}