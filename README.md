# Nextech

**Nextech** is a modern, responsive community website for a technology club. It serves as a central hub to showcase the club's members, projects, and events, while attracting new members and partners.

## ✨ Features

- **Multi-page SPA** — Landing, Events, Projects, Members, and a custom 404 page
- **Dark / Light Theme** — User-selectable theme with preference saved in `localStorage`
- **Responsive Design** — Mobile-first layout built with Tailwind CSS
- **Animated Hero Section** — Particle effects powered by `@tsparticles`
- **SEO Optimization** — Dynamic page titles and meta descriptions per route
- **Application Forms** — Partnership and membership application forms
- **Lazy-Loaded Routes** — Code-split pages for faster initial load
- **Error Boundary** — Graceful error handling across the app

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui + Radix UI |
| Routing | React Router DOM 7 |
| Icons | Lucide React + React Icons |
| Animations | @tsparticles |
| Linting | ESLint |

## 📁 Project Structure

```
Nextech/
├── public/             # Static assets (logo, Netlify redirects)
├── src/
│   ├── assets/         # Images, SVGs, and static data files
│   │   └── data/       # Member, event, and project data
│   ├── components/
│   │   ├── pages/      # Page-level components (Landing, Events, Projects, Members)
│   │   ├── sections/   # Reusable page sections (Hero, About, FAQ, Partners)
│   │   ├── ui/         # Shared UI primitives (Card, Accordion, Header, Footer…)
│   │   └── routes/     # Centralized route configuration
│   ├── hooks/          # Custom React hooks (e.g., usePageTitle)
│   ├── lib/            # Utility functions
│   ├── App.jsx         # Root component with router and layout
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and CSS theme variables
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Ayoubslh/Nextech.git
cd Nextech/Nextech

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Opens the app at `http://localhost:5173` with Hot Module Replacement (HMR).

### Production Build

```bash
npm run build
```

Outputs an optimized build to the `dist/` directory.

### Preview Production Build Locally

```bash
npm run preview
```

Serves the `dist/` build locally for final testing before deployment.

### Linting

```bash
npm run lint
```

## 🌐 Deployment

The project includes a `public/_redirects` file configured for **Netlify** to support client-side routing in the SPA. Simply connect the repository to Netlify and set the build command to `npm run build` with `dist` as the publish directory.

## 🎨 Theming

Themes are managed via the `ThemeProvider` component (`src/components/ui/theme-provider.jsx`). The selected theme is persisted in `localStorage`. Brand colors and CSS custom properties are defined in `src/index.css`.

## 📄 License

This project is open source. See the repository for details.
