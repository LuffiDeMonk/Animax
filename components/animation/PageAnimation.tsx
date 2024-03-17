'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
    children: React.ReactNode
}

const PageVariants = {
    hidden: {
        opacity: 0,
        x: -50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
            type: 'tween'
        }
    },
}

export default function PageAnimation({ children }: Props) {
    return (
        <>
            <AnimatePresence>
                <motion.div
                    variants={PageVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{
                        opacity: 0,
                        x: -50
                    }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </>
    )
}
