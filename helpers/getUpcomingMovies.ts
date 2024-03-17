export const GetUpcomingMovies = async () => {
    const response = await fetch(`${process.env.HOSTNAME}/movie/upcoming`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,

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

