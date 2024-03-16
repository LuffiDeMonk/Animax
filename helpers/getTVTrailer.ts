export const GetTVTrailer = async (id: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/tv/${id}/videos?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI2ODdlY2ZmMDJkNmE2MzQ5MzU2NzY4MTAyN2NjYiIsInN1YiI6IjYzOGUxMDJkMjQ0MTgyMDBiMjNlM2EwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NuGipZrE3zBOJ-P8ehUMIo_-rqqZhf2xUa8sO6TEQl8'
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error("Error while fetching trailers for given tv show")
    }
    return response.json()
}