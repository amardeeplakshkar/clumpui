'use client'

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import React from "react";
import { toast } from "sonner";

const tabs = [
  {
    name: "pnpm",
    value: "pnpm",
    content: "pnpm dlx shadcn@latest add ",
  },
  {
    name: "npm",
    value: "npm",
    content: "npx shadcn@latest add ",
  },
  {
    name: "yarn",
    value: "yarn",
    content: "yarn dlx shadcn@latest add ",
  },
  {
    name: "bun",
    value: "bun",
    content: "bunx --bun shadcn@latest add ",
  },
];

export default function PackageManagerTabs({
  customCommand,
  registryUrl,
}: {
  registryUrl: string;
  customCommand?: string;
}) {
  const [selected, setSelected] = React.useState<string>("pnpm");

  const handleTerminalClick = (packageManager: string) => {
    let commandToCopy: string;

    if (customCommand) {
      commandToCopy = customCommand;
    } else {
      const tab = tabs.find((t) => t.value === packageManager);
      if (!tab) return;
      commandToCopy = `${tab.content}${registryUrl}`;
    }

    navigator.clipboard.writeText(commandToCopy);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="border rounded-xl overflow-hidden bg-secondary-foreground/5 max-w-[95dvw]">
      <Tabs
        defaultValue={tabs[0].value}
        className="w-full"
        value={selected}
        onValueChange={setSelected}
      >
        <TabsList className="w-full p-0 bg-transparent justify-start border-b rounded-none">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="rounded-none bg-transparent h-full data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              <div className="text-[13px]">{tab.name}</div>
            </TabsTrigger>
          ))}
          <Button
            onClick={() => handleTerminalClick(selected)}
            size="icon"
            variant="secondary"
            className="ml-auto mr-1 h-7 w-7"
          >
            <Copy className="!h-3.5 !w-3.5" />
          </Button>
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="h-10 flex items-center justify-between gap-2 rounded-md pl-3 pr-1.5">
              <div className="text-[13px] truncate">
                {customCommand ? customCommand : `${tab.content}${registryUrl}`}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
