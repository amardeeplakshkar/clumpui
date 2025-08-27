

import { ComponentAuthor } from "@/config/site";
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