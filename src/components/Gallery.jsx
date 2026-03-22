import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center',
      alt: 'Traditional Andhra Wedding Catering Setup'
    },
    {
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center',
      alt: 'Telangana Festival Buffet Arrangement'
    },
    {
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop&crop=center',
      alt: 'Corporate Event Catering in Hyderabad'
    },
    {
      src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop&crop=center',
      alt: 'South Indian Dessert Display'
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center',
      alt: 'Family Function Catering Service'
    },
    {
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop&crop=center',
      alt: 'Birthday Party Catering Setup'
    },
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop&crop=center',
      alt: 'Temple Festival Food Service'
    },
    {
      src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop&crop=center',
      alt: 'House Warming Event Catering'
    },
    {
      src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop&crop=center',
      alt: 'Engagement Ceremony Catering'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-[#E8F5E9]/80 via-[#C8E6C9]/80 to-[#A5D6A7]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B5E20] mb-4">
            Our Work
          </h2>
          <p className="text-lg text-[#3E2723] max-w-2xl mx-auto font-body">
            Explore our portfolio of beautifully crafted catering experiences
            and events we've brought to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-btn shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-secondary/10 border border-transparent hover:border-secondary group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity duration-300"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold font-heading tracking-wide">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-dark bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-btn shadow-2xl border-4 border-secondary"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;