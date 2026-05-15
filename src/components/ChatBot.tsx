'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const knowledgeBase: Record<string, string> = {
  // Experience
  'experience|years|how long': `Sheeba has 15+ years of experience in software engineering, spanning roles from individual contributor to engineering manager. She's been at PROS Inc. since 2014 and became Engineering Manager in 2018.`,
  
  // Current role
  'current|role|job|position|doing now': `Sheeba is currently a Software Engineering Manager at PROS Inc. in Houston, TX. She leads global engineering teams delivering cloud-native SaaS solutions on Azure/AKS, and is pioneering AI initiatives across the organization.`,
  
  // AI work
  'ai|artificial intelligence|llm|machine learning|copilot': `Sheeba is passionate about AI innovation! Her AI initiatives include:
• AI agents for automated test execution (3% efficiency gain)
• Spec-Driven Development with AI-assisted validation
• AI Support Command Center for operational automation
• LLM integration with Jira for auto-surfacing documentation
• GitHub Copilot for automated issue resolution`,

  // Skills
  'skills|technologies|tech stack|know': `Sheeba's core skills include:
• Cloud: Azure, Kubernetes, AKS, Microservices
• Development: Java, React, SQL, Spark, REST APIs
• DevOps: CI/CD, Rundeck, Test Automation
• Leadership: Team building, Agile/Scrum, Program Management
• AI: LLMs, AI Agents, Prompt Engineering`,

  // Leadership
  'lead|manage|team|leadership': `As an engineering leader, Sheeba:
• Leads global engineering teams on Azure/AKS
• Achieved 90% team retention through SMART goals and coaching
• Wears multiple hats across dev, product, QE, and operations
• Introduced Spec-Driven Development for quality and velocity
• Created executive JIRA dashboards reducing reporting time by 30%`,

  // Achievements
  'achievement|accomplish|impact|success': `Key achievements include:
• Led Willingness to Pay feature contributing 3% revenue increase
• Reduced deployment time by 30% via Rundeck migration
• Engineered Spark pipelines: hours → minutes processing
• 90% team retention through coaching programs
• Pioneered multiple AI initiatives in production`,

  // Education
  'education|degree|study|university|college': `Sheeba holds a B.Tech in Computer Science Engineering from Harcourt Butler Technological Institute (HBTI), Kanpur, India.`,

  // Contact
  'contact|email|phone|reach|hire': `You can reach Sheeba at:
• Email: sheeba.hbti@gmail.com
• Phone: 267-251-7525
• Location: Sugar Land, TX
• LinkedIn: linkedin.com/in/sheeba-ahmed
• GitHub: github.com/sheebahbti`,

  // Previous roles
  'previous|before|history|fiserv|dxc': `Before becoming an Engineering Manager, Sheeba worked as:
• Lead Software Engineer at PROS (2017-2018)
• Senior Software Engineer at PROS (2016-2017)
• Software Engineer at PROS (2014-2016)
• Sr. Systems Analyst at Fiserv (2010-2014)
• Engineer at DXC Technology (2006-2010)`,

  // Why hire
  'why hire|why work|strengths|unique': `What makes Sheeba unique:
• Rare blend of hands-on technical skills + leadership
• Proven AI innovation with multiple production implementations
• End-to-end ownership mindset across the full SDLC
• Track record of measurable business impact (revenue, efficiency)
• Strong team builder with 90% retention rate`,
}

function getResponse(input: string): string {
  const lowerInput = input.toLowerCase()
  
  for (const [keywords, response] of Object.entries(knowledgeBase)) {
    const keywordList = keywords.split('|')
    if (keywordList.some(keyword => lowerInput.includes(keyword))) {
      return response
    }
  }
  
  return `I can tell you about Sheeba's:
• Experience and career journey
• AI initiatives and innovations
• Technical skills
• Leadership approach
• Key achievements
• Education
• Contact information

What would you like to know?`
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Hi! I'm Sheeba's AI assistant. Ask me anything about her experience, skills, AI projects, or career journey!`,
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsTyping(true)

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 500))

    const response = getResponse(userMessage)
    setIsTyping(false)
    setMessages(prev => [...prev, { role: 'assistant', content: response }])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? 'bg-slate-700 hover:bg-slate-600'
            : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-xl hover:shadow-blue-500/25'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Ask About Sheeba</h3>
                <p className="text-white/70 text-sm">AI-powered assistant</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user'
                      ? 'bg-blue-500'
                      : 'bg-gradient-to-r from-purple-500 to-blue-500'
                  }`}
                >
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-slate-700 text-gray-200 rounded-bl-md'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-700 p-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about experience, AI projects..."
                className="flex-1 bg-slate-700 rounded-full px-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Try: &quot;What AI projects has Sheeba built?&quot;
            </p>
          </div>
        </div>
      )}
    </>
  )
}
