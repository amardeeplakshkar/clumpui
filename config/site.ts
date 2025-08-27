import { InstallationGuide, IntroductionContent } from "@/constant";
import { Apple, Component, Currency, Download, FileUpIcon, FolderHeart, FormInput, FormInputIcon, Grid2X2, IdCard, Image, Loader, Newspaper, PartyPopper, Search, Shapes, Text, User, UserCircle2Icon, Voicemail } from "lucide-react";

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
      Icon: Newspaper,
      content: IntroductionContent
    },
    {
      title: "Installation",
      path: "/docs/installation",
      new: false,
      Icon: Download,
      content: InstallationGuide
    },
  ],
  aiComponents: [
    {
      title: "ai-input-search",
      path: "/components/ai-input-search",
      new: true,
      description: "",
      Icon: Search
    },
    {
      title: "ai-loading",
      path: "/components/ai-loading",
      new: true,
      description: "",
      Icon: Loader
    },
    {
      title: "ai-prompt",
      path: "/components/ai-prompt",
      new: true,
      description: "",
      Icon: FormInput
    },
    {
      title: "ai-text-loading",
      path: "/components/ai-text-loading",
      new: true,
      description: "",
      Icon: Loader
    },
    {
      title: "ai-voice",
      path: "/components/ai-voice",
      new: true,
      description: "",
      Icon: Voicemail
    },
  ],
  textComponents: [
    {
      title: "scroll-text",
      path: "/components/scroll-text",
      new: true,
      description: "",
      Icon: Text
    },
    {
      title: "dynamic-text",
      path: "/components/dynamic-text",
      new: true,
      description: "",
      Icon: Text
    },
    {
      title: "glitch-text",
      path: "/components/glitch-text",
      new: true,
      description: "",
      Icon: Text
    },
    {
      title: "matrix-text",
      path: "/components/matrix-text",
      new: true,
      description: "",
      Icon: Text
    },
    {
      title: "shimmer-text",
      path: "/components/shimmer-text",
      new: true,
      description: "",
      Icon: Text
    },
    {
      title: "type-writer",
      path: "/components/type-writer",
      new: true,
      description: "",
      Icon: Text
    },
    {
      title: "swoosh-text",
      path: "/components/swoosh-text",
      new: true,
      description: "",
      Icon: Text
    },
    {
      title: "sliced-text",
      path: "/components/sliced-text",
      new: true,
      description: "",
      Icon: Text
    },
  ],
  buttonComponents: [
    {
      title: "attract-button",
      path: "/components/attract-button",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "command-button",
      path: "/components/command-button",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "gradient-button",
      path: "/components/gradient-button",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "hold-button",
      path: "/components/hold-button",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "particle-button",
      path: "/components/particle-button",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "social-button",
      path: "/components/social-button",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "switch-button",
      path: "/components/switch-button",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "v0-button",
      path: "/components/v0-button",
      new: true,
      description: "",
      Icon: Component
    },
  ],
  cardComponents: [
    {
      title: "apple-activity-card",
      path: "/components/apple-activity-card",
      new: true,
      description: "",
      Icon: Apple
    },
    {
      title: "card-flip",
      path: "/components/card-flip",
      new: true,
      description: "",
      Icon: IdCard
    },
    {
      title: "card-stack",
      path: "/components/card-stack",
      new: true,
      description: "",
      Icon: IdCard
    },
    {
      title: "carousel-cards",
      path: "/components/carousel-cards",
      new: true,
      description: "",
      Icon: IdCard
    },
    {
      title: "currency-transfer",
      path: "/components/currency-transfer",
      new: true,
      description: "",
      Icon: Currency
    },
    {
      title: "liquid-glass-card",
      path: "/components/liquid-glass-card",
      new: true,
      description: "",
      Icon: IdCard
    },
    {
      title: "tweet-card",
      path: "/components/tweet-card",
      new: true,
      description: "",
      Icon: Component
    },
  ],
  components: [
    {
      title: "action-search-bar",
      path: "/components/action-search-bar",
      new: true,
      description: "",
      Icon: Search
    },

    {
      title: "avatar-picker",
      path: "/components/avatar-picker",
      new: true,
      description: "",
      Icon: User
    },
    {
      title: "background-paths",
      path: "/components/background-paths",
      new: true,
      description: "",
      Icon: Image
    },
    {
      title: "beams-background",
      path: "/components/beams-background",
      new: true,
      description: "",
      Icon: Image
    },
    {
      title: "bento-grid",
      path: "/components/bento-grid",
      new: true,
      description: "",
      Icon: Grid2X2
    },
    {
      title: "example-form",
      path: "/components/example-form",
      new: true,
      description: "",
      Icon: FormInputIcon
    },
    {
      title: "file-upload",
      path: "/components/file-upload",
      new: true,
      description: "",
      Icon: FileUpIcon
    },
    {
      title: "hello-world",
      path: "/components/hello-world",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "profile-dropdown",
      path: "/components/profile-dropdown",
      new: true,
      description: "",
      Icon: UserCircle2Icon
    },

    {
      title: "shape-hero",
      path: "/components/shape-hero",
      new: true,
      description: "",
      Icon: Shapes
    },
    {
      title: "smooth-drawer",
      path: "/components/smooth-drawer",
      new: true,
      description: "",
      Icon: FolderHeart
    },
    {
      title: "smooth-tab",
      path: "/components/smooth-tab",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "team-selector",
      path: "/components/team-selector",
      new: true,
      description: "",
      Icon: Component
    },
    {
      title: "toolbar",
      path: "/components/toolbar",
      new: true,
      description: "",
      Icon: Component
    },
  ],
};

export type SiteConfig = typeof siteConfig;

export const componentGroups = {
  "ai-components": siteConfig.aiComponents,
  "text-components": siteConfig.textComponents,
  "button-components": siteConfig.buttonComponents,
  "card-components": siteConfig.cardComponents,
  "other-components": siteConfig.components,
};

export type ComponentGroupKey = keyof typeof componentGroups;

export const ComponentAuthor = [
  {
    authorName: "Magic UI",
    website: "https://magicui.design",
    components: [
      "smooth-tab",
      "toolbar"
    ]
  },
  {
    authorName: "Kokonut UI",
    website: "https://kokonutui.com",
    components: [
      "ai-input-search",
      "ai-loading"
    ]
  }
]