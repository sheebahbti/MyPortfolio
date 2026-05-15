import { TrendingUp, Clock, DollarSign, BarChart3, Rocket, Shield } from 'lucide-react'

const projects = [
  {
    icon: DollarSign,
    title: 'Willingness to Pay Feature',
    description: 'Led the development of pricing intelligence feature that directly impacted company revenue.',
    metrics: [
      { label: 'Revenue Impact', value: '+3%' },
      { label: 'Cross-team collaboration', value: '5 teams' },
    ],
    tags: ['Product Development', 'Revenue', 'Leadership'],
  },
  {
    icon: Rocket,
    title: 'Spark Pipeline Optimization',
    description: 'Engineered high-performance data pipelines that dramatically reduced processing time.',
    metrics: [
      { label: 'Processing Time', value: 'Hours → Minutes' },
      { label: 'Scalability', value: '10x throughput' },
    ],
    tags: ['Spark', 'Performance', 'Data Engineering'],
  },
  {
    icon: Clock,
    title: 'Rundeck Deployment Migration',
    description: 'Led migration to self-service deployment model, empowering teams and accelerating releases.',
    metrics: [
      { label: 'Deployment Time', value: '-30%' },
      { label: 'Self-service', value: '100%' },
    ],
    tags: ['DevOps', 'Automation', 'Self-Service'],
  },
  {
    icon: BarChart3,
    title: 'Executive JIRA Dashboards',
    description: 'Created comprehensive portfolio dashboards for executive visibility into engineering progress.',
    metrics: [
      { label: 'Reporting Time', value: '-30%' },
      { label: 'Stakeholder Visibility', value: 'Real-time' },
    ],
    tags: ['Analytics', 'Program Management', 'Visibility'],
  },
  {
    icon: TrendingUp,
    title: 'Team Retention Program',
    description: 'Implemented SMART goals and coaching programs that significantly improved team retention.',
    metrics: [
      { label: 'Team Retention', value: '90%' },
      { label: 'Promotions Facilitated', value: 'Multiple' },
    ],
    tags: ['Leadership', 'Mentorship', 'Culture'],
  },
  {
    icon: Shield,
    title: 'Cloud-Native SaaS Platform',
    description: 'Leading global engineering teams delivering enterprise SaaS solutions on Azure/AKS.',
    metrics: [
      { label: 'Platform', value: 'Azure/AKS' },
      { label: 'Team Scope', value: 'Global' },
    ],
    tags: ['Azure', 'Kubernetes', 'SaaS', 'Leadership'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Key Projects & Achievements</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Delivering measurable impact through technical excellence and strategic leadership
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 card-hover border border-slate-700"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                <project.icon className="w-6 h-6 text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Metrics */}
              <div className="space-y-2 mb-4">
                {project.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">{metric.label}</span>
                    <span className="text-blue-400 font-semibold">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-slate-700 rounded text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
