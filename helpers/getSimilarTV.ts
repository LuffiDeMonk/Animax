export const GetSimilarTV = async (showId: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/tv/${showId}/similar?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI2ODdlY2ZmMDJkNmE2MzQ5MzU2NzY4MTAyN2NjYiIsInN1YiI6IjYzOGUxMDJkMjQ0MTgyMDBiMjNlM2EwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuGipZrE3zBOJ-P8ehUMIo_-rqqZhf2xUa8sO6TEQl8'
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