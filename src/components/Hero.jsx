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
    // ...add other slides here as needed...
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
            <div
              className="relative h-screen w-full flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay with green gradient and darken */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B5E20]/80 via-[#388E3C]/70 to-black/70 z-0" />
              <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 h-full">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, letterSpacing: '0.02em' }}>
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-white mb-8 font-medium" style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}>
                  {slide.subtitle}
                </p>
                {slide.cta && (
                  <button
                    onClick={() => handleSlideMenu(slide.ctaCategory)}
                    className="bg-[#43A047] hover:bg-[#2E7D32] text-white px-8 py-3 rounded-full font-bold text-base shadow-xl transition-all duration-300 animate-fade-in border-2 border-[#FF6B00] hover:border-[#e65c00]"
                    style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.01em' }}
                  >
                    {slide.cta}
                  </button>
                )}
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