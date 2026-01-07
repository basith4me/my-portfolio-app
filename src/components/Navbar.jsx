import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-light/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 group">
            <span className="text-primary text-2xl font-bold font-mono transition-transform duration-300 group-hover:scale-110">
              {'<Dev />'}
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate hover:text-primary transition-colors duration-300 text-sm group"
              >
                <span className="text-primary font-mono text-xs">{String(index + 1).padStart(2, '0')}.</span>{' '}
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                  {item.name}
                </span>
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-all duration-300 text-sm font-medium"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate hover:text-primary transition-colors duration-300 focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-light/95 backdrop-blur-sm">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate hover:text-primary hover:bg-dark-lighter transition-all duration-300"
            >
              <span className="text-primary font-mono text-xs">{String(index + 1).padStart(2, '0')}.</span>{' '}
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block mx-3 mt-2 text-center border border-primary text-primary px-4 py-2 rounded hover:bg-primary/10 transition-all duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
