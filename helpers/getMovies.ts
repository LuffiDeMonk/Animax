type IParams = {
    type: 'movie' | 'tv',
    page: string,
    sortBy?: string

}

export const GetMovies = async <T>({ type, page, sortBy }: IParams): Promise<T> => {
    const response = await fetch(`${process.env.HOSTNAME}/discover/${type}?include_adult=false&language=en-US&page=${page}${sortBy ? `&sort_by=${sortBy}` : ''}`, {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TOKEN}`
        },
        next: {
            revalidate: 3600
        }
    })
    return response.json()
}