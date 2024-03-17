export const GetPopularTV = async () => {
    const response = await fetch(`${process.env.HOSTNAME}/tv/popular?language=en-US&page=1`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error('Error while fetching popular tv shows')
    }
    return response.json()
}