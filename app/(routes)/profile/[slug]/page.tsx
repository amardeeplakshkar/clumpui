import { ProjectCard } from '@/components/core/CoreCard';
import { getAuthorBySlug, getComponentsByAuthor, getAllAuthors } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateStaticParams() {
  const authors = getAllAuthors();

  return authors.map((author) => ({
    slug: author.slug,
  }));
}

const ProfilePage = async(props: {
  params: Promise<{ slug: string }>
}) => {
  const params = await props.params
  const { slug } = params
  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  
  const author = getAuthorBySlug(slugStr);

  if (!author) {
    notFound();
  }

  const authorComponents = getComponentsByAuthor(author.authorName);

  return (
    <div className="space-y-8">
      {/* Back button */}
      <div className="flex items-center gap-2">
        <Link href="/components">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Components
          </Button>
        </Link>
      </div>

      {/* Author header */}
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        <Avatar className="h-20 w-20">
          <AvatarImage
            src={`https://api.microlink.io/?url=${author.website}&embed=logo.url`}
            alt={author.authorName}
          />
          <AvatarFallback className="text-2xl">
            {author.avatar}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 space-y-3">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {author.authorName}
            </h1>
            <p className="text-muted-foreground">
              Component Author
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="text-sm">
              {authorComponents.length} Component{authorComponents.length !== 1 ? 's' : ''}
            </Badge>

            <Link href={author.website} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Components grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Components by {author.authorName}
          </h2>
          <span className="text-sm text-muted-foreground">
            {authorComponents.length} component{authorComponents.length !== 1 ? 's' : ''}
          </span>
        </div>

        {authorComponents.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {authorComponents.map((component, index) => (
              <ProjectCard
                key={component.title + index}
                thumbnails={[component.title]}
                title={component.title}
                url={component.path}
                showDetails={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No components found for this author.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
