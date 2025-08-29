'use client'

import { cn } from '@/lib/utils'
import { SearchIcon, Command, Search, SquareDashedMousePointer } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Badge } from '../ui/badge'
import { Dialog, DialogClose, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import { componentGroups } from '@/config/site'
import { CategoryCard, ProjectCard } from './CoreCard'
import Link from 'next/link'
import { ScrollArea } from '../ui/scroll-area'

const allComponentGroups = Object.entries(componentGroups).map(
  ([key, data]) => ({
    label: key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: key,
    data,
  })
)

const SearchDialog = () => {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredCategory, setHoveredCategory] = useState<{
    title: string
    thumbnails: string[]
  } | null>(null)
  const [hoveredComponent, setHoveredComponent] = useState<{
    title: string
    url: string
  } | null>(null)

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

  type OriginalGroup = typeof allComponentGroups[number];

  type ExtendedGroup = OriginalGroup & {
    __showAll?: boolean;
  }

  const filteredGroups = allComponentGroups
    .map(group => {
      const matchesCategoryLabel = group.label.toLowerCase().includes(searchQuery.toLowerCase());
      const matchingComponents = group.data.filter(component =>
        component.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (matchesCategoryLabel) {
        return {
          ...group,
          __showAll: true as const,
        };
      }

      if (matchingComponents.length > 0) {
        return {
          ...group,
          data: matchingComponents,
          __showAll: true as const,
        };
      }

      return null;
    })
    .filter(Boolean) as ExtendedGroup[];

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
      <DialogContent className='p-2 gap-1 overflow-hidden rounded-xl'>
        <DialogTitle className='sr-only'>Search Components</DialogTitle>
        <div className='flex items-center justify-center gap-2'>
          <Search className='ml-2' />
          <Input
            placeholder='Search Components'
            className='focus-visible:ring-0 border-0 focus-visible:border-0 outline-none focus:outline-none'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Separator />
        <div className='grid grid-cols-2'>
          <ScrollArea className='h-[32dvh] pr-2'>
            {filteredGroups.map((group, groupIndex) => {
              const title = group.label
              const thumbnails = group.data.map(c => c.title)

              return (
                <div key={groupIndex}>
                  <DialogClose asChild>
                    <Link
                      href={`/s/${group.value}`}
                      onMouseEnter={() =>
                        setHoveredCategory({
                          title: group.label,
                          thumbnails: (group.__showAll
                            ? componentGroups[group.value as keyof typeof componentGroups]
                            : group.data
                          ).map(c => c.title).slice(0, 4),
                        })
                      }
                      onMouseLeave={() => setHoveredCategory(null)}
                    >
                      <div className='p-2 hover:bg-muted rounded-md cursor-pointer'>
                        {group.label}
                      </div>
                    </Link>
                  </DialogClose>
                  {group.data.map((component, index) => {
                    const compTitle = component.title
                    const url = component.path

                    return (
                      <Link
                        key={index}
                        href={url}
                      >
                        <DialogClose asChild>
                          <div
                            className='p-2 hover:bg-muted rounded-md cursor-pointer'
                            onMouseEnter={() =>
                              setHoveredComponent({ title: compTitle, url })
                            }
                            onMouseLeave={() => setHoveredComponent(null)}
                          >
                            {compTitle
                              .split('-')
                              .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
                              .join(' ')}
                          </div>
                        </DialogClose>
                      </Link>
                    )
                  })}
                </div>
              )
            })}
          </ScrollArea>
          <div className='mt-1'>
            {hoveredCategory && (
              <CategoryCard
                title={hoveredCategory.title}
                thumbnails={hoveredCategory.thumbnails}
                showDetails={false}
              />
            )}
            {hoveredComponent && (
              <ProjectCard
                thumbnails={[hoveredComponent.title]}
                title={hoveredComponent.title}
                url={hoveredComponent.url}
                showDetails={false}
              />
            )}
            {!hoveredCategory && !hoveredComponent && (
              <div className='text-muted-foreground  flex flex-col items-center justify-center size-full gap-4'>
                <SquareDashedMousePointer />
                <div className="text-sm px-4 text-center">
                  Hover over a category or component to preview
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default SearchDialog
