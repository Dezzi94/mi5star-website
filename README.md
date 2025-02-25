# Mi5Star Website

A premium, high-end website for Mi5Star's elite security and luxury services.

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & GSAP
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query (React Query)
- **Deployment**: Cloudflare Pages

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
mi5star-website/
│── public/                # Static assets
│── src/
│   │── app/              # Next.js 14 App Router pages
│   │── components/       # Reusable UI components
│   │── layouts/          # Page layouts and templates
│   │── styles/           # Global styles and Tailwind config
│   │── utils/            # Utility functions
│   │── hooks/            # Custom React hooks
│   │── lib/              # Third-party library configurations
│── content/              # Markdown/MDX content
│── config/               # Configuration files
```

## Development Guidelines

- Follow TypeScript best practices
- Use functional components
- Implement React Server Components where possible
- Optimize images using Next.js Image Component
- Follow accessibility guidelines (WCAG)
- Maintain consistent code style with ESLint
- Write comprehensive documentation

## Performance Optimization

- Static Site Generation (SSG) for content pages
- Image optimization
- Code splitting
- Lazy loading
- CDN integration

## Security

- Form validation with Zod
- Content Security Policy (CSP)
- Cloudflare security features
- Secure API endpoints

## Deployment

The website is deployed on Cloudflare Pages with automatic deployments on main branch updates.

## License

Proprietary - All Rights Reserved
