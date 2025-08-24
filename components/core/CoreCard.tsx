'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Card } from '../ui/card'
import { ArrowRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

const CategoryCard = ({ title, thumbnails }: { title: string, thumbnails: any }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Card
      className="p-2 gap-0 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative grid grid-cols-2 gap-1 rounded-lg overflow-hidden h-[216px]">
        {thumbnails.map((item: string, i: number) => (
          <motion.img
            key={i}
            src={`https://placehold.co/190x108?text=${item}`}
            alt=""
            className="object-cover p-0.5 rounded-lg w-full h-full absolute"
            initial={false}
            animate={
              isHovered
                ? i === 0
                  ? {
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 1,
                    zIndex: 10
                  }
                  : {
                    opacity: 0,
                    zIndex: 0
                  }
                : {
                  top: `${Math.floor(i / 2) * 50}%`,
                  left: `${(i % 2) * 50}%`,
                  width: '50%',
                  height: '50%',
                  opacity: 1,
                  zIndex: 1
                }
            }
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <p>{title}</p>
        <motion.div
          initial={{
            opacity: 0,
            x: -10
          }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.1 }}
        >
          <ArrowRight className="size-4" />
        </motion.div>
      </div>
    </Card>
  )
}

const ProjectCard = ({ title, thumbnails, profile }: { title: string, thumbnails: any, profile: any }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Card
      className="p-2 gap-0 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative grid grid-cols-2 gap-1 rounded-lg overflow-hidden h-[216px]">
        <img
          src={`https://placehold.co/190x108?text=${thumbnails[0]}`}
          alt=""
          className="object-cover p-0.5 rounded-lg w-full h-full absolute"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute size-full flex items-center justify-center"
        >
          <div className="size-full  text-sm text-white bg-black/40 transition-all backdrop-blur-xs flex items-center justify-center">
            <Button variant={'secondary'}>
              Show Details
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center pt-2">
        <Avatar>
          <AvatarImage src={`https://placehold.co/200?text=${profile[0].avatar}`} />
          <AvatarFallback>
            CU
          </AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center ml-2'>
          <h3 className='font-semibold tracking-wide leading-3'>
            {title}
          </h3>
          <p className='text-xs text-muted-foreground'>
            {profile[0].label}
          </p>
        </div>
        <motion.div
          className='ml-auto'
          initial={{
            opacity: 0,
            x: -10
          }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.1 }}
        >
          <ArrowRight className="size-4" />
        </motion.div>
      </div>
    </Card>
  )
}
export {
  ProjectCard,
  CategoryCard
}