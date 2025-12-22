# אלקטרו סליל - Landing Page

High-end, conversion-focused landing page for אלקטרו סליל - a B2B operational automation solution.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **TailwindCSS** (styling)
- **RTL Support** (Hebrew)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Features

- ✅ Fully responsive (mobile-first)
- ✅ RTL (right-to-left) Hebrew support
- ✅ Sticky navigation with smooth scroll
- ✅ Print-friendly styles
- ✅ Inline SVG icons (no external assets)
- ✅ Professional design with dark slate + blue accents
- ✅ All sections as specified:
  - Hero with dual CTAs
  - Pain points
  - Hybrid solution explanation
  - Robot vs Human visual cards
  - Process flow
  - Quick win pilot strategy
  - Metrics section
  - FAQ (objections handling)
  - Pricing ranges
  - Testimonials placeholders
  - Final CTA with contact placeholders

## Project Structure

```
├── src/
│   ├── App.tsx          # Main component with all sections
│   ├── main.tsx         # React entry point
│   ├── index.css        # Tailwind imports + RTL base styles
│   └── vite-env.d.ts    # TypeScript declarations
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # TailwindCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Notes

- All copy is in Hebrew
- No external UI libraries (pure TailwindCSS)
- Testimonials and contact form are placeholders
- Ready for production deployment
