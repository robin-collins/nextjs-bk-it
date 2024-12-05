# nextjs-bk-it

Welcome to the nextjs-bk-it project! This is a modern Next.js application built with TypeScript, Tailwind CSS, and a comprehensive UI component library based on Radix UI.

## Quick Start

[Open in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/robin-collins/nextjs-bk-it) to start editing the project in your browser immediately.

To run the project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
nextjs-bk-it/
├── app/                    # Next.js 13+ app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── header.tsx
│   ├── footer.tsx
│   └── ...
├── hooks/                # Custom React hooks
│   └── use-toast.ts
└── lib/                  # Utility functions
    └── utils.ts
```

## Features

- 🎨 **Modern UI Components**: Built with Radix UI primitives and styled with Tailwind CSS
- 🌙 **Theme Support**: Dark/light mode with next-themes
- 📱 **Responsive Design**: Mobile-first approach
- 🔧 **Type Safety**: Written in TypeScript
- 📊 **Data Visualization**: Integrated with Recharts
- 🎭 **Form Handling**: Using React Hook Form with Zod validation
- 🎪 **Interactive Elements**: Including carousels, modals, and tooltips

## Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## Development

The project uses several key development tools:

- ESLint for code linting
- Next.js built-in TypeScript support
- Tailwind CSS for styling with PostCSS
- Class Variance Authority for component variants

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint