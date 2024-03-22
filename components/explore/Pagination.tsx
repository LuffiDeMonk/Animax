'use client'

import { cn } from '@/lib/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ChevronRight, ChevronLeft } from 'lucide-react'

type Props = {
    currentPage: string,
    totalPages: string,
    size: number
}

export default function Pagination({ currentPage, totalPages, size }: Props) {
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0)

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()


    let CurrentPage = parseInt(currentPage)
    let TotalPages = parseInt(totalPages)
    let paginationArray: number[] = []

    for (let i = 1; i <= TotalPages; i++) {
        paginationArray.push(i)
    }


    const handleClick = (page: number) => {
        const params = new URLSearchParams(searchParams)
        if (page) {
            params.set('page', page.toString())
        } else {
            params.delete('page')
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    const handleNext = () => {
        CurrentPage++
        if (CurrentPage > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + size)
            setMinPageNumberLimit(minPageNumberLimit + size)
        }
        const params = new URLSearchParams(searchParams)
        if (CurrentPage) {
            params.set('page', CurrentPage.toString())
        } else {
            params.delete('page')
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }
    const handlePrev = () => {
        CurrentPage--

        if ((CurrentPage) < minPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit - size);
            setMinPageNumberLimit(minPageNumberLimit - size);
        }
        const params = new URLSearchParams(searchParams)
        if (CurrentPage) {
            params.set('page', CurrentPage.toString())
        } else {
            params.delete('page')
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }

    return (
        <div className='flex flex-wrap gap-6 my-12 justify-center items-center'>
            {CurrentPage !== 1 && <Button size='icon' variant='ghost' onClick={handlePrev}>
                <ChevronLeft />
            </Button>}
            {
                paginationArray.map(page => {
                    if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit - 1) {
                        return (
                            <div
                                key={page}
                                className={cn("size-10 rounded-full cursor-pointer flex items-center justify-center", `${page === CurrentPage ? "bg-white text-black" : ""}`)}
                                onClick={() => handleClick(page)}
                            >{page}</div>
                        )
                    } else {
                        return null
                    }
                })
            }
            <Button size='icon' variant='ghost' onClick={handleNext}>
                <ChevronRight />
            </Button>
        </div>
    )
}
