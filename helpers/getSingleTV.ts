export const GetSingleTV = async (id: string) => {
    const response = await fetch(`${process.env.HOSTNAME}/tv/${id}?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        },
        next: {
            revalidate: 3600
        }
    })
    if (!response.ok) {
        throw new Error("Error occured while fetching single TV data")
    }
    return response.json()
}