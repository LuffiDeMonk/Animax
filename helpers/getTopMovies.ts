export const GetTopMovies = async () => {
    const response = await fetch(`${process.env.HOSTNAME}/movie/top_rated?language=en-US&page=1`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error('Error while fetching top movies')
    }
    return response.json()
}