export const GetMovieVideos = async (id: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/movie/${id}/videos`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error("Error while getting movie videos")
    }
    return response.json()
}