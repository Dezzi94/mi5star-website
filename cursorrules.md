## Mi5Star Website Redevelopment - Project Requirements & Cursor Rules

### Project Overview
The goal of this project is to rebuild and enhance the Mi5Star websites ([mi5star.com](https://www.mi5star.com/) and [mi5starsecurity.com](https://www.mi5starsecurity.com/)) to reflect a **premium, high-end** brand identity. The new website will feature an **elegant, modern design** with seamless functionality, catering to an exclusive clientele seeking **elite security and luxury services**.

---

### Cursor Rules

#### **Objective**
- Develop an **optimized, secure, and maintainable** Next.js website following best coding practices and performance benchmarks.

#### **Code Style & Structure**
- Write clean, modular, and reusable **TypeScript** code.
- Use **functional components** and avoid class-based components.
- Follow **PascalCase** for components and **camelCase** for variables.
- Use **lowercase-dashed** naming conventions for folders (e.g., `services/close-protection`).
- Organize files based on **components, layouts, pages, and utilities**.

#### **Optimization & Best Practices**
- **Minimize use of `'use client'`** – favor **React Server Components (RSC)** where applicable.
- Use **Next.js static generation (SSG)** for content-heavy pages.
- Optimize images using **Next.js Image Component** with WebP support.
- Implement **lazy loading** and **code splitting** for performance optimization.
- Use **dynamic imports** to load non-essential scripts.

#### **Error Handling & Validation**
- Use **early returns** to handle invalid states.
- Implement **Zod schema validation** for form handling.
- Implement **try-catch blocks** for API calls and data fetching.

#### **UI & Styling**
- Use **Tailwind CSS** for streamlined, responsive design.
- Implement **Framer Motion or GSAP** for smooth animations.
- Ensure **consistent spacing, typography, and alignment** across all pages.

#### **State Management & Data Fetching**
- Prefer **React Query (TanStack Query)** for API data fetching and caching.
- Use **useState/useReducer** for component-level state.
- Implement **server-side props (SSG/ISR)** for performance efficiency.

#### **Security & Performance**
- Implement **secure form validation** using backend middleware.
- Enforce **Content Security Policy (CSP)** to prevent XSS attacks.
- Optimize **Cloudflare security settings** for enhanced DDoS protection.
- Monitor **performance metrics** with Google Lighthouse and Web Vitals.

#### **Testing & Documentation**
- Write **unit tests** for key components using Jest & React Testing Library.
- Document components using **JSDoc comments** for IDE autocompletion.
- Maintain a **project-wide README** explaining core architectural choices.

#### **Deployment & Monitoring**
- Deploy the website on **Cloudflare Pages**.
- Implement **CI/CD pipelines** for automated testing and deployments.
- Use **Cloudflare Analytics & Log Monitoring** for tracking site health.

---

### Folder Structure
```
mi5star-website/
│── public/                # Static assets (images, favicon, etc.)
│── src/
│   │── components/        # Reusable UI components (buttons, forms, etc.)
│   │── layouts/           # Page layouts and global styles
│   │── pages/             # Main website pages
│   │   │── index.tsx      # Homepage
│   │   │── about.tsx      # About Mi5Star
│   │   │── services/      # Service-specific pages
│   │   │   │── executive-protection.tsx
│   │   │   │── corporate-risk-management.tsx
│   │   │   │── luxury-travel.tsx
│   │   │── case-studies/  # Case studies section
│   │   │── blog/          # Blog section
│   │   │── contact.tsx    # Contact page with multistep form
│   │── styles/            # Tailwind and global styles
│   │── utils/             # Utility functions and helper scripts
│   │── hooks/             # Custom React hooks (if necessary)
│── content/               # Markdown/MDX-based content (if used)
│── config/                # Configuration files (SEO, metadata, API settings)
│── .gitignore             # Files to be ignored by Git
│── package.json           # Dependencies and scripts
│── README.md              # Project documentation
```

---

### Conclusion
By following these **Cursor rules**, the Mi5Star website will be **optimized, secure, and maintainable**, ensuring a **premium experience** that reflects the brand's high-end clientele. The combination of **Next.js, Tailwind CSS, Cloudflare Pages, and modern UI frameworks** will ensure a **fast, scalable, and visually refined** platform for Mi5Star's elite audience.

