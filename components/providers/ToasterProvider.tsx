'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import { Toaster } from 'sonner'

const ToasterProvider = ({ children }: { children: React.ReactNode }) => {
    const {theme} = useTheme()
    return (
        <>
            <Toaster
                position='top-center'
                theme={theme == 'dark'? 'dark' : "light"}
            />
            {children}
        </>
    )
}

export default ToasterProvider