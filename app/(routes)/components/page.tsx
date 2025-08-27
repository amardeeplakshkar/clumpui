import { CategoryCard, ProjectCard } from '@/components/core/CoreCard';
import { componentGroups, siteConfig } from '@/config/site';
import Link from 'next/link';
import React from 'react';

const allComponentGroups = Object.entries(componentGroups).map(
  ([key, data]) => ({
    label: key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    value: key,
    data,
  })
);

const Page = () => {
  return (
    <div className='space-y-10'>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {allComponentGroups.map((cat, index) => {
        const title = cat.label
        const thumbnails = cat.data.map(c => c.title)
        return(
          <Link href={"/s/"+cat.value} key={index}>
          <CategoryCard
            title={title}
            thumbnails={thumbnails.slice(0, 4)}
            />
        </Link>
          )
      })}
    </div>
      {allComponentGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h2 className='text-xl font-semibold mb-4'>{group.label}</h2>
          <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {group.data.map((component, index) => (
              <ProjectCard
                key={component.title + index}
                thumbnails={[component.title]}
                title={component.title}
                url={component.path}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
