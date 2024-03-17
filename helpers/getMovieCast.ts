export const GetMovieCast = async (id: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/movie/${id}/credits`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error('Error while getting cast information')
    }
    return response.json()
}