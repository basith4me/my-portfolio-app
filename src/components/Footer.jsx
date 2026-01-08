import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <FiMail size={20} />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <footer className="py-8 px-4 border-t border-dark-lighter">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-slate hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Credit */}
          <div className="flex items-center gap-2 text-slate text-sm">
            <span>Designed & Built by</span>
            <span className="text-primary font-medium">Abdul Basith</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-slate text-xs">
            <span>Made with</span>
            <FiHeart className="text-primary fill-primary animate-pulse" size={14} />
            <span>using React + Vite + Tailwind</span>
          </div>

          {/* Copyright */}
          <p className="text-slate text-xs">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
