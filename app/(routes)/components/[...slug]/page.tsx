import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import fs from 'fs';
import path from 'path';
import ComponentPreview from "@/components/core/ComponentPreview";

async function getComponentFromParams(props: {
    params: Promise<{ slug: string }>
}) {
    const params = await props.params
    const { slug } = params
    const slugStr = Array.isArray(slug) ? slug[0] : slug;
    const filePath = path.join(process.cwd(), 'public', 'r', `${slugStr}.json`);

    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const registryJson = JSON.parse(fileContents);

        const component = registryJson
        return component || "";
    } catch (error) {
        console.error(`Error reading JSON for slug "${slugStr}":`, error);
        return null;
    }
}


export async function generateMetadata(props: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const component = await getComponentFromParams(props);

    if (!component) {
        return {};
    }

    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", component.title);

    return {
        title: component.title,
        description: component.description,
        authors: { name: siteConfig.author },
        openGraph: {
            title: component.title,
            description: component.description,
            type: "article",
            url: component.title,
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: component.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: component.title,
            description: component.description,
            images: [`/api/og?${ogSearchParams.toString()}`],
        },
    };
}

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), 'public', 'r');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

    return files.map(file => {
        const slug = file.replace(/\.json$/, '');
        return { slug: [slug] };
    });
}

export default async function ComponentPage(props: {
    params: Promise<{ slug: string }>
}) {
    const component = await getComponentFromParams(props);

    if (!component) {
        return notFound();
    }

    return (
        <>
          <ComponentPreview
          component={component}
          />
        </>
    );
}
