import React from 'react'
import { ThemeProvider } from '../ui/theme-provider'
import Navbar from '../core/Navbar'
import { AppSidebar } from '../ui/app-sidebar'
import { SidebarProvider, SidebarInset } from '../ui/sidebar'
import ToasterProvider from './ToasterProvider'

const RootProvider = ({ children }: { children: React.ReactNode }) => {
    return (
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
        >
            <ToasterProvider>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <div className='relative p-2 flex flex-1 flex-col'>
                        <Navbar />
                        <div className='max-w-6xl w-full mx-auto'>
                        {children}
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
            </ToasterProvider>
        </ThemeProvider>
    )
}

export default RootProvider