import { Component, Download, Newspaper, PartyPopper } from "lucide-react";

export const siteConfig = {
  name: "ClumpUI - Collection of React Component Libraries",
  url: "https://x.com/amardeepdevs",
  description:
    "A NextJS UI Library Starter Template with TypeScript, TailwindCSS, and MDX, create your own UI Library with ease.",
  author: "Amardeep Lakshkar",
  links: {
    twitter: "https://x.com/amardeepdevs",
    github: "https://github.com/amardeeplakshkar/clumpui",
  },
  docs: [
    {
      title: "Introduction",
      path: "/docs/introduction",
      new: false,
      Icon: Newspaper
    },
     {
      title: "Installation",
      path: "/docs/installation",
      new: false,
      Icon: Download
    },
  ],
  components: [
    {
     title: "confetti-button",
      path: "/components/confetti-button",
      new: true,
      description: "",
      Icon: PartyPopper
    },
    {
      title: "complex-component",
      path: "/components/complex-component",
      new: true,
      description: "",
      Icon: Component
    },
  ],
};

export type SiteConfig = typeof siteConfig;
