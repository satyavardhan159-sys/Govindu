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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  GoVindu Catering
                </span>
                <p className="text-sm text-gray-400">Culinary Excellence Since 2010</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed">
              Creating unforgettable dining experiences for weddings, corporate events,
              and special occasions. We bring culinary excellence and professional
              service to every event we cater.
            </p>

            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-500/30 transition-colors">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  123 Culinary Street, Food District, FD 12345
                </span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">(555) 123-CATER</span>
              </div>
              <div className="flex items-center group">
                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3 group-hover:bg-orange-500/30 transition-colors">
                  <Mail className="w-5 h-5 text-orange-400" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">info@govinducatering.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-all duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Stay Connected
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest updates and special offers.
            </p>

            <form className="mb-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-r-lg font-semibold transition-all duration-200 flex items-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-12 h-12 bg-[#1877F2] hover:bg-[#166FE5] rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:from-[#7c3aed] hover:via-[#dc2626] hover:to-[#f59e0b] rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} GoVindu Catering. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;