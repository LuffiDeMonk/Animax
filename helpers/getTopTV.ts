export const GetTopTV = async () => {
    const response = await fetch(`${process.env.HOSTNAME}/tv/top_rated?language=en-US&page=1`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`,
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error('Error occured while fetching top rated TV')
    }
    return response.json()
}