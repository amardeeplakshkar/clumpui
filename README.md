# ClumpUI

<div align="center">
  <h3>Collection of React Component Libraries</h3>
  <p>A unified component registry aggregating the best UI patterns from multiple libraries</p>
  
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
  
  [Live Demo](https://clumpui.amardeep.space) • [Documentation](https://clumpui.amardeep.space/docs) • [Components](https://clumpui.amardeep.space/components)
</div>

## 🚀 What is ClumpUI?

**ClumpUI** brings together the best of modern component libraries into one unified, accessible system — so you don't have to choose just one.

Instead of locking you into a single design language or style guide, ClumpUI offers a growing collection of components inspired by popular libraries like **shadcn/ui**, **Magic UI**, **Kokonut UI**, and more — all ready to use, all in one place.

Think of it as a **hub** for production-ready components — curated, customizable, and developer-friendly.

## ✨ Features

- 🎨 **200+ Components** - Comprehensive collection of UI components
- 📦 **One-Click Install** - Install components via shadcn CLI
- 🎭 **Multiple Styles** - Components from various popular libraries
- 🌙 **Dark Mode** - Full dark/light theme support
- 📱 **Responsive** - Mobile-first design approach
- ⚡ **Fast** - Built with Next.js 15 and Turbopack
- 🎯 **TypeScript** - Full type safety
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS
- ♿ **Accessible** - Built with accessibility in mind
- 🔧 **Customizable** - Easy to modify and extend

## 🏗️ Component Categories

### 🤖 AI Components
Intelligent interfaces for modern applications
- AI Input Search
- AI Loading States
- AI Prompts
- Voice Interfaces

### ✏️ Text Components
Animated text effects and typography
- Scroll Text
- Glitch Text
- Matrix Text
- Shimmer Text
- Type Writer
- Dynamic Text

### 🔘 Button Components
Interactive buttons with engaging animations
- Gradient Button
- Particle Button
- Hold Button
- Social Button
- Command Button
- Switch Button

### 🃏 Card Components
Versatile card layouts and interactions
- Apple Activity Card
- Card Flip
- Card Stack
- Carousel Cards
- Liquid Glass Card
- Tweet Card

### 🧩 Other Components
General-purpose UI components
- Bento Grid
- File Upload
- Profile Dropdown
- Background Effects
- Form Components
- Navigation Elements

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js 18+ and pnpm installed:

```bash
node --version  # Should be 18+
npm install -g pnpm
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amardeeplakshkar/clumpui.git
   cd clumpui
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Using Components in Your Project

#### Method 1: shadcn CLI (Recommended)

1. **Install a component**
   ```bash
   npx shadcn@latest add https://clumpui.amardeep.space/r/particle-button
   ```

2. **Use it in your code**
   ```tsx
   import ParticleButton from "@/components/ui/particle-button"
   
   export default function Page() {
     return <ParticleButton>Click me!</ParticleButton>
   }
   ```

#### Method 2: Manual Installation

1. Copy the component code from the ClumpUI website
2. Create the component file in your project
3. Install any required dependencies
4. Import and use the component

## 📁 Project Structure

```
clumpui/
├── app/                          # Next.js App Router
│   ├── (routes)/                # Route groups
│   │   ├── components/          # Component showcase pages
│   │   └── docs/               # Documentation pages
│   ├── registry/[name]/        # Component API endpoints
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── globals.css             # Global styles
├── components/                   # Application components
│   ├── ui/                     # Base UI components
│   ├── core/                   # App-specific components
│   └── providers/              # Context providers
├── registry/                     # Component registry
│   └── new-york/              # Registry components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── config/                       # Configuration files
├── constant/                     # Static content
├── public/                       # Static assets
│   └── r/                      # Generated registry files
├── registry.json                 # Component definitions
└── package.json
```

## 🛠️ Development

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# Registry
pnpm registry:build   # Build registry files
```

### Adding New Components

1. **Create the component**
   ```bash
   mkdir registry/new-york/my-component
   touch registry/new-york/my-component/my-component.tsx
   ```

2. **Implement your component**
   ```tsx
   // registry/new-york/my-component/my-component.tsx
   export function MyComponent() {
     return (
       <div className="p-4 border rounded-lg">
         <h2>My Component</h2>
       </div>
     )
   }
   
   export default MyComponent
   ```

3. **Add to registry.json**
   ```json
   {
     "name": "my-component",
     "type": "registry:component",
     "dependencies": [],
     "registryDependencies": [],
     "files": [
       {
         "path": "registry/new-york/my-component/my-component.tsx",
         "type": "registry:component"
       }
     ]
   }
   ```

4. **Update site configuration**
   Add your component to the appropriate category in `config/site.ts`

5. **Build the registry**
   ```bash
   pnpm registry:build
   ```

### Component Guidelines

- Follow shadcn/ui patterns and conventions
- Use TypeScript for type safety
- Implement proper accessibility features
- Support both light and dark themes
- Include proper dependencies in registry.json
- Test components thoroughly

## 🎨 Styling

ClumpUI uses **Tailwind CSS v4** with custom design tokens:

- **Theme Support**: Full dark/light mode with `next-themes`
- **Custom Properties**: Extended CSS variables for theming
- **Animations**: Framer Motion integration
- **Responsive**: Mobile-first approach
- **Utility Classes**: Extensive use of Tailwind utilities

### Color System

The project uses a comprehensive color system with support for:
- Primary/Secondary colors
- Semantic colors (destructive, muted, accent)
- Chart colors
- Sidebar-specific colors

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-component
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### Contribution Guidelines

- Ensure components are accessible and responsive
- Follow the existing code style and patterns
- Update documentation as needed
- Test in both light and dark themes
- Add proper TypeScript types

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

ClumpUI is built on the shoulders of giants. Special thanks to:

- **[shadcn/ui](https://ui.shadcn.com/)** - For the incredible component architecture
- **[Magic UI](https://magicui.design/)** - For beautiful animated components
- **[Kokonut UI](https://kokonutui.com/)** - For innovative component designs
- **[Radix UI](https://www.radix-ui.com/)** - For accessible component primitives
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations

## 📞 Support

- 🌐 **Website**: [clumpui.amardeep.space](https://clumpui.amardeep.space)
- 🐙 **GitHub**: [amardeeplakshkar/clumpui](https://github.com/amardeeplakshkar/clumpui)
- 🐦 **Twitter**: [@amardeepdevs](https://x.com/amardeepdevs)

---

<div align="center">
  <p><strong>ClumpUI</strong> - One place. Every component. Build better, faster.</p>
  <p>Made with ❤️ by <a href="https://x.com/amardeepdevs">Amardeep Lakshkar</a></p>
</div>
