import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl w-full">
        <div className="animate-fadeIn">
          {/* Intro Line */}
          <p className="text-primary font-mono text-base sm:text-lg mb-5 animate-slideUp">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-lighter mb-3 animate-slideUp">
            ABDUL BASITH
          </h1>

          {/* Tagline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mb-5 animate-slideUp">
            I build things for the web.
          </h2>

          {/* Description */}
          <p className="text-slate text-base sm:text-lg max-w-2xl mb-10 leading-relaxed animate-slideUp">
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products that make a difference.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mb-10 animate-slideUp">
            <a
              href="https://github.com/basith4me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/abdul-basith-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Twitter"
            >
              <FiTwitter size={24} />
            </a>
            <a
              href="mailto:abdulbasith.dev4@gmail.com"
              className="text-slate hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block border-2 border-primary text-primary px-8 py-4 rounded hover:bg-primary/10 transition-all duration-300 text-base sm:text-lg font-medium animate-slideUp"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
