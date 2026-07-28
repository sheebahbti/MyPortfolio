# Sheeba's Portfolio

A modern, dynamic portfolio built with Next.js and React.

## 🚀 Quick Start

### Local Development
```bash
npm run dev
```
Visit: `http://localhost:3000`

### Update Your Resume
Edit: `src/lib/defaultResume.json`

### Deploy
```bash
npm run build
git add .
git commit -m "Update resume"
git push origin main
```

✅ Automatically deploys to: `https://sheebahbti.github.io/MyPortfolio/`

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js pages
├── components/             # React components
│   ├── Skills.tsx
│   ├── Timeline.tsx
│   ├── Projects.tsx
│   └── ...
└── lib/
    ├── defaultResume.json  ← EDIT THIS
    ├── resumeContext.tsx   (data provider)
    └── resumeTypes.ts      (TypeScript types)
```

## 💡 To Update Your Portfolio

1. Open: `src/lib/defaultResume.json`
2. Edit your name, skills, experience, projects
3. Commit and push to GitHub
4. Deploy is automatic! ✅

That's it!
