# Portfolio

A React + TypeScript Single Page Application (SPA) built for the Module 2 Hands-On Task. This project converts a static HTML/CSS skeleton into a dynamic, client-side routed architecture with strict typing and global state management.

## 🚀 Quick Start

Ensure you have Node.js 18+ installed, then run the following commands to spin up the local development server:

```bash
# Clone the repository
git clone https://github.com/LaurensiusDani/gdgoc-module2

# Navigate into the directory
cd portfolio

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

## 🏗️ Architecture & Features

This application relies on a modern frontend stack to ensure high performance and maintainability:

- Framework: React + TypeScript via Vite.
- Routing: react-router-dom for seamless client-side navigation without full-page reloads.
- Styling: Tailwind CSS (via the @tailwindcss/vite plugin).
- State Management: Zustand.
- Type Safety: Strict TypeScript interfaces applied across components and the global store.

## 📝 Assessment Details & Bonus Tasks

### Bonus 1: Custom TypeScript Hook

Implemented a strictly typed generic hook, useLocalStorage<T>, to manage and persist the Dark/Light mode theme across browser sessions. This ensures the user's preference is remembered instantly upon reloading the application.

### Bonus 2: Tailwind CSS Integration

All custom CSS files were successfully migrated into Tailwind CSS utility classes. Migrating to Tailwind allows for the colocation of styling directly with component logic, significantly reducing context-switching during development. By utilizing Tailwind's @theme configuration, the strict and scalable design tokens (such as the zero-radius borders, custom typography scales, and structural textures) of the Minimalist Monochrome design system are perfectly maintained without needing to write heavy, detached stylesheets.

### Bonus 3: Zustand vs. useState for Global State

This application implements a global state for the projects list using Zustand.

Comparison:
Using React's native useState is inherently local to a specific component. If multiple independent components (like a HomePage and a ProjectsPage) need to read or update the same list of projects, useState forces you to lift the state to a common parent and pass it down through every intermediate component—an anti-pattern known as "prop drilling."

Zustand solves this by providing a centralized, global store. It allows any page or deeply nested component to access, render, or update the project list instantly without needing to pass props down the component tree, resulting in a significantly cleaner and more maintainable architecture.