'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { lazy, Suspense, useMemo } from 'react'
import { Card } from "@/components/ui/card";
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { buildElementsFromJsonPaths } from "@/lib/utils";
import { CodeBlock, CodeBlockGroup, CodeBlockCode } from "@/components/ui/code-block";
import { Check, Copy, Maximize, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { OpenInV0Button } from '../ui/open-in-v0-button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog';

const componentMap: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
    "complex-component": () => import(`@/registry/new-york/complex-component/complex-component`),
    "hello-world": () => import(`@/registry/new-york/hello-world/hello-world`),
    "example-form": () => import(`@/registry/new-york/example-form/example-form`),
};

const ComponentPreview = ({ component }: { component: any }) => {
    const { theme } = useTheme()
    const [forceUpdate, setForceUpdate] = React.useState(false);
    const [key, setKey] = React.useState(0);
    const [selectedFileId, setSelectedFileId] = React.useState<string | null>(null);
    const [selectedFileContent, setSelectedFileContent] = React.useState<string | null>(null);
    const [selectedFileName, setSelectedFileName] = React.useState<string | null>(null);

    const ELEMENTS = buildElementsFromJsonPaths(component.files);

    const LazyComponent = useMemo(() => {
        const importer = componentMap[component.name];
        if (!importer) {
            throw new Error(`Unknown component: ${component.name}`);
        }
        return lazy(importer);
    }, [component.name]);

    const reloadComponent = () => {
        setKey((prevKey) => prevKey + 1);
        setForceUpdate(!forceUpdate);
    };

    const onSelectFile = (id: string, path: string) => {
        setSelectedFileId(id);

        const file = component.files.find((f: any) => f.path === path);
        setSelectedFileContent(file?.content || "File not found");
        setSelectedFileName(file?.path?.split("/").pop() ?? "File not found");
    };

    const [copied, setCopied] = React.useState(false)

    const code = selectedFileContent!

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div>
            <nav>

            </nav>
            <Tabs defaultValue='code'>
                <TabsList>
                    <TabsTrigger value='code'>
                        Code
                    </TabsTrigger>
                    <TabsTrigger value='preview'>
                        Preview
                    </TabsTrigger>
                </TabsList>
                <TabsContent value='code' className="grid grid-cols-6 w-full">

                    <Tree
                        className="col-span-2 bg-red-500 rounded-md bg-background p-2"
                        initialSelectedId={selectedFileId ?? '3'}
                        initialExpandedItems={[
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                        ]}
                        elements={ELEMENTS}
                    >
                        {ELEMENTS.map((el: any) =>
                            renderTree(el, onSelectFile, selectedFileId)
                        )}
                    </Tree>
                    <Card className="col-span-4">
                        {selectedFileContent ? (
                            <CodeBlock>
                                <CodeBlockGroup className="border-border border-b py-2 pr-2 pl-4">
                                    <div className="flex items-center gap-2">
                                        <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
                                            ClumpUI
                                        </div>
                                        <span className="text-muted-foreground text-sm">{selectedFileName}</span>
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8"
                                        onClick={handleCopy}
                                    >
                                        {copied ? (
                                            <Check className="h-4 w-4 text-green-500" />
                                        ) : (
                                            <Copy className="h-4 w-4" />
                                        )}
                                    </Button>
                                </CodeBlockGroup>
                                <CodeBlockCode theme={theme === "dark" ? "github-dark" : "github-light"} code={code} language="tsx" />
                            </CodeBlock>
                        ) : (
                            <p className="text-muted-foreground p-4">Click a file to view its content.</p>
                        )}
                    </Card>
                </TabsContent>
                <TabsContent value='preview'>
                    <Card className="bg-secondary-foreground/5">
                        <div className="flex items-center justify-center min-h-[400px] relative">
                            <Suspense fallback={
                                <>
                                    Loading...
                                </>
                            }>
                                <LazyComponent key={key} />
                            </Suspense>
                            <div className="flex items-center gap-2 text-white absolute top-2 right-2">
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className=""
                                    onClick={reloadComponent}
                                >
                                    <RotateCcw className="text-secondary-foreground" />
                                </Button>
                                <OpenInV0Button
                                    name={component.name}
                                />
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button size={'icon'} variant={"ghost"}>
                                            <Maximize className="text-secondary-foreground" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="size-full m-0 max-w-full p-0 flex justify-center items-center">
                                        <DialogTitle className="sr-only">
                                            Copmpnent Preview
                                        </DialogTitle>
                                        <Suspense fallback={<div></div>}>
                                            <LazyComponent key={key} />
                                        </Suspense>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    </Card>
                </TabsContent>
            </Tabs>
        </div >
    )
}

interface RegistryFile {
    path: string;
    content: string;
    type: string;
    target?: string;
}

interface RegistryData {
    name: string;
    title: string;
    description: string;
    registryDependencies: string[];
    files: RegistryFile[];
}

export function RegistryViewer({ data }: { data: RegistryData }) {
    return (
        <div className="p-4 space-y-6">
            <div>
                <h1 className="text-2xl font-bold">{data.title}</h1>
                <p className="text-gray-600">{data.description}</p>
                <p><strong>Dependencies:</strong> {data.registryDependencies.join(", ")}</p>
            </div>

            <div className="space-y-4">
                {data.files.map((file, idx) => (
                    <div key={idx} className="border p-4 rounded-md bg-secondary-foreground/5">
                        <h2 className="font-semibold">{file.path.replace("registry/new-york/", "")}</h2>
                        <p className="text-sm text-gray-500">{file.type}</p>
                        {file.target && <p className="text-sm text-blue-500">Target: {file.target}</p>}
                        <pre className="mt-2 bg-white p-2 overflow-x-auto text-sm text-black">
                            <code>{file.content}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}

function renderTree(
    element: any,
    onSelectFile: (id: string, path: string) => void,
    selectedFileId: string | null
) {
    const isSelected = selectedFileId === element.id;

    if (element.children && element.children.length > 0) {
        return (
            <Folder key={element.id} element={element.name} value={element.id}>
                {element.children.map((child: any) =>
                    renderTree(child, onSelectFile, selectedFileId)
                )}
            </Folder>
        );
    }

    return (
        <File
            key={element.id}
            value={element.id}
            isSelectable
            isSelect={isSelected}
            onClick={() => onSelectFile(element.id, element.path)}
        >
            <p className="truncate">{element.name}</p>
        </File>
    );
}


export default ComponentPreview