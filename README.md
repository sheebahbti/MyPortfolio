# Sheeba Ahmed - Portfolio

A modern, responsive portfolio website showcasing my experience as a Software Engineering Manager with 15+ years in cloud engineering, SaaS, and AI innovation.

## 🚀 Features

- **Hero Section** - Professional introduction with contact links
- **About** - Summary and leadership philosophy
- **Skills** - Technical and leadership competencies
- **Career Timeline** - Interactive journey from IC to Manager
- **AI Initiatives** - Showcase of AI-powered projects
- **Key Projects** - Achievements with measurable impact
- **Contact** - Multiple ways to connect

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel / GitHub Pages

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run build  # outputs to /out folder
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### GitHub Pages
1. Run `npm run build`
2. Push `/out` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page
└── components/
    ├── Navigation.tsx   # Responsive nav
    ├── Hero.tsx         # Hero section
    ├── About.tsx        # About & philosophy
    ├── Skills.tsx       # Skills grid
    ├── Timeline.tsx     # Career journey
    ├── AIInitiatives.tsx # AI projects
    ├── Projects.tsx     # Key achievements
    └── Contact.tsx      # Contact section
```

## 🎨 Customization

- Edit component files in `src/components/` to update content
- Modify `tailwind.config.ts` for theme colors
- Update `src/app/layout.tsx` for metadata

## 📄 License

MIT License