import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function TitleContainer({ children }: Props) {
    return (
        <div className='space-y-5'>{children}</div>
    )
}
