import { FiCode, FiDatabase, FiLayout, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiLayout className="w-10 h-10" />,
      skills: ['React', 'JavaScript', 'HTML/CSS', 'TailwindCSS', 'Redux', 'Material-UI', 'Livewire', 'Alpine.js', 'Bootstrap'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <FiCode className="w-10 h-10" />,
      skills: ['Node.js', 'Express', 'Laravel', 'PHP', 'REST APIs'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database',
      icon: <FiDatabase className="w-10 h-10" />,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tools & Others',
      icon: <FiTool className="w-10 h-10" />,
      skills: ['Git', 'Postman', 'Figma', 'Render.com', 'SEO Basics'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter flex items-center">
            <span className="text-primary font-mono mr-4">02.</span>
            Skills & Technologies
            <span className="ml-8 h-px bg-dark-lighter flex-grow max-w-xs"></span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-dark-light p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 border border-dark-lighter hover:border-primary relative overflow-hidden"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-lighter mb-4 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-slate text-sm flex items-center font-mono">
                      <span className="text-primary mr-2">▹</span>
                      <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
