import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Menu', href: '/#menu' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      // If we're not on home page, navigate to home first
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        // If we're on home page, just scroll
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white z-[9999] shadow-md font-heading transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/govindu.png"
                alt="GoVindu Logo"
                className="h-12 w-12 object-contain mr-3"
              />
              <span className="text-lg sm:text-xl font-bold tracking-wide" style={{ color: '#1B5E20' }}>GoVindu Catering</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-4 py-2 rounded-btn text-base font-semibold transition-colors duration-200 outline-none focus:outline-none cursor-pointer
                    ${location.pathname === item.href.split('#')[0]
                      ? 'bg-secondary text-dark'
                      : 'bg-white hover:bg-secondary hover:text-dark'}
                  `}
                  style={{ color: '#1B5E20' }}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-btn hover:text-secondary hover:bg-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary" style={{ color: '#fff' }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark border-t border-secondary">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block px-4 py-2 rounded-btn text-base font-semibold w-full text-left transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-dark
                  ${location.pathname === item.href.split('#')[0]
                    ? 'bg-secondary text-dark'
                    : 'bg-dark text-white hover:bg-secondary hover:text-dark'}
                `}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;