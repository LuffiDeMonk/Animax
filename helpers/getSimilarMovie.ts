export const GetSimilarMovie = async (id: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/movie/${id}/similar?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error("Error occured while fetching similar movies")
    }
    return response.json()
}