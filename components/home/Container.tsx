import { cn } from '@/lib/utils'
import React from 'react'

export default function Container({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <section className={cn('max-w-6xl mx-auto px-4 text-white', className)}>{children}</section>
    )
}
