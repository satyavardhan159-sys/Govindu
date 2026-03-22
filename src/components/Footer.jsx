import { ChefHat, Mail, Phone, MapPin, Send, Facebook, Instagram, MessageCircle, ArrowUp } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-dark via-primary to-dark relative overflow-hidden font-body">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-btn flex items-center justify-center mr-4 shadow-lg">
                <ChefHat className="h-8 w-8" style={{  }} />
              </div>
              <div>
                <span className="text-2xl font-heading font-bold" style={{ color: '#1B5E20' }}>
                  GoVindu Catering
                </span>
                <p className="text-sm font-body" style={{ color: '#1B5E20', opacity: 0.7 }}>Culinary Excellence Since 2010</p>
              </div>
            </div>
            <p className="mb-8 max-w-md leading-relaxed font-body" style={{ color: '#1B5E20', opacity: 0.8 }}>
              Creating unforgettable dining experiences for weddings, corporate events,
              and special occasions. We bring culinary excellence and professional
              service to every event we cater.
            </p>

            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-secondary/20 rounded-btn flex items-center justify-center mr-3 group-hover:bg-secondary/30 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="group-hover:text-white transition-colors font-body" style={{ color: '#1B5E20', opacity: 0.9 }}>
                  123 Culinary Street, Food District, FD 12345
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-secondary/20 rounded-btn flex items-center justify-center mr-3 group-hover:bg-secondary/30 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="group-hover:text-white transition-colors font-body" style={{ color: '#1B5E20', opacity: 0.9 }}>(555) 123-CATER</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-secondary/20 rounded-btn flex items-center justify-center mr-3 group-hover:bg-secondary/30 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="group-hover:text-white transition-colors font-body" style={{ color: '#1B5E20', opacity: 0.9 }}>info@govinducatering.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6" style={{ color: '#1B5E20' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-secondary transition-all duration-200 flex items-center group font-body"
                    style={{ color: '#1B5E20' }}
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6" style={{ color: '#1B5E20' }}>
              Stay Connected
            </h3>

            <p className="mb-6 leading-relaxed font-body" style={{ color: '#1B5E20' }}>
              Subscribe to our newsletter for the latest updates and special offers.
            </p>

            <form className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-dark/60 border border-secondary/30 rounded-l-btn placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-r-btn font-heading font-semibold transition-all duration-200 flex items-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div>
              <h4 className="text-lg font-heading font-semibold mb-4" style={{ color: '#1B5E20' }}>Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-btn flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Facebook className="w-6 h-6" style={{ color: '#fff', filter: 'drop-shadow(0 0 2px #1B5E20)' }} />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary rounded-btn flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Instagram className="w-6 h-6" style={{ color: '#fff', filter: 'drop-shadow(0 0 2px #1B5E20)' }} />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-btn flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <MessageCircle className="w-6 h-6" style={{ color: '#fff', filter: 'drop-shadow(0 0 2px #1B5E20)' }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary/30 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0 font-body" style={{ color: '#1B5E20' }}>
              © {new Date().getFullYear()} GoVindu Catering. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm font-body">
              <a href="#" className="hover:text-secondary transition-colors" style={{ color: '#1B5E20' }}>Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors" style={{ color: '#1B5E20' }}>Terms of Service</a>
              <a href="#" className="hover:text-secondary transition-colors" style={{ color: '#1B5E20' }}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#1B5E20] hover:bg-[#388E3C] hover:cursor-pointer rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50 border-2 border-white"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" style={{ color: '#fff' }} />
      </button>
    </footer>
  );
};

export default Footer;