const About = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'TypeScript',
    'Python',
    'MongoDB',
    'PostgreSQL',
    'TailwindCSS',
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-lighter flex items-center">
            <span className="text-primary font-mono mr-4">01.</span>
            About Me
            <span className="ml-8 h-px bg-dark-lighter flex-grow max-w-xs"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-slate leading-relaxed">
              Hello! I'm a passionate software developer with a love for creating things that live on the internet.
              My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes
              — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            
            <p className="text-slate leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up,
              a huge corporation, and a student-led design studio. My main focus these days is building accessible,
              inclusive products and digital experiences that make a real impact.
            </p>
            
            <p className="text-slate leading-relaxed">
              I also recently launched a course that covers everything you need to build a web app with the Spotify API.
            </p>

            <p className="text-slate leading-relaxed mt-6">
              Here are a few technologies I've been working with recently:
            </p>

            {/* Technologies Grid */}
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center text-slate font-mono text-sm">
                  <span className="text-primary mr-2">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Image Placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              <div className="w-full max-w-[300px] aspect-square rounded border-2 border-primary relative overflow-hidden bg-dark-light">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-primary text-6xl font-mono">{'{ }'}</span>
                </div>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full max-w-[300px] aspect-square border-2 border-primary rounded -z-10 group-hover:-bottom-6 group-hover:-right-6 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
