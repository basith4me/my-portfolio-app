const About = () => {
  const technologies = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Laravel",
    "PHP",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
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
              Hello! I'm a full-stack developer with 2 years of experience
              building user-focused web solutions. What started as a childhood
              passion for technology has evolved into a career dedicated to
              creating seamless digital experiences that make a difference.
            </p>

            <p className="text-slate leading-relaxed">
              I specialize in web development, working across the full stack to
              bring ideas to life. Whether it's building dynamic e-commerce
              platforms, crafting elegant portfolio sites, or developing robust
              APIs, I focus on creating solutions that prioritize the end user.
            </p>

            <p className="text-slate leading-relaxed">
              For me, development isn't just about writing code—it's about
              building user experiences that feel intuitive and enjoyable.
              Beyond coding, I'm passionate about the entrepreneurial side of
              tech, with a keen interest in SEO and marketing strategies.
            </p>

            <p className="text-slate leading-relaxed">
              I'm currently seeking full-time opportunities where I can
              collaborate with talented teams to build impactful products. I
              thrive in environments that value innovation, user-centric design,
              and continuous learning.
            </p>

            <p className="text-slate leading-relaxed mt-6">
              Here are a few technologies I've been working with recently:
            </p>

            {/* Technologies Grid */}
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center text-slate font-mono text-sm"
                >
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
                  <span className="text-primary text-6xl font-mono">
                    {"{ }"}
                  </span>
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
