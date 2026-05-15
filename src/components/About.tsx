import { Target, Users, Lightbulb, Rocket } from 'lucide-react'

const philosophyItems = [
  {
    icon: Target,
    title: 'End-to-End Ownership',
    description: 'Wearing multiple hats across development, product, QE, and operations to ensure complete delivery.',
  },
  {
    icon: Users,
    title: 'Team Growth',
    description: 'Building high-performing teams through mentorship, SMART goals, and continuous coaching.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Driving AI adoption and automation to simplify workflows and boost productivity.',
  },
  {
    icon: Rocket,
    title: 'Delivery Excellence',
    description: 'Implementing processes like Spec-Driven Development to improve quality and velocity.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Engineering leader passionate about building scalable solutions and empowering teams
        </p>

        {/* Summary */}
        <div className="bg-slate-800 rounded-2xl p-8 mb-12 card-hover border border-slate-700">
          <p className="text-lg text-gray-300 leading-relaxed">
            Hands-on Software Engineering Manager with <span className="text-blue-400 font-semibold">15+ years</span> of 
            experience in cloud engineering, SaaS product development, and DevOps. Expert in 
            <span className="text-purple-400 font-semibold"> Azure, microservices, Kubernetes, CI/CD</span>, and 
            Agile delivery. I wear multiple hats across development management, product, program, QE, support, 
            and operations—stepping into whichever role is needed to keep delivery moving and ensure end-to-end execution.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Passionate about <span className="text-yellow-400 font-semibold">automation, AI innovation</span>, 
            workflow simplification, and delivering scalable, customer-focused products. Currently driving 
            AI-powered initiatives at PROS Inc. to transform how engineering teams work.
          </p>
        </div>

        {/* Leadership Philosophy */}
        <h3 className="text-2xl font-bold text-center mb-8">Leadership Philosophy</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyItems.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 card-hover border border-slate-700 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '90%', label: 'Team Retention' },
            { value: '30%', label: 'Deployment Time Reduced' },
            { value: '3%', label: 'Revenue Impact' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
