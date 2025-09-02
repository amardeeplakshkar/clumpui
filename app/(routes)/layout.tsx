import RootProvider from '@/components/providers/RootProvider'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <RootProvider>
            {children}
        </RootProvider>
    )
}

export default layout