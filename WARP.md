# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

ClumpUI is a custom shadcn/ui registry template that allows users to distribute and install custom React components via CLI. It's a Next.js TypeScript application that serves as a component registry, aggregating UI patterns from multiple libraries into one unified system.

The project is structured as a shadcn-compatible registry where components are defined in `registry.json` and served both as static files and through API routes, making them installable via the `shadcn` CLI.

## Development Commands

### Core Development
```bash
# Development with Turbopack (faster)
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Lint the codebase
pnpm lint

# Build the registry (generates public/r/*.json files)
pnpm registry:build
```

### Component Development
```bash
# Install a component from the registry
shadcn add https://clumpui.amardeep.space/r/[component-name]

# Build the registry after adding new components
pnpm registry:build
```

## Architecture Overview

### Registry System
- **`registry.json`**: Central configuration defining all available components, their dependencies, and file paths
- **`registry/new-york/`**: Contains all registry component implementations organized by component name
- **`public/r/`**: Generated static JSON files for each component (created by `shadcn build`)
- **`app/registry/[name]/route.ts`**: Dynamic API route handler that serves registry components

### Application Structure
- **`app/`**: Next.js App Router pages and layouts
  - `layout.tsx`: Root layout with theme and sidebar providers
  - `page.tsx`: Homepage showcasing sample components
  - `(routes)/`: Route groups for components and documentation pages
  - `registry/[name]/route.ts`: Component API endpoint
- **`components/`**: Reusable UI components and providers
  - `ui/`: shadcn/ui base components
  - `providers/`: Theme and toaster providers
  - `core/`: Application-specific components (Navbar, etc.)
- **`config/site.ts`**: Site configuration with component categorization and metadata
- **`lib/utils.ts`**: Utility functions including `cn()` class merger and tree builders
- **`hooks/`**: Custom React hooks (auto-resize, mobile detection, etc.)
- **`constant/`**: Static content like installation guides and documentation

### Component Categories
Components are organized into five main categories in `config/site.ts`:
- **AI Components**: Search, loading, prompts, voice components
- **Text Components**: Animated text effects (scroll, glitch, matrix, etc.)
- **Button Components**: Interactive buttons (gradient, particle, hold, etc.)
- **Card Components**: Card layouts and transitions
- **Other Components**: General UI components (grids, forms, backgrounds, etc.)

### Styling System
- **Tailwind CSS v4** with custom CSS variables for theming
- **Custom CSS properties** for colors, animations, and layout
- **shadcn/ui** design tokens with custom extensions
- **Motion/Framer Motion** for animations in many components
- **Dark/Light theme** support via next-themes

### Registry Component Structure
Each registry component follows this pattern:
1. **Component file**: `registry/new-york/[name]/[name].tsx`
2. **Dependencies**: Listed in registry.json (npm packages + shadcn components)
3. **Supporting files**: Hooks, utilities, icons as needed
4. **Export pattern**: Default and named exports for flexibility

### Component Installation Flow
1. User runs `shadcn add [registry-url]`
2. CLI fetches component definition from API or static file
3. Downloads all listed files and installs dependencies
4. Files are placed in user's project following shadcn conventions

## Key Files for Component Development

### Adding New Components
1. Create component in `registry/new-york/[component-name]/`
2. Add entry to `registry.json` with dependencies and file paths
3. Update `config/site.ts` to include in appropriate category
4. Run `pnpm registry:build` to generate static files
5. Test installation with `shadcn add [local-url]`

### Registry JSON Schema
```json
{
  "name": "component-name",
  "type": "registry:component",
  "dependencies": ["npm-packages"],
  "registryDependencies": ["shadcn-components"],
  "files": [
    {
      "path": "registry/new-york/component/component.tsx",
      "type": "registry:component"
    }
  ]
}
```

### Path Aliases
- `@/`: Root directory
- `@/components`: Components directory
- `@/lib`: Library utilities
- `@/hooks`: Custom hooks
- `@/ui`: UI components

## Development Workflows

### Testing Components Locally
1. Add component to registry.json and build
2. Start dev server: `pnpm dev`
3. Test component display on homepage or create test page
4. Use local registry URL for installation testing

### Component Quality Standards
- Follow shadcn/ui patterns and conventions
- Include proper TypeScript types
- Use Tailwind CSS for styling
- Ensure accessibility standards
- Test in both light and dark themes
- Include proper dependencies in registry.json

### Building for Production
1. Run `pnpm registry:build` to ensure all registry files are current
2. Build with `pnpm build`
3. Verify all static registry files are generated in `public/r/`

## Important Notes

- Registry components must be compatible with shadcn CLI installation
- All components use Tailwind CSS v4 and may not work with v3
- Motion/Framer Motion is heavily used for animations
- Components are authored primarily by Magic UI and Kokonut UI (see ComponentAuthor in site.ts)
- The project serves as both a showcase and a functional component registry
- Static files are generated in `public/r/` and should be committed
