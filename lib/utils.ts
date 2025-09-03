

import { ComponentAuthor, siteConfig } from "@/config/site";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildTree(paths: string[]): any[] {
  let idCounter = 1;
  const getId = () => (idCounter++).toString();

  const root: any = [];

  const addToTree = (parts: string[], currentLevel: any[]) => {
    const [part, ...rest] = parts;

    let existing = currentLevel.find((item) => item.name === part);

    if (!existing) {
      existing = {
        id: getId(),
        isSelectable: true,
        name: part,
      };

      if (rest.length > 0) {
        existing.children = [];
      }

      currentLevel.push(existing);
    }

    if (rest.length > 0) {
      addToTree(rest, existing.children);
    }
  };

  paths.forEach((path) => {
    const parts = path.split("/");
    addToTree(parts, root);
  });

  return root;
}

export function buildElementsFromJsonPaths(files: any) {
  let idCounter = 1;
  const getId = () => (idCounter++).toString();

  const root :any = [];

  function addToTree(parts: any, currentLevel: any, fullPath: any, file: any) {
    const [part, ...rest] = parts;

    let existing = currentLevel.find((item: any) => item.name === part);

    if (!existing) {
      existing = {
        id: getId(),
        isSelectable: true,
        name: part,
      };

      if (rest.length > 0) {
        existing.children = [];
      } else {
        // It's a file
        existing.path = fullPath;
        existing.file = file; // store full file object (optional)
      }

      currentLevel.push(existing);
    }

    if (rest.length > 0) {
      addToTree(rest, existing.children, fullPath, file);
    }
  }

  for (const file of files) {
    const trimmedPath = file.path.replace("registry/new-york/", "");
const pathParts = trimmedPath.split("/");

addToTree(pathParts, root, file.path, file);
  }

  return root;
}

export const defaultAuthor = {
  authorName: "Amardeep Lakshkar",
  website: "https://x.com/amardeepdevs",
  avatar: "AL" // or use initials
};


export const getAuthorProfile = (componentTitle: string) => {
  for (const author of ComponentAuthor) {
    if (author.components.includes(componentTitle)) {
      return {
        authorName: author.authorName,
        website: author.website,
        avatar: author.authorName.slice(0, 2).toUpperCase(), // just initials
      };
    }
  }

  return defaultAuthor;
};


export const getAuthorBySlug = (slug: string) => {
  // Convert slug back to authorName (e.g., "magic-ui" -> "Magic UI")
  const authorName = slug
    .split('-')
    .map(word => {
      // Special case for "ui" to keep it as "UI"
      if (word.toLowerCase() === 'ui') {
        return 'UI';
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
    
  const author = ComponentAuthor.find(a => a.authorName === authorName);
  
  if (author) {
    return {
      authorName: author.authorName,
      website: author.website,
      avatar: author.authorName.slice(0, 2).toUpperCase(),
      slug: authorNameToSlug(author.authorName)
    };
  }
  
  return null;
};

// Function to convert author name to URL-friendly slug
export const authorNameToSlug = (authorName: string) => {
  return authorName.toLowerCase().replace(/\s+/g, '-');
};

// Function to get all components by author
export const getComponentsByAuthor = (authorName: string) => {
  const author = ComponentAuthor.find(a => a.authorName === authorName);
  
  if (!author) return [];
  
  // Get all components from all categories and filter by author
  const allComponents = [
    ...siteConfig.aiComponents,
    ...siteConfig.textComponents,
    ...siteConfig.buttonComponents,
    ...siteConfig.cardComponents,
    ...siteConfig.components
  ];
  
  return allComponents.filter(component => 
    author.components.includes(component.title)
  );
};

// Function to get all authors with their slugs
export const getAllAuthors = () => {
  return ComponentAuthor.map(author => ({
    authorName: author.authorName,
    website: author.website,
    avatar: author.authorName.slice(0, 2).toUpperCase(),
    slug: authorNameToSlug(author.authorName),
    componentCount: author.components.length
  }));
};


