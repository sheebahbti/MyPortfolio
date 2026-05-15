import { MapPin, Mail, Phone, Linkedin, Github, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        {/* Profile Avatar */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">SA</span>
            </div>
          </div>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="gradient-text">Sheeba Ahmed</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 flex items-center justify-center gap-2">
          Software Engineering Manager
          <Sparkles className="text-yellow-400 w-6 h-6" />
        </h2>

        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Hands-on Engineering Leader with 15+ years in Cloud, SaaS & AI Innovation
        </p>

        {/* Location & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-10">
          <span className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            Sugar Land, TX
          </span>
          <a href="mailto:sheeba.hbti@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-5 h-5 text-blue-400" />
            sheeba.hbti@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-400" />
            267-251-7525
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#ai"
            className="px-8 py-3 border border-gray-600 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View AI Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href="https://linkedin.com/in/sheeba-ahmed"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/sheebahbti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
