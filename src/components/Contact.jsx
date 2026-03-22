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
    <section id="contact" className="py-20 bg-gradient-to-br from-[#E8F5E9]/80 via-[#C8E6C9]/80 to-[#A5D6A7]/80 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#43A047] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A5D6A7] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#1B5E20] mb-6">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#3E2723] max-w-3xl mx-auto leading-relaxed font-body">
            Ready to make your event unforgettable? Let's create something amazing together.
            Reach out for a personalized consultation and quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-btn shadow-2xl p-8 border border-[#A5D6A7]/40">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-[#43A047] rounded-btn flex items-center justify-center mr-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-[#1B5E20]">Send us a Message</h3>
                <p className="text-[#3E2723] font-body">We'll respond within 24 hours</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2 group-focus-within:text-primary transition-colors font-body">
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
                      className="w-full px-4 py-4 border-2 border-secondary/20 rounded-btn focus:border-primary focus:ring-4 focus:ring-secondary/20 transition-all duration-200 bg-white/50 backdrop-blur-sm font-body"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2 group-focus-within:text-primary transition-colors font-body">
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
                      className="w-full px-4 py-4 border-2 border-secondary/20 rounded-btn focus:border-primary focus:ring-4 focus:ring-secondary/20 transition-all duration-200 bg-white/50 backdrop-blur-sm font-body"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="group">
                <label htmlFor="eventDetails" className="block text-sm font-semibold text-dark mb-2 group-focus-within:text-primary transition-colors font-body">
                  Event Details
                </label>
                <input
                  type="text"
                  id="eventDetails"
                  name="eventDetails"
                  value={formData.eventDetails}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-secondary/20 rounded-btn focus:border-primary focus:ring-4 focus:ring-secondary/20 transition-all duration-200 bg-white/50 backdrop-blur-sm font-body"
                  placeholder="Event type, date, number of guests"
                />
              </div>

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2 group-focus-within:text-primary transition-colors font-body">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 border-2 border-secondary/20 rounded-btn focus:border-primary focus:ring-4 focus:ring-secondary/20 transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none font-body"
                  placeholder="Tell us about your event and any special requirements"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 rounded-btn font-heading font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2"
                style={{ backgroundColor: '#1B5E20', color: '#fff' }}
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
              <div className="bg-white/90 backdrop-blur-sm rounded-btn shadow-xl p-6 border border-secondary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-btn flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-dark mb-1">Visit Our Location</h4>
                    <p className="text-dark font-body leading-relaxed">
                      123 Culinary Street<br />
                      Food District, FD 12345
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-btn shadow-xl p-6 border border-secondary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-btn flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-dark mb-1">Call Us</h4>
                    <p className="text-dark font-body">(555) 123-CATER</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-btn shadow-xl p-6 border border-secondary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-btn flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-dark mb-1">Email Us</h4>
                    <p className="text-dark font-body">info@govinducatering.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-btn shadow-xl p-6 border border-secondary/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary/20 rounded-btn flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-dark mb-1">Business Hours</h4>
                    <div className="text-dark font-body space-y-1">
                      <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p>Sat: 10:00 AM - 4:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/90 backdrop-blur-sm rounded-btn shadow-xl p-6 border border-secondary/20">
              <h4 className="text-lg font-heading font-bold text-dark mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-btn flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden group">
                  <Facebook className="w-6 h-6 relative z-10" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary rounded-btn flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden group">
                  <Instagram className="w-6 h-6 relative z-10" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-btn flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg relative overflow-hidden group">
                  <MessageCircle className="w-6 h-6 relative z-10" />
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/90 backdrop-blur-sm rounded-btn shadow-xl p-6 border border-secondary/20 overflow-hidden">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/20 rounded-btn h-64 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-secondary/20 rounded-btn flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-dark mb-2">Find Us Here</h4>
                  <p className="text-dark font-body text-sm">Interactive Google Maps integration</p>
                  <p className="text-xs text-dark font-body mt-1">Coming soon with full location details</p>
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