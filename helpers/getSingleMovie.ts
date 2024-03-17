export const GetSingleMovie = async (movieId: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/movie/${movieId}?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error("Error occured while fetching single movie data")
    }
    return response.json()
}