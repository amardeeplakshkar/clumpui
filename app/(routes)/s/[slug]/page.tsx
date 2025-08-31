import { notFound } from "next/navigation";
import { componentGroups, ComponentGroupKey } from "@/config/site";
import { ProjectCard } from "@/components/core/CoreCard";
import type { Metadata } from "next";

async function getComponentFromParams(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const { slug } = params
  const slugStr = Array.isArray(slug) ? slug[0] : slug;

  const groupKey = slugStr as ComponentGroupKey;
  const components = componentGroups[groupKey];

  return {
    groupKey,
    components
  }
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const {components, groupKey} = await getComponentFromParams(props)

  if (!components) return {};

  return {
    title: `${groupKey.replace(/-/g, " ")} - ClumpUI`,
    description: `Browse all ${groupKey.replace(/-/g, " ")} in ClumpUI.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(componentGroups).map((slug) => ({ slug }));
}

export default async function GroupPage(props: {
    params: Promise<{ slug: string }>
}) {
   const {components, groupKey} = await getComponentFromParams(props);

  if (!components) {
    return notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold capitalize">
        {groupKey.replace(/-/g, " ")}
      </h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {components.map((component, index) => (
          <ProjectCard
            key={index}
            thumbnails={[component.title]}
            title={component.title}
            url={component.path}
            showDetails
          />
        ))}
      </div>
    </div>
  );
}