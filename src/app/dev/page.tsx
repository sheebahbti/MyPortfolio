'use client'

import Link from 'next/link'
import { FileText, ArrowRight } from 'lucide-react'

export default function DevTools() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Development Tools</h1>
        <p className="text-gray-400 mb-12">Tools for managing and updating your portfolio</p>

        {/* Resume Parser Tool */}
        <Link href="/dev/resume-parser">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer mb-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <FileText className="text-blue-400 mt-1" size={32} />
                <div>
                  <h2 className="text-2xl font-bold mb-2">Resume Parser</h2>
                  <p className="text-gray-400">
                    Upload your PDF or Word resume and extract text to convert to JSON format
                  </p>
                </div>
              </div>
              <ArrowRight className="text-gray-400" size={24} />
            </div>
          </div>
        </Link>

        {/* Info Box */}
        <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-6 text-blue-300">
          <h3 className="font-bold mb-2">How to Use:</h3>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Go to Resume Parser tool</li>
            <li>Upload your PDF or Word resume</li>
            <li>Extract text is shown on screen</li>
            <li>Manually update <code className="bg-slate-900 px-2 py-1 rounded text-white">src/lib/defaultResume.json</code></li>
            <li>Run <code className="bg-slate-900 px-2 py-1 rounded text-white">npm run build</code></li>
          </ol>
        </div>
      </div>
    </div>
  )
}
