import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = ({ onMenuSelect }) => {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Blessed by Lord Venkateswara',
      subtitle: 'Experience divine catering blessed by the grace of Lord Venkateswara Swamy.',
      cta: 'Corporate Catering Menu',
      ctaCategory: 'mains'
    },
    {
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Sacred Culinary Traditions',
      subtitle: 'Our Andhra & Telangana cuisine carries the divine blessings of Lord Venkateswara.',
      cta: 'Andhra & Telangana Marriage Catering Menu',
      ctaCategory: 'rice'
    },
    {
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Divine Feast for Every Occasion',
      subtitle: 'From weddings to festivals, we bring Lord Venkateswara\'s blessings to your celebrations.',
      cta: undefined,
      ctaCategory: undefined
    }
  ];

  const handleSlideMenu = (category) => {
    if (onMenuSelect) {
      onMenuSelect(category);
    }
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl">
                  <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-lg md:text-xl mb-8 animate-fade-in-delay">
                    {slide.subtitle}
                  </p>
                  {slide.cta && (
                    <button
                      onClick={() => handleSlideMenu(slide.ctaCategory)}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {slide.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;