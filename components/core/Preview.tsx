'use client'

import React, { lazy, Suspense, useMemo } from 'react'
import { Card } from "@/components/ui/card";

const Preview = ({ component }: { component: any }) => {
    const [key, setKey] = React.useState(0);


    const LazyComponent = useMemo(() => {
        const componentName = component.name;

        const allowedComponents = [
            "action-search-bar", "ai-input-search", "ai-loading", "ai-prompt", "ai-text-loading", "ai-voice", "apple-activity-card", "attract-button", "avatar-picker", "background-paths", "beams-background", "bento-grid", "button", "card-flip", "card-stack", "carousel-cards", "command-button", "complex-component", "currency-transfer", "dynamic-text", "example-form", "file-upload", "glitch-text", "gradient-button", "hello-world", "hold-button", "liquid-glass-card", "matrix-text", "particle-button", "profile-dropdown", "scroll-text", "shape-hero", "shimmer-text", "sliced-text", "smooth-drawer", "smooth-tab", "social-button", "switch-button", "swoosh-text", "team-selector", "toolbar", "tweet-card", "type-writer", "v0-button", "android-demo", "android-demo-2", "android-demo-3", "animated-beam-bidirectional", "animated-beam-demo", "animated-beam-multiple-inputs", "animated-beam-multiple-outputs", "animated-beam-unidirectional", "animated-circular-progress-bar-demo", "animated-gradient-text-demo", "animated-gradient-text-demo-2", "animated-grid-pattern-demo", "animated-list-demo", "animated-shiny-text-demo", "animated-subscribe-button-controlled-demo", "animated-subscribe-button-demo", "animated-theme-toggler-demo", "arc-timeline-demo", "aurora-text-demo", "avatar-circles-demo", "bento-demo", "bento-demo-vertical", "blur-fade-demo", "blur-fade-text-demo", "border-beam-demo", "border-beam-demo-2", "border-beam-demo-3", "border-beam-demo-4", "box-reveal-demo", "code-comparison-demo", "comic-text-demo", "confetti-basic-cannon", "confetti-custom-shapes", "confetti-demo", "confetti-emoji", "confetti-fireworks", "confetti-random-direction", "confetti-side-cannons", "confetti-stars", "cool-mode-custom", "cool-mode-demo", "dock-demo", "dock-demo-2", "dock-demo-3", "dot-pattern-demo", "dot-pattern-linear-gradient", "dot-pattern-with-glow-effect", "file-tree-demo", "flickering-grid-demo", "flickering-grid-rounded-demo", "flip-text-demo", "globe-demo", "grid-beams-demo", "grid-pattern-dashed", "grid-pattern-demo", "grid-pattern-linear-gradient", "hero-video-dialog-demo", "hero-video-dialog-demo-top-in-bottom-out", "highlighter-demo", "hyper-text-demo", "icon-cloud-demo", "icon-cloud-demo-2", "icon-cloud-demo-3", "interactive-grid-pattern-demo", "interactive-grid-pattern-demo-2", "interactive-hover-button-demo", "iphone-15-pro-demo", "iphone-15-pro-demo-2", "iphone-15-pro-demo-3", "lens-demo", "lens-demo-2", "lens-demo-3", "line-shadow-text-demo", "magic-card-demo", "marquee-3d", "marquee-demo", "marquee-demo-vertical", "marquee-logos", "meteors-demo", "morphing-text-demo", "neon-gradient-card-demo", "number-ticker-decimal-demo", "number-ticker-demo", "number-ticker-demo-2", "orbiting-circles-demo", "particles-demo", "pixel-image-demo", "pointer-demo-1", "progressive-blur-demo", "pulsating-button-demo", "rainbow-button-demo", "rainbow-button-demo-2", "retro-grid-demo", "ripple-button-demo", "ripple-demo", "safari-demo", "safari-demo-2", "safari-demo-3", "safari-demo-4", "scratch-to-reveal-demo", "script-copy-btn-demo", "scroll-based-velocity-demo", "scroll-based-velocity-images-demo", "scroll-progress-demo", "shimmer-button-demo", "shine-border-demo", "shine-border-demo-2", "shiny-button-demo", "smooth-cursor-demo", "sparkles-text-demo", "spinning-text-demo", "spinning-text-demo-2", "terminal-demo", "text-animate-demo", "text-animate-demo-2", "text-animate-demo-3", "text-animate-demo-4", "text-animate-demo-5", "text-animate-demo-6", "text-animate-demo-7", "text-animate-demo-8", "text-animate-demo-9", "text-reveal-demo", "tweet-card-demo", "tweet-card-images", "tweet-card-meta-preview", "typing-animation-demo", "video-text-demo", "warp-background-demo", "word-rotate-demo"
        ]
            ;
        if (!allowedComponents.includes(componentName)) {
            throw new Error(`Unknown or unsafe component: ${componentName}`);
        }

        return lazy(() =>
            import(`@/registry/new-york/${componentName}/${componentName}`)
        );
    }, [component.name]);
    return (
        <Card className="bg-secondary-foreground/5">
            <div className="relative flex w-full items-center justify-center p-10 min-h-[99.5dvh] max-h-dvh overflow-y-auto">
                <Suspense fallback={
                    <>
                        Loading...
                    </>
                }>
                    <LazyComponent key={key} />
                </Suspense>
            </div>
        </Card>
    )
}

export default Preview