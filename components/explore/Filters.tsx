'use client'

import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { randomUUID } from 'crypto'

const filterMenu = [
    {
        id: 1,
        key: 'popularity.desc',
        name: 'Popularity(Desc)'
    },
    {
        id: 2,
        key: 'popularity.asc',
        name: 'Popularity(Asc)'
    },
    {
        id: 3,
        key: 'revenue.desc',
        name: 'Revenue(Desc)'
    },
    {
        id: 4,
        key: 'revenue.asc',
        name: 'Revenue(Asc)'
    },
    {
        id: 5,
        key: 'title.desc',
        name: 'Title(Desc)'
    },
    {
        id: 6,
        key: 'title.asc',
        name: 'Title(Asc)'
    },


]

export default function Filters() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const handleSelect = (value: string) => {
        const params = new URLSearchParams(searchParams)
        if (value) {
            params.set('sort', value)
        } else {
            params.delete('sort')
        }
        replace(`${pathname}?${params.toString()}`, { scroll: false })
    }
    return (
        <div className='flex items-center justify-end my-7'>
            <Select onValueChange={e => handleSelect(e)} defaultValue={searchParams.get('sort')?.toString()}>
                <SelectTrigger className="w-[180px] rounded-full bg-transparent">
                    <SelectValue placeholder={"Select Filter"} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {
                            filterMenu.map(menu => (
                                <SelectItem key={menu.id} value={menu.key}>{menu.name}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
