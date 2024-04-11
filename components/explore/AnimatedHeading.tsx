'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

type Props = {
    title: string
}

export default function AnimatedHeading() {
    const pathname = usePathname()
    return (
        <div
        >
            <div className="inset-0 absolute z-20 text-5xl md:text-7xl font-semibold text-white uppercase flex items-center justify-center overflow-hidden">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    viewport={{
                        once: true,
                    }}
                >{pathname.split('/')[2]}</motion.p>
            </div>
        </div>
    )
}
