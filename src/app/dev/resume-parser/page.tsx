'use client'

import { useState } from 'react'
import { Upload, Copy, Check, AlertCircle } from 'lucide-react'
import { parseResume } from '@/lib/resumeParser'

export default function ResumeParser() {
  const [uploadedText, setUploadedText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [copied, setCopied] = useState(false)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsLoading(true)
    try {
      const text = await parseResume(file)
      setUploadedText(text)
      setMessage({ type: 'success', text: 'Resume parsed successfully!' })
    } catch (error) {
      setMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to parse resume',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(uploadedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Resume Parser (Dev Tool)</h1>
        <p className="text-gray-400 mb-8">
          Upload your PDF or Word resume to extract text. Then manually convert to JSON format.
        </p>

        {/* Upload Section */}
        <div className="bg-slate-800 rounded-lg p-8 mb-8 border border-slate-700">
          <div className="flex items-center justify-center gap-4">
            <Upload className="text-blue-400" size={32} />
            <div>
              <label className="cursor-pointer">
                <span className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg inline-block transition-colors">
                  Choose File (PDF or DOCX)
                </span>
                <input
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={handleFileUpload}
                  disabled={isLoading}
                  className="hidden"
                />
              </label>
              <p className="text-gray-400 text-sm mt-2">PDF or Word format</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
              message.type === 'success'
                ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                : 'bg-red-500/20 text-red-300 border border-red-500/50'
            }`}
          >
            {message.type === 'success' ? (
              <Check size={20} />
            ) : (
              <AlertCircle size={20} />
            )}
            {message.text}
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center text-gray-400">
            <p>Parsing resume...</p>
          </div>
        )}

        {/* Extracted Text */}
        {uploadedText && (
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Extracted Text</h2>
              <button
                onClick={handleCopy}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg flex items-center gap-2 transition-colors text-sm"
              >
                {copied ? (
                  <>
                    <Check size={16} /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Copy
                  </>
                )}
              </button>
            </div>

            <div className="bg-slate-900 rounded p-4 max-h-96 overflow-y-auto">
              <pre className="text-gray-300 text-sm whitespace-pre-wrap break-words">
                {uploadedText}
              </pre>
            </div>

            {/* Instructions */}
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/50 rounded-lg text-blue-300 text-sm">
              <h3 className="font-bold mb-2">Next Steps:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Review the extracted text above</li>
                <li>Open <code className="bg-slate-900 px-2 py-1 rounded">src/lib/defaultResume.json</code></li>
                <li>Manually update the JSON with your information from the text above</li>
                <li>Save and rebuild: <code className="bg-slate-900 px-2 py-1 rounded">npm run build</code></li>
              </ol>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-8 p-6 bg-slate-800 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold mb-4">JSON Template</h3>
          <pre className="bg-slate-900 p-4 rounded text-sm text-gray-300 overflow-x-auto">
{`{
  "name": "Your Name",
  "title": "Your Title",
  "skills": [
    {
      "title": "Category",
      "skills": ["Skill 1", "Skill 2"],
      "color": "from-blue-500 to-cyan-500"
    }
  ],
  "experience": [
    {
      "period": "2020 – Present",
      "title": "Job Title",
      "company": "Company",
      "location": "City, State",
      "highlights": ["Achievement 1"],
      "color": "from-blue-500 to-purple-500"
    }
  ],
  "projects": [
    {
      "title": "Project",
      "description": "Description",
      "tech": ["Tech 1"]
    }
  ]
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
