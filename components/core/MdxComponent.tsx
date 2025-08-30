'use client'
import React from 'react'
import { MemoizedMarkdown } from '../ui/memoized-markdown'

const MdxComponent = ({ content }: { content: string }) => {
    return (
        <div suppressHydrationWarning className='pb-4'>
            <MemoizedMarkdown
                id=''
                content={content} />
        </div>
    )
}


export default MdxComponent