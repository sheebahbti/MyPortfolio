const skillCategories = [
  {
    title: 'Cloud & Infrastructure',
    skills: ['Azure', 'Kubernetes', 'AKS', 'Microservices', 'Docker'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Development',
    skills: ['Java', 'React', 'SQL', 'REST APIs', 'Spark'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'DevOps & Automation',
    skills: ['CI/CD', 'Rundeck', 'Cypress', 'Test Automation', 'Performance Optimization'],
    color: 'from-orange-500 to-yellow-500',
  },
  {
    title: 'AI & Innovation',
    skills: ['LLMs', 'AI Agents', 'GitHub Copilot', 'Prompt Engineering', 'AI Integration'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Leadership',
    skills: ['Team Building', 'Mentorship', 'Agile/Scrum', 'Program Management', 'Stakeholder Communication'],
    color: 'from-red-500 to-rose-500',
  },
  {
    title: 'Process & Methodology',
    skills: ['Spec-Driven Development', 'Risk Management', 'SAFe', 'Kanban', 'JIRA Portfolio'],
    color: 'from-indigo-500 to-violet-500',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit spanning technical depth and leadership breadth
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 card-hover border border-slate-700"
            >
              <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-300 hover:bg-slate-600 transition-colors"
                  >
                    {skill}
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
