export const getTVCasts = async (id: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/tv/${id}/credits?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error("Error while fetching cast information for the show")
    }
    return response.json()
}