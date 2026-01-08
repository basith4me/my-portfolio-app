import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe API.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1-demo.com',
      featured: true
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with data visualization, user engagement metrics, and automated reporting features.',
      technologies: ['React', 'D3.js', 'Firebase', 'Chart.js'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2-demo.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and productivity analytics.',
      technologies: ['Next.js', 'PostgreSQL', 'Socket.io', 'Redux'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3-demo.com',
      featured: false
    },
    {
      title: 'Weather Forecast App',
      description: 'Weather application with 7-day forecasts, location-based services, and interactive weather maps.',
      technologies: ['React', 'OpenWeather API', 'Mapbox', 'TailwindCSS'],
      github: 'https://github.com/yourusername/project4',
      live: 'https://project4-demo.com',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'Modern blogging platform with markdown support, comment system, user profiles, and SEO optimization.',
      technologies: ['Next.js', 'MDX', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project5',
      live: 'https://project5-demo.com',
      featured: false
    },
    {
      title: 'Portfolio Generator',
      description: 'Automated portfolio website generator allowing users to create professional portfolios using templates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
      github: 'https://github.com/yourusername/project6',
      live: 'https://project6-demo.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter flex items-center">
            <span className="text-primary font-mono mr-4">03.</span>
            Things I've Built
            <span className="ml-8 h-px bg-dark-lighter flex-grow max-w-xs"></span>
          </h2>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`relative grid md:grid-cols-12 gap-4 items-center group ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              {/* Project Image/Background */}
              <div className={`md:col-span-7 ${index % 2 === 0 ? '' : 'md:col-start-6'}`}>
                <div className="relative h-80 bg-dark-light rounded border border-dark-lighter overflow-hidden group-hover:border-primary transition-colors duration-300">
                  <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                    <FiFolder className="w-20 h-20 text-primary/20" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`md:col-span-6 ${index % 2 === 0 ? 'md:col-start-6 md:-ml-12' : 'md:col-start-1 md:-mr-12'} relative z-10`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold text-slate-lighter mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="bg-dark-light p-6 rounded shadow-lg border border-dark-lighter">
                  <p className="text-slate leading-relaxed">{project.description}</p>
                </div>
                <ul className={`flex flex-wrap gap-3 mt-4 font-mono text-sm text-slate ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                  {project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
                <div className={`flex gap-4 mt-4 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-primary transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <FiGithub size={22} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-primary transition-colors duration-300"
                    aria-label="Live Demo"
                  >
                    <FiExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-slate-lighter mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-dark-light p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 border border-dark-lighter hover:border-primary flex flex-col"
              >
                <div className="flex justify-between items-center mb-4">
                  <FiFolder className="text-primary w-10 h-10" />
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-primary transition-colors duration-300"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate hover:text-primary transition-colors duration-300"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-lighter mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-xs text-slate">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
