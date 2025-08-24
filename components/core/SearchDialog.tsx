'use client'

import { cn } from '@/lib/utils'
import { SearchIcon, Command } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'

const SearchDialog = () => {
    const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0
      const isCmdOrCtrl = isMac ? e.metaKey : e.ctrlKey

      if (isCmdOrCtrl && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className='cursor-pointer outline-0 focus-visible:border-0 '>
                <div className="max-w-[200px] pointer-events-none">
                    <div className={cn(
                        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive")}>
                          <div className='flex items-center justify-center'>
                        <SearchIcon className="size-4 text-muted-foreground" />
                          </div>
                        <Input className='-mt-1 border-0 outline-none' placeholder="Search..." />
                        <Badge variant={'secondary'} className='flex items-center justify-center gap-1'>
                            <Command className='size-4' />
                            K
                        </Badge>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>hello</DialogTitle>
            </DialogContent>
        </Dialog>
    )
}

export default SearchDialog