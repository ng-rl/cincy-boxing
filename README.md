# Cincy Boxing - Professional Boxing Training Website

A modern, high-performance website for Cincy Boxing, a professional boxing personal training business in Cincinnati, Ohio.

## Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Blog System**: MDX-powered blog with Contentlayer for easy content management
- **Responsive Design**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Proper metadata, Open Graph tags, and semantic HTML
- **Performance**: Static generation for fast page loads
- **Booking Integration**: Cal.com embedded scheduler for easy session booking

## Tech Stack

- **Framework**: Next.js 14+ (App Router, React Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Contentlayer with MDX
- **Fonts**: Google Fonts (Bebas Neue, Inter)
- **Deployment**: Vercel-ready

## Project Structure

```
cincy-boxing/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with fonts and metadata
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/        # Individual blog posts
│   └── book/              # Booking page
│       └── page.tsx
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation with mobile menu
│   ├── Footer.tsx        # Footer with links and social
│   ├── Hero.tsx          # Home page hero section
│   └── PostCard.tsx      # Blog post card component
├── content/              # MDX blog posts
│   └── blog/
│       ├── beginner-boxing-footwork-drills.mdx
│       ├── why-boxing-ultimate-workout.mdx
│       ├── client-transformation-mike.mdx
│       └── cincinnati-boxing-scene-2024.mdx
├── public/               # Static assets
├── contentlayer.config.ts # Contentlayer configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── next.config.js        # Next.js configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ng-rl/cincy-boxing.git
cd cincy-boxing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Running Locally

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Adding Blog Posts

Create new MDX files in `content/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
type: "training-tips" # or "client-stories" or "cincinnati-events"
featuredImage: "https://example.com/image.jpg"
author: "Cincy Boxing"
---

Your content here...
```

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:
- `boxing-red`: Primary red accent
- `boxing-gold`: Gold highlights
- `boxing-black`: Main background
- `boxing-dark`: Secondary background
- `boxing-gray`: Borders and dividers

### Fonts

Change fonts in `app/layout.tsx` by importing different Google Fonts.

### Cal.com Integration

Update the Cal.com username in `app/book/page.tsx`:
```typescript
data-cal-link="your-username"
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy

### Environment Variables

No environment variables are required for basic functionality.

## Pages

- **Home (`/`)**: Hero, About, Services, Testimonials, CTA
- **Blog (`/blog`)**: List of all blog posts
- **Blog Post (`/blog/[slug]`)**: Individual post pages
- **Booking (`/book`)**: Cal.com scheduler embed

## License

© 2024 Cincy Boxing. All rights reserved.

## Contact

- Email: info@cincyboxing.com
- Phone: (513) 555-1234
- Location: Cincinnati, Ohio

---

Built with ❤️ in Cincinnati
