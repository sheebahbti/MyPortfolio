# Resume Management Guide

## Overview
Your portfolio reads resume data from a JSON file in the project. You have a simple workflow:

1. **Drag & Drop Resume** - Put your resume in the `resume-input/` folder
2. **Parse** - Run `npm run parse-resume`
3. **Update JSON** - Manually fill in the JSON file
4. **Build** - Run `npm run build`

---

## Step-by-Step (Simplest Method)

### Step 1: Drag & Drop Resume
1. Open file explorer on your computer
2. Navigate to: `resume-input/` folder (in your project)
3. Drag & drop your resume file here
   - Word format (.docx, .doc) ✅
   - PDF format - use web tool (see below)

### Step 2: Extract Text
```bash
npm run parse-resume
```

This will extract text from your resume and show it in the terminal.

### Step 3: Update JSON
- Copy the extracted text from terminal
- Open: `src/lib/defaultResume.json`
- Manually fill in the JSON structure with your information

### Step 4: Rebuild & Deploy
```bash
npm run build
```

Your portfolio will now display your resume! 🎉

---

## For PDF Files (Alternative)

If you have a PDF resume:

1. Start dev server: `npm run dev`
2. Go to: `http://localhost:3000/dev/resume-parser`
3. Upload your PDF
4. Extract the text
5. Follow Step 3 above

---

## Option: Manual JSON Editing

### Step 1: Locate the Resume File
```
src/lib/defaultResume.json
```

### Step 2: Edit Your Resume
Open in any text editor and update with your information:
- Your name and title
- Skills categories
- Career experience
- Projects

### Step 3: Rebuild
```bash
npm run build
```

---

## Resume JSON Format

```json
{
  "name": "Your Name",
  "title": "Your Professional Title",
  "skills": [
    {
      "title": "Skill Category Name",
      "skills": ["Skill 1", "Skill 2", "Skill 3"],
      "color": "from-blue-500 to-cyan-500"
    }
  ],
  "experience": [
    {
      "period": "2020 – Present",
      "title": "Job Title",
      "company": "Company Name",
      "location": "City, State",
      "highlights": ["Achievement 1", "Achievement 2"],
      "color": "from-blue-500 to-purple-500"
    }
  ],
  "projects": [
    {
      "title": "Project Name",
      "description": "What you did in this project",
      "tech": ["Technology 1", "Technology 2"]
    }
  ]
}
```

---

## Available Color Gradients

Use these for the `"color"` field:
- `from-blue-500 to-cyan-500`
- `from-green-500 to-emerald-500`
- `from-orange-500 to-yellow-500`
- `from-purple-500 to-pink-500`
- `from-red-500 to-rose-500`
- `from-indigo-500 to-violet-500`
- `from-pink-500 to-red-500`

---

## Folder Structure

```
resume-input/                   ← 📌 DRAG & DROP YOUR RESUME HERE
├── .gitkeep
└── (your resume file)

src/lib/
├── defaultResume.json       ← YOUR PORTFOLIO DATA (update this)
├── resumeContext.tsx        (automatic)
├── resumeTypes.ts          (automatic)
└── resumeParser.ts         (PDF/Word parser)

src/app/dev/
├── page.tsx                (dev tools hub)
└── resume-parser/
    └── page.tsx            (web parser for PDFs)

scripts/
└── parse-resume.js         (CLI script)
```

---

## Available Commands

```bash
# Parse resume from resume-input/ folder
npm run parse-resume

# Start dev server
npm run dev

# Build portfolio
npm run build
```

---

## Tips

- Keep your JSON syntax valid (use a JSON validator if unsure)
- All fields in JSON are required
- Changes take effect on next build: `npm run build`
- Keep a backup of your resume data!
- The folder `resume-input/` is for your convenience - just a place to keep your resume file

