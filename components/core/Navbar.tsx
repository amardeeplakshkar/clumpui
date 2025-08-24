import React from 'react'
import { Card } from '../ui/card'
import ThemeToggleButton from '../ui/theme-toggle-button'
import Logo from './Logo'
import { SidebarTrigger } from '../ui/sidebar'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import SearchDialog from './SearchDialog'

const Navbar = () => {
    return (
        <Card className='sticky z-50 top-2 mb-2 flex flex-row items-center justify-between p-2'>
            <div className='flex flex-row items-center gap-2'>
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                />
                <Link href={"/"} className='flex flex-row items-center gap-2'>
                    <Logo />
                </Link>
            </div>
            <div className='flex flex-row items-center gap-2'>
                <SearchDialog/>
                <ThemeToggleButton variant="circle-blur" start="bottom-left" />
            </div>
        </Card>
    )
}

export default Navbar