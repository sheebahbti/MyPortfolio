import * as pdfjsLib from 'pdfjs-dist'
import * as mammoth from 'mammoth'

// Initialize PDF.js worker
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`
}

export async function parsePDF(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

  let text = ''
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i)
    const textContent = await page.getTextContent()
    const pageText = textContent.items.map((item: any) => item.str).join(' ')
    text += pageText + '\n'
  }

  return text
}

export async function parseWord(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer()
  const result = await mammoth.extractRawText({ arrayBuffer })
  return result.value
}

export async function parseResume(file: File): Promise<string> {
  if (file.type === 'application/pdf' || file.name.endsWith('.pdf')) {
    return parsePDF(file)
  } else if (
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
    file.name.endsWith('.docx')
  ) {
    return parseWord(file)
  } else {
    throw new Error('Unsupported file format. Please use PDF or DOCX.')
  }
}

export function extractResumeData(text: string) {
  // This is a helper function to extract structured data from resume text
  // In a real implementation, you might use NLP or regex patterns
  // For now, return the raw text with instructions for manual editing

  return {
    rawText: text,
    instructions:
      'Please review the extracted text below and manually update the JSON resume. Look for: your name, job title, skills, work experience (dates, company, achievements), and projects.',
  }
}
