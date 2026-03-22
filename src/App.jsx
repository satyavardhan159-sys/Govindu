import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import Hero from './components/Hero';

import Services from './components/Services';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';

function App() {
  const [selectedMenuCategory, setSelectedMenuCategory] = useState('mains');

  return (
    <Router>
      <div className="App bg-[#FFF8F0]">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              {/* Modern Hero Section */}
              {/* <HeroSection /> */}
                <HeroSection />
              <section className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center bg-center bg-no-repeat"
                       style={{
                         backgroundImage: 'url(/govindu.png)',
                         backgroundSize: 'contain',
                         backgroundPosition: 'center'
                       }}>
                <div className="absolute left-0 top-6 px-4 md:px-12 w-1/2 flex flex-col items-start z-10">
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-2 drop-shadow-lg snake-text" style={{ color: '#1B5E20', fontFamily: 'Playfair Display, serif', fontWeight: 700, letterSpacing: '0.04em' }}>
                    Delicious food for every occasion
                  </h2>
                </div>
                <div className="absolute right-0 bottom-6 px-4 md:px-20 w-1/2 flex flex-col items-end z-10">
                  <p className="text-lg md:text-2xl font-bold italic tracking-wide snake-text" style={{ color: '#3E2723', fontFamily: 'Playfair Display, serif' }}>
                    We cater happiness
                  </p>
                </div>
              </section>
                            {/* <Hero onMenuSelect={setSelectedMenuCategory} /> */}

              <Services />
              <Gallery />
              <Menu selectedCategory={selectedMenuCategory} />
              <Pricing />
              <Testimonials />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;