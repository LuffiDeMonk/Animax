export const GetSimilarTV = async (showId: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/tv/${showId}/similar?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error("Error occured while fetching similar shows information ")
    }
    return response.json()
}