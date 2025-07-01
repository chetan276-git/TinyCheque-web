This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📁 Project Structure

TinyCheque/
├── .next/ # Next.js build output (auto-generated)
├── node_modules/ # Project dependencies
├── public/ # Public assets
│ ├── images/ # Image assets
│ ├── video/ # Video files (SVGs for animations)
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ ├── vercel.svg
│ └── window.svg
├── src/ # Main source code
│ ├── app/ # App directory (Next.js App Router)
│ │ ├── cookies/ # Route: /cookies
│ │ ├── home/ # Route: /home
│ │ ├── partnership/ # Route: /partnership
│ │ ├── privacy-policy/ # Route: /privacy-policy
│ │ ├── refund/ # Route: /refund
│ │ ├── terms/ # Route: /terms
│ │ ├── favicon.ico # Site favicon
│ │ ├── globals.css # Global CSS styles
│ │ ├── layout.tsx # Root layout (applies to all pages)
│ │ └── page.tsx # Homepage (route: `/`)
│ └── components/ # Reusable components
│ ├── home/ # Components specific to the home page
│ ├── icons/ # Custom icons
│ ├── partnership/ # Components related to partnership page
│ ├── accordion.tsx # Accordion UI component
│ ├── button.tsx # Button component
│ ├── footer.tsx # Footer section
│ ├── header.tsx # Header/Nav component
│ ├── loader.tsx # Loading spinner or loader
│ ├── mobile-nav-links.tsx # Mobile nav links menu
│ ├── PageTransitionLoader.tsx # Page transition animation loader
│ └── services-dropdown.tsx # Dropdown for services
├── .gitignore # Git ignored files
├── eslint.config.mjs # ESLint configuration
├── next.config.js # Next.js configuration
