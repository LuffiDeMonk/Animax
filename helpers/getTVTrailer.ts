export const GetTVTrailer = async (id: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/tv/${id}/videos?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
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