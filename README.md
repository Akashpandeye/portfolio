# Akash Pandey — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

**Live:** [akash-works](https://akash-works.vercel.app) *(update with your actual URL)*

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Fonts:** Outfit + Ovo (Google Fonts)
- **Deployment:** Vercel

## Features

- Light / Dark mode with system preference detection
- Glassmorphism navbar with smooth scroll
- Tech stack marquee with official icons
- Bento-grid contact page
- Responsive across all breakpoints

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── components/   # Navbar, Header, About (marquee)
│   ├── work/         # Work / projects page
│   ├── blogs/        # Blog listing page
│   ├── contact/      # Bento-grid contact page
│   ├── layout.tsx    # Root layout, fonts, metadata
│   └── page.tsx      # Home page
├── assets/           # Images, icons, resume PDF
└── globals.css       # Tailwind base + custom styles
```

## License

MIT
