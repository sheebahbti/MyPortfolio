import { Building2, TrendingUp, Code, Briefcase } from 'lucide-react'

const timelineData = [
  {
    period: '2018 – Present',
    title: 'Software Engineering Manager',
    company: 'PROS Inc.',
    location: 'Houston, TX',
    icon: TrendingUp,
    highlights: [
      'Leading global engineering teams delivering cloud-native SaaS solutions on Azure/AKS',
      'Pioneering AI initiatives: agents for test automation, LLM-powered support tools',
      'Introduced Spec-Driven Development improving quality and velocity',
      'Achieved 90% team retention through SMART goals and coaching',
      'Created executive JIRA dashboards reducing reporting time by 30%',
    ],
    color: 'from-blue-500 to-purple-500',
  },
  {
    period: '2017 – 2018',
    title: 'Lead Software Engineer',
    company: 'PROS Inc.',
    location: 'Houston, TX',
    icon: Code,
    highlights: [
      'Led design and delivery of microservices and distributed components',
      'Drove technical decisions and code quality standards',
      'Partnered with Product and UX to define technical requirements',
      'Mentored engineers through design reviews and pair programming',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    period: '2014 – 2017',
    title: 'Software Engineer → Senior Software Engineer',
    company: 'PROS Inc.',
    location: 'Houston, TX',
    icon: Code,
    highlights: [
      'Developed core modules for airline revenue management',
      'Designed microservices, REST APIs, and cloud-native components',
      'Improved performance and reliability through refactoring and automation',
    ],
    color: 'from-pink-500 to-red-500',
  },
  {
    period: '2010 – 2014',
    title: 'Sr. Systems Analyst',
    company: 'Fiserv',
    location: 'Charlotte, NC',
    icon: Building2,
    highlights: [
      'Full-stack development for CPO payments product (ACH/NACHA)',
      'Performed security testing using Paros and AppScan',
      'SCRUM Master applying Agile, Scrum, SAFe, Kanban',
    ],
    color: 'from-red-500 to-orange-500',
  },
  {
    period: '2006 – 2010',
    title: 'Engineer – Application Development',
    company: 'DXC Technology',
    location: 'India',
    icon: Briefcase,
    highlights: [
      'Developed Java-based applications and web services',
      'Contributed to SICS reinsurance product development',
    ],
    color: 'from-orange-500 to-yellow-500',
  },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Career Journey</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          15+ years of progressive growth from individual contributor to engineering leader
        </p>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block timeline-line" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-slate-800 rounded-xl p-6 card-hover border border-slate-700">
                    <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${item.color} mb-4`} />
                    <span className="text-sm text-blue-400 font-semibold">{item.period}</span>
                    <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {item.company} • {item.location}
                    </p>
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-blue-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg z-10`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Education</h3>
          <div className="bg-slate-800 rounded-xl p-6 inline-block border border-slate-700">
            <p className="text-xl font-semibold">B.Tech, Computer Science Engineering</p>
            <p className="text-gray-400">Harcourt Butler Technological Institute, Kanpur, India</p>
          </div>
        </div>
      </div>
    </section>
  )
}
