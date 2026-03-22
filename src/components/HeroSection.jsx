// Modern Hero Section for GoVindu Catering
import React from 'react';

const HeroSection = () => (
  <section
    className="hero-section relative flex items-center justify-center min-h-[86vh] w-full pt-16 md:pt-20"
    style={{
      background: "url('/food-catering-stall.jpeg') center/cover no-repeat",
    }}
  >
    {/* Green gradient overlay for premium look */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20]/80 via-[#388E3C]/70 to-black/70 z-0" />
    <div className="relative z-10 flex flex-col items-center justify-end text-center px-4 h-full pb-10 md:pb-20" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
      <h1 className="text-2xl md:text-4xl font-bold mb-3 text-white drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, letterSpacing: '0.02em' }}>
        Govindu Catering
      </h1>
      <p className="text-base md:text-xl text-white mb-8 font-medium" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
        Authentic Andhra & Telangana Cuisine
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#menu"
          className="bg-[#43A047] hover:bg-[#2E7D32] text-white px-8 py-3 rounded-full font-bold text-base shadow-xl transition-all duration-300 animate-fade-in border-2 border-[#FF6B00] hover:border-[#e65c00]"
        >
          View Menu
        </a>
        <a
          href="#contact"
          className="bg-white text-[#3E2723] border-2 border-[#43A047] hover:bg-[#43A047] hover:text-white px-8 py-3 rounded-full font-bold text-base shadow-xl transition-all duration-300 animate-fade-in-delay"
        >
          Book Now
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
