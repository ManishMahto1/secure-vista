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

```bash
secure-vista/
├── public/
│   ├── images/           # Static images
├── src/
│   ├── app/              # Next.js 13+ app directory
│   ├── components/       # Reusable UI components
│   ├── lib/              # Utility functions (e.g., email sender)
│   ├── db/               # Database connection and queries
│   ├── models/           # Prisma ORM models (if using PostgreSQL)
│   ├── pages/            # API routes and legacy pages (if needed)
│   ├── styles/           # Global and modular CSS
│   ├── middleware.ts     # For route protection (admin dashboard)
│   └── layout.tsx        # Layout file (Next.js app router)  
├── .env                  # Environment variables
├── package.json
├── next.config.js
├── README.md
└── tsconfig.json         # TypeScript configuration

```
