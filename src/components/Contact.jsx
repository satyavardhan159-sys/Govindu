import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDetails: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', eventDetails: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to make your event unforgettable? Let's create something amazing together.
            Reach out for a personalized consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                <p className="text-gray-600">We'll respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="eventDetails" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors">
                  Event Details
                </label>
                <input
                  type="text"
                  id="eventDetails"
                  name="eventDetails"
                  value={formData.eventDetails}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder="Event type, date, number of guests"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-orange-500 transition-colors">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your event and any special requirements"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information & Map */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Visit Our Location</h4>
                    <p className="text-gray-600 leading-relaxed">
                      123 Culinary Street<br />
                      Food District, FD 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">(555) 123-CATER</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">info@govinducatering.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}></div>
                  <Facebook className="w-6 h-6 relative z-10" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}></div>
                  <Instagram className="w-6 h-6 relative z-10" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)'}}></div>
                  <MessageCircle className="w-6 h-6 relative z-10" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-64 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 to-orange-200/20"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-orange-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Find Us Here</h4>
                  <p className="text-gray-600 text-sm">Interactive Google Maps integration</p>
                  <p className="text-xs text-gray-500 mt-1">Coming soon with full location details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;