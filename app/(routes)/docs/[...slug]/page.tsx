import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import MdxComponent from "@/components/core/MdxComponent";

async function getComponentFromParams(props: {
    params: Promise<{ slug: string }>
}) {
    const params = await props.params
    const { slug } = params
    const slugStr = Array.isArray(slug) ? slug[0] : slug;

    const component = siteConfig.docs.find((doc) => {
        const pathSegments = doc.path.split("/").filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1];
        return lastSegment === slugStr;
    });

    return component;
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
            <MdxComponent
                content={component.content}
            />
        </>
    );
}
