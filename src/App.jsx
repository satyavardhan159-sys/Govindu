import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
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
      <div className="App">
        <Navigation />

        <Routes>
          <Route path="/" element={
            <>
              {/* GoVindu Background Image Section */}
              <section className="relative h-64 md:h-80 lg:h-96 bg-center bg-no-repeat"
                       style={{
                         backgroundImage: 'url(/govindu.png)',
                         backgroundSize: 'contain',
                         backgroundPosition: 'center'
                       }}>
              </section>

              {/* Welcome Text Section */}
              <section className="py-12 bg-gradient-to-r from-orange-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-600 mb-4">
                    Welcome to GoVindu Foods & Caterings
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
                    Blessed by Lord Venkateswara - Authentic Andhra & Telangana Cuisine
                  </p>
                </div>
              </section>

              <Hero onMenuSelect={setSelectedMenuCategory} />
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