import { Mail, Phone, MapPin, Linkedin, Github, Calendar } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Let&apos;s Connect</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Interested in discussing engineering leadership, AI innovation, or potential opportunities? 
          I&apos;d love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            
            <a
              href="mailto:sheeba.hbti@gmail.com"
              className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-semibold">sheeba.hbti@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+12672517525"
              className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="font-semibold">267-251-7525</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="font-semibold">Sugar Land, TX</p>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect Online</h3>
            
            <div className="space-y-4 mb-8">
              <a
                href="https://linkedin.com/in/sheeba-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center group-hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <p className="font-semibold">linkedin.com/in/sheeba-ahmed</p>
                </div>
              </a>

              <a
                href="https://github.com/sheebahbti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center group-hover:bg-gray-500/30 transition-colors">
                  <Github className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <p className="font-semibold">github.com/sheebahbti</p>
                </div>
              </a>
            </div>

            {/* Schedule Meeting CTA */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Calendar className="w-6 h-6 text-purple-400" />
                <h4 className="text-lg font-semibold">Schedule a Chat</h4>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Want to discuss engineering leadership, AI innovation, or explore opportunities?
              </p>
              <a
                href="mailto:sheeba.hbti@gmail.com?subject=Let's Connect"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Send a Message
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Sheeba Ahmed. Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
