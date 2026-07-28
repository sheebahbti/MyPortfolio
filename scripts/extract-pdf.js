#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const resumeInputDir = path.join(__dirname, '..', 'resume-input')

async function extractPDFWithPython() {
  const files = fs.readdirSync(resumeInputDir).filter(f => !f.startsWith('.'))

  if (files.length === 0) {
    console.log('❌ No files found in resume-input/')
    return null
  }

  const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'))
  if (!pdfFile) {
    console.log('❌ No PDF found in resume-input/')
    console.log('Available files:', files)
    return null
  }

  console.log(`\n📄 Extracting from: ${pdfFile}\n`)

  const filePath = path.join(resumeInputDir, pdfFile)

  try {
    // Try using pdfjs-dist
    const pdfjsLib = require('pdfjs-dist')
    pdfjsLib.GlobalWorkerOptions.workerSrc = `file://${require.resolve('pdfjs-dist/build/pdf.worker.min.js')}`

    const pdfData = fs.readFileSync(filePath)
    const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise

    let text = ''
    for (let i = 1; i <= pdf.numPages; i++) {
      try {
        const page = await pdf.getPage(i)
        const textContent = await page.getTextContent()
        const pageText = textContent.items.map(item => item.str).join(' ')
        text += pageText + '\n'
      } catch (e) {
        console.log(`⚠️  Could not extract page ${i}`)
      }
    }

    return text
  } catch (error) {
    console.error(`❌ Error: ${error.message}`)
    console.log('\n📝 Please use the web tool instead:')
    console.log('1. Run: npm run dev')
    console.log('2. Go to: http://localhost:3000/dev/resume-parser')
    console.log('3. Upload your PDF')
    console.log('4. Extract and copy the text')
    return null
  }
}

extractPDFWithPython()
  .then(text => {
    if (text) {
      console.log('=' .repeat(80))
      console.log('EXTRACTED TEXT:')
      console.log('=' .repeat(80))
      console.log(text)
      console.log('=' .repeat(80))
      console.log('\n📝 Copy this text and update: src/lib/defaultResume.json')
    }
  })
  .catch(error => {
    console.error('Fatal error:', error)
    process.exit(1)
  })
