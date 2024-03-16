import React from 'react'

export default function VideoPlayer({ id }: { id: string }) {
    return (
        <>
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                allowFullScreen
                loading='eager'
                className='w-full h-96'
            />
        </>
    )
}
