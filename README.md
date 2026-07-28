# Sheeba Ahmed - Portfolio

🌐 **Live Site**: [https://sheebahbti.github.io/MyPortfolio/](https://sheebahbti.github.io/MyPortfolio/)

A modern, responsive portfolio website showcasing my experience as a Software Engineering Manager with 15+ years in cloud engineering, SaaS, and AI innovation.

## 🚀 Quick Start

### Local Development
```bash
npm run dev
```
Visit: **`http://localhost:3002`**

### Update Your Resume
Edit: `src/lib/defaultResume.json`

### Deploy
```bash
npm run build
git add .
git commit -m "Update resume"
git push origin main
```
✅ Auto-deploys to: `https://sheebahbti.github.io/MyPortfolio/`

## 💡 Features

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
- **Deployment**: GitHub Pages (Auto-deploy on push)
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