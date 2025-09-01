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
    {
    title: "animated-beam-bidirectional",
    path: "/components/animated-beam-bidirectional",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-beam-demo",
    path: "/components/animated-beam-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-beam-multiple-inputs",
    path: "/components/animated-beam-multiple-inputs",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-beam-multiple-outputs",
    path: "/components/animated-beam-multiple-outputs",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-beam-unidirectional",
    path: "/components/animated-beam-unidirectional",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-circular-progress-bar-demo",
    path: "/components/animated-circular-progress-bar-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-gradient-text-demo",
    path: "/components/animated-gradient-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-gradient-text-demo-2",
    path: "/components/animated-gradient-text-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-grid-pattern-demo",
    path: "/components/animated-grid-pattern-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-list-demo",
    path: "/components/animated-list-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-shiny-text-demo",
    path: "/components/animated-shiny-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-subscribe-button-controlled-demo",
    path: "/components/animated-subscribe-button-controlled-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-subscribe-button-demo",
    path: "/components/animated-subscribe-button-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "animated-theme-toggler-demo",
    path: "/components/animated-theme-toggler-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "arc-timeline-demo",
    path: "/components/arc-timeline-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "aurora-text-demo",
    path: "/components/aurora-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "avatar-circles-demo",
    path: "/components/avatar-circles-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "bento-demo",
    path: "/components/bento-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "bento-demo-vertical",
    path: "/components/bento-demo-vertical",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "blur-fade-demo",
    path: "/components/blur-fade-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "blur-fade-text-demo",
    path: "/components/blur-fade-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "border-beam-demo",
    path: "/components/border-beam-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "border-beam-demo-2",
    path: "/components/border-beam-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "border-beam-demo-3",
    path: "/components/border-beam-demo-3",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "border-beam-demo-4",
    path: "/components/border-beam-demo-4",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "box-reveal-demo",
    path: "/components/box-reveal-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "code-comparison-demo",
    path: "/components/code-comparison-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "comic-text-demo",
    path: "/components/comic-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "confetti-basic-cannon",
    path: "/components/confetti-basic-cannon",
    new: true,
    description: "",
    Icon: PartyPopper
  },
  {
    title: "confetti-custom-shapes",
    path: "/components/confetti-custom-shapes",
    new: true,
    description: "",
    Icon: PartyPopper
  },
  {
    title: "confetti-demo",
    path: "/components/confetti-demo",
    new: true,
    description: "",
    Icon: PartyPopper
  },
  {
    title: "confetti-emoji",
    path: "/components/confetti-emoji",
    new: true,
    description: "",
    Icon: PartyPopper
  },
  {
    title: "confetti-fireworks",
    path: "/components/confetti-fireworks",
    new: true,
    description: "",
    Icon: PartyPopper
  },
  {
    title: "confetti-random-direction",
    path: "/components/confetti-random-direction",
    new: true,
    description: "",
    Icon: PartyPopper
  },
  {
    title: "confetti-side-cannons",
    path: "/components/confetti-side-cannons",
    new: true,
    description: "",
    Icon: PartyPopper
  },
  {
    title: "confetti-stars",
    path: "/components/confetti-stars",
    new: true,
    description: "",
    Icon: PartyPopper
  },
  {
    title: "cool-mode-custom",
    path: "/components/cool-mode-custom",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "cool-mode-demo",
    path: "/components/cool-mode-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "dock-demo",
    path: "/components/dock-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "dock-demo-2",
    path: "/components/dock-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "dock-demo-3",
    path: "/components/dock-demo-3",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "dot-pattern-demo",
    path: "/components/dot-pattern-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "dot-pattern-linear-gradient",
    path: "/components/dot-pattern-linear-gradient",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "dot-pattern-with-glow-effect",
    path: "/components/dot-pattern-with-glow-effect",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "file-tree-demo",
    path: "/components/file-tree-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "flickering-grid-demo",
    path: "/components/flickering-grid-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "flickering-grid-rounded-demo",
    path: "/components/flickering-grid-rounded-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "flip-text-demo",
    path: "/components/flip-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "globe-demo",
    path: "/components/globe-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "grid-beams-demo",
    path: "/components/grid-beams-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "grid-pattern-dashed",
    path: "/components/grid-pattern-dashed",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "grid-pattern-demo",
    path: "/components/grid-pattern-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "grid-pattern-linear-gradient",
    path: "/components/grid-pattern-linear-gradient",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "hero-video-dialog-demo",
    path: "/components/hero-video-dialog-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "hero-video-dialog-demo-top-in-bottom-out",
    path: "/components/hero-video-dialog-demo-top-in-bottom-out",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "highlighter-demo",
    path: "/components/highlighter-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "hyper-text-demo",
    path: "/components/hyper-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "icon-cloud-demo",
    path: "/components/icon-cloud-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "icon-cloud-demo-2",
    path: "/components/icon-cloud-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "icon-cloud-demo-3",
    path: "/components/icon-cloud-demo-3",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "interactive-grid-pattern-demo",
    path: "/components/interactive-grid-pattern-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "interactive-grid-pattern-demo-2",
    path: "/components/interactive-grid-pattern-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "interactive-hover-button-demo",
    path: "/components/interactive-hover-button-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "iphone-15-pro-demo",
    path: "/components/iphone-15-pro-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "iphone-15-pro-demo-2",
    path: "/components/iphone-15-pro-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "iphone-15-pro-demo-3",
    path: "/components/iphone-15-pro-demo-3",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "lens-demo",
    path: "/components/lens-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "lens-demo-2",
    path: "/components/lens-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "lens-demo-3",
    path: "/components/lens-demo-3",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "line-shadow-text-demo",
    path: "/components/line-shadow-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "magic-card-demo",
    path: "/components/magic-card-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "marquee-3d",
    path: "/components/marquee-3d",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "marquee-demo",
    path: "/components/marquee-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "marquee-demo-vertical",
    path: "/components/marquee-demo-vertical",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "marquee-logos",
    path: "/components/marquee-logos",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "meteors-demo",
    path: "/components/meteors-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "morphing-text-demo",
    path: "/components/morphing-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "neon-gradient-card-demo",
    path: "/components/neon-gradient-card-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "number-ticker-decimal-demo",
    path: "/components/number-ticker-decimal-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "number-ticker-demo",
    path: "/components/number-ticker-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "number-ticker-demo-2",
    path: "/components/number-ticker-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "orbiting-circles-demo",
    path: "/components/orbiting-circles-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "particles-demo",
    path: "/components/particles-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "pixel-image-demo",
    path: "/components/pixel-image-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "pointer-demo-1",
    path: "/components/pointer-demo-1",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "progressive-blur-demo",
    path: "/components/progressive-blur-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "pulsating-button-demo",
    path: "/components/pulsating-button-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "rainbow-button-demo",
    path: "/components/rainbow-button-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "rainbow-button-demo-2",
    path: "/components/rainbow-button-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "retro-grid-demo",
    path: "/components/retro-grid-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "ripple-button-demo",
    path: "/components/ripple-button-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "ripple-demo",
    path: "/components/ripple-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "safari-demo",
    path: "/components/safari-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "safari-demo-2",
    path: "/components/safari-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "safari-demo-3",
    path: "/components/safari-demo-3",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "safari-demo-4",
    path: "/components/safari-demo-4",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "scratch-to-reveal-demo",
    path: "/components/scratch-to-reveal-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "script-copy-btn-demo",
    path: "/components/script-copy-btn-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "scroll-based-velocity-demo",
    path: "/components/scroll-based-velocity-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "scroll-based-velocity-images-demo",
    path: "/components/scroll-based-velocity-images-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "scroll-progress-demo",
    path: "/components/scroll-progress-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "shimmer-button-demo",
    path: "/components/shimmer-button-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "shine-border-demo",
    path: "/components/shine-border-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "shine-border-demo-2",
    path: "/components/shine-border-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "shiny-button-demo",
    path: "/components/shiny-button-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "smooth-cursor-demo",
    path: "/components/smooth-cursor-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "sparkles-text-demo",
    path: "/components/sparkles-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "spinning-text-demo",
    path: "/components/spinning-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "spinning-text-demo-2",
    path: "/components/spinning-text-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "terminal-demo",
    path: "/components/terminal-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo",
    path: "/components/text-animate-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo-2",
    path: "/components/text-animate-demo-2",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo-3",
    path: "/components/text-animate-demo-3",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo-4",
    path: "/components/text-animate-demo-4",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo-5",
    path: "/components/text-animate-demo-5",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo-6",
    path: "/components/text-animate-demo-6",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo-7",
    path: "/components/text-animate-demo-7",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo-8",
    path: "/components/text-animate-demo-8",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-animate-demo-9",
    path: "/components/text-animate-demo-9",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "text-reveal-demo",
    path: "/components/text-reveal-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "tweet-card-demo",
    path: "/components/tweet-card-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "tweet-card-images",
    path: "/components/tweet-card-images",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "tweet-card-meta-preview",
    path: "/components/tweet-card-meta-preview",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "typing-animation-demo",
    path: "/components/typing-animation-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "video-text-demo",
    path: "/components/video-text-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "warp-background-demo",
    path: "/components/warp-background-demo",
    new: true,
    description: "",
    Icon: Component
  },
  {
    title: "word-rotate-demo",
    path: "/components/word-rotate-demo",
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
      "android-demo","android-demo-2","android-demo-3","animated-beam-bidirectional","animated-beam-demo","animated-beam-multiple-inputs","animated-beam-multiple-outputs","animated-beam-unidirectional","animated-circular-progress-bar-demo","animated-gradient-text-demo","animated-gradient-text-demo-2","animated-grid-pattern-demo","animated-list-demo","animated-shiny-text-demo","animated-subscribe-button-controlled-demo","animated-subscribe-button-demo","animated-theme-toggler-demo","arc-timeline-demo","aurora-text-demo","avatar-circles-demo","bento-demo","bento-demo-vertical","blur-fade-demo","blur-fade-text-demo","border-beam-demo","border-beam-demo-2","border-beam-demo-3","border-beam-demo-4","box-reveal-demo","code-comparison-demo","comic-text-demo","confetti-basic-cannon","confetti-custom-shapes","confetti-demo","confetti-emoji","confetti-fireworks","confetti-random-direction","confetti-side-cannons","confetti-stars","cool-mode-custom","cool-mode-demo","dock-demo","dock-demo-2","dock-demo-3","dot-pattern-demo","dot-pattern-linear-gradient","dot-pattern-with-glow-effect","file-tree-demo","flickering-grid-demo","flickering-grid-rounded-demo","flip-text-demo","globe-demo","grid-beams-demo","grid-pattern-dashed","grid-pattern-demo","grid-pattern-linear-gradient","hero-video-dialog-demo","hero-video-dialog-demo-top-in-bottom-out","highlighter-demo","hyper-text-demo","icon-cloud-demo","icon-cloud-demo-2","icon-cloud-demo-3","interactive-grid-pattern-demo","interactive-grid-pattern-demo-2","interactive-hover-button-demo","iphone-15-pro-demo","iphone-15-pro-demo-2","iphone-15-pro-demo-3","lens-demo","lens-demo-2","lens-demo-3","line-shadow-text-demo","magic-card-demo","marquee-3d","marquee-demo","marquee-demo-vertical","marquee-logos","meteors-demo","morphing-text-demo","neon-gradient-card-demo","number-ticker-decimal-demo","number-ticker-demo","number-ticker-demo-2","orbiting-circles-demo","particles-demo","pixel-image-demo","pointer-demo-1","progressive-blur-demo","pulsating-button-demo","rainbow-button-demo","rainbow-button-demo-2","retro-grid-demo","ripple-button-demo","ripple-demo","safari-demo","safari-demo-2","safari-demo-3","safari-demo-4","scratch-to-reveal-demo","script-copy-btn-demo","scroll-based-velocity-demo","scroll-based-velocity-images-demo","scroll-progress-demo","shimmer-button-demo","shine-border-demo","shine-border-demo-2","shiny-button-demo","smooth-cursor-demo","sparkles-text-demo","spinning-text-demo","spinning-text-demo-2","terminal-demo","text-animate-demo","text-animate-demo-2","text-animate-demo-3","text-animate-demo-4","text-animate-demo-5","text-animate-demo-6","text-animate-demo-7","text-animate-demo-8","text-animate-demo-9","text-reveal-demo","tweet-card-demo","tweet-card-images","tweet-card-meta-preview","typing-animation-demo","video-text-demo","warp-background-demo","word-rotate-demo"
    ]
  },
  {
    authorName: "Kokonut UI",
    website: "https://kokonutui.com",
    components: [
      "ai-input-search",
      "ai-loading","action-search-bar", "ai-input-search", "ai-loading", "ai-prompt", "ai-text-loading", "ai-voice", "apple-activity-card", "attract-button", "avatar-picker", "background-paths", "beams-background", "bento-grid", "button", "card-flip", "card-stack", "carousel-cards", "command-button", "complex-component", "currency-transfer", "dynamic-text", "example-form", "file-upload", "glitch-text", "gradient-button", "hello-world", "hold-button", "liquid-glass-card", "matrix-text", "particle-button", "profile-dropdown", "scroll-text", "shape-hero", "shimmer-text", "sliced-text", "smooth-drawer", "smooth-tab", "social-button", "switch-button", "swoosh-text", "team-selector", "toolbar", "tweet-card", "type-writer", "v0-button"
    ]
  }
]