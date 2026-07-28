#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const mammoth = require('mammoth')

const resumeInputDir = path.join(__dirname, '..', 'resume-input')
const defaultResumeFile = path.join(__dirname, '..', 'src', 'lib', 'defaultResume.json')

async function parseResumeFiles() {
  console.log('\n📄 Resume Parser\n')

  // Check if folder exists
  if (!fs.existsSync(resumeInputDir)) {
    console.error(`❌ Folder not found: ${resumeInputDir}`)
    return
  }

  // Get files from resume-input folder
  const files = fs.readdirSync(resumeInputDir).filter(f => !f.startsWith('.'))

  if (files.length === 0) {
    console.log('📁 No files found in resume-input/ folder')
    console.log('👉 Drag and drop your resume file here and try again\n')
    return
  }

  for (const file of files) {
    const filePath = path.join(resumeInputDir, file)
    const ext = path.extname(file).toLowerCase()

    console.log(`📖 Processing: ${file}`)

    try {
      let extractedText = ''

      if (ext === '.pdf') {
        console.log('⚠️  PDF support requires pdfjs-dist. Using web parser at: http://localhost:3000/dev/resume-parser')
        console.log('   For now, please use the web tool to parse PDFs.\n')
        continue
      } else if (ext === '.docx' || ext === '.doc') {
        extractedText = await parseWord(filePath)
      } else {
        console.log(`⚠️  Unsupported format: ${ext}`)
        continue
      }

      console.log('\n✅ Text extracted successfully!\n')
      console.log('=' .repeat(80))
      console.log('EXTRACTED TEXT:')
      console.log('=' .repeat(80))
      console.log(extractedText)
      console.log('=' .repeat(80))
      console.log('\n')

      // Show instructions
      console.log('📝 Next Steps:')
      console.log('1. Review the text above')
      console.log('2. Open: src/lib/defaultResume.json')
      console.log('3. Manually fill in the JSON with your information:')
      console.log('   - name')
      console.log('   - title')
      console.log('   - skills (categories)')
      console.log('   - experience (jobs)')
      console.log('   - projects')
      console.log('4. Run: npm run build')
      console.log('5. Your portfolio will update!\n')
    } catch (error) {
      console.error(`❌ Error parsing file: ${error.message}\n`)
    }
  }
}

async function parseWord(filePath) {
  try {
    const buffer = fs.readFileSync(filePath)
    const result = await mammoth.extractRawText({ buffer })
    return result.value
  } catch (error) {
    throw new Error(`Failed to parse Word document: ${error.message}`)
  }
}

// Run the parser
parseResumeFiles().catch(error => {
  console.error('Error:', error)
  process.exit(1)
})

