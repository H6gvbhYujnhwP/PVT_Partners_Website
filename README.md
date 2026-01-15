# PVT Partners Website

Professional business consultancy website for PVT Partners Ltd, built with React and Vite.

## Project Overview

This is a static Multi-Page Application (MPA) built with React, TypeScript, and Tailwind CSS. It is designed to be deployed as a static site on Render or any other static hosting provider.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Deployment**: Static Site (MPA)

## Project Structure

- `client/src/pages/`: React components for each page content
- `client/src/entries/`: Entry points for each HTML page
- `client/*.html`: Physical HTML files for each route (required for static hosting without server rewrites)
- `client/src/components/`: Reusable UI components (Header, Footer, etc.)

## Development

To run the development server:

```bash
npm install
npm run dev
```

## Building for Production

To build the static site:

```bash
npm run build
```

The build output will be in `dist/public/`. This directory contains:
- HTML files for each page (`index.html`, `about.html`, etc.)
- `assets/` folder with compiled JS, CSS, and images

## Deployment on Render

1. Connect your GitHub repository to Render
2. Create a new **Static Site**
3. Configure the following settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist/public`
4. Deploy!

## Note on Navigation

This site uses standard HTML links (`<a href="/about.html">`) instead of client-side routing (`<Link to="/about">`) to ensure compatibility with static hosting environments that don't support SPA fallback routing. All internal links must point to the `.html` file extension.
