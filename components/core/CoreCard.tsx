'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ArrowRight } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { getAuthorProfile } from '@/lib/utils'
import { Separator } from '@radix-ui/react-separator'
import PackageManagerTabs from '../ui/tabs-02'

const CategoryCard = ({ title, thumbnails, showDetails = true }: { title: string, thumbnails: any, showDetails?: boolean }) => {
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

      {showDetails && <div className="flex items-center justify-between pt-2">
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
      </div>}
    </Card>
  )
}

const ProjectCard = ({ url, title, thumbnails, showDetails }: { title: string, thumbnails: any, url: string, showDetails?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  const profile = getAuthorProfile(title);

  return (
    <Link href={url}>
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
            <div className="size-full text-sm text-white bg-black/40 transition-all backdrop-blur-xs flex items-center justify-center">
              <Button variant={'secondary'}>Show Details</Button>
            </div>
          </motion.div>
        </div>

        {showDetails && <div className="flex items-center pt-2">
          <Avatar>
            <AvatarImage src={`https://api.microlink.io/?url=${profile.website}&embed=logo.url`} />
            <AvatarFallback>{profile.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-center ml-2">
            <h3 className="font-semibold tracking-wide leading-3">{title}</h3>
            <p className="text-xs text-muted-foreground">{profile.authorName}</p>
          </div>
          <motion.div
            className="ml-auto"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.1 }}
          >
            <ArrowRight className="size-4" />
          </motion.div>
        </div>}
      </Card>
    </Link>
  );
};

const InfoCard = ({ component, profile }: { component: any, profile: any }) => {
  return (
    <div className='flex flex-col flex-1 gap-4'>
      <PackageManagerTabs
        registryUrl={'"' + process.env.NEXT_PUBLIC_BASE_URL + '/r/' + component.name + '.json"'}
      />
      <Card className="w-full max-w-sm rounded-xl">
        <CardHeader>
          <CardTitle className="text-lg">{component.name.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {component.description}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Created by</p>
            <Link target='_blank' rel="noopener noreferrer" href={profile.website} className="flex items-center gap-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={`https://api.microlink.io/?url=${profile.website}&embed=logo.url`} alt="Magic UI" />
                <AvatarFallback>{profile.avatar}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{profile.authorName}</span>
            </Link>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-1">Registry</p>
            <Badge variant="secondary">{component.type}</Badge>
          </div>

          <div>
            <p className="text-xs text-muted-foreground mb-1">Tags</p>
            <div className="flex flex-wrap gap-1">
              {["Landing Page", "Text", "Hero", "Features", "Text Effects"].map(tag => (
                <Badge key={tag} variant="outline" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>
          <Separator className="bg-muted/30" />
          <div>
            <p className="text-xs text-muted-foreground mb-1">Files</p>
            {
              component.files.map((file: any, i: number) =>
                <Badge variant='outline' key={i} className="mt-1 text-xs">{file.path.replace(/^registry\/new-york\//, "")}</Badge>
              )
            }
          </div>
          <Separator className="bg-muted/30" />
          {component.dependencies && <div>
            <p className="text-xs text-muted-foreground mb-1">npm dependencies</p>
            <div className="flex flex-wrap gap-1">
              {
                component.dependencies.map((dep: string, i: number) =>
                  <Link target='_blank' rel="noopener noreferrer" href={`https://www.npmjs.com/package/${dep}`} key={i} className="text-xs">
                    <Badge variant={'outline'} className=''>
                      {dep}
                    </Badge>
                  </Link>
                )
              }
            </div>
          </div>}
          <Separator className="bg-muted/30" />
          {component.registryDependencies && <div>
            <p className="text-xs text-muted-foreground mb-1">npm dependencies</p>
            <div className="flex flex-wrap gap-1">
              {
                component.registryDependencies.map((dep: string, i: number) =>
                  <Link target='_blank' rel="noopener noreferrer" href={`https://ui.shadcn.com/docs/components/${dep}`} key={i} className="text-xs">
                    <Badge variant={'outline'} className=''>
                      {dep}
                    </Badge>
                  </Link>
                )
              }
            </div>
          </div>}
        </CardContent>
      </Card>
    </div>
  );
};

export {
  ProjectCard,
  CategoryCard,
  InfoCard
}