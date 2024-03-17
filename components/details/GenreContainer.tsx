import React from 'react'

type Props = {
    data: {
        id: number,
        name: string,
    }[] | undefined
}

export default function GenreContainer({ data }: Props) {
    return (
        <div className="flex flex-wrap gap-2">
            {
                data?.map((item) => (
                    <div className="py-1 px-6 rounded-full border border-white text-[8px] md:text-xs" key={item.id}>{item.name}</div>
                ))
            }
        </div>
    )
}
