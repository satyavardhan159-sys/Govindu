import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      content: 'GoVindu Catering made our wedding day absolutely perfect. The food was exquisite, the service was impeccable, and our guests are still talking about how delicious everything was!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Event Planner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      content: 'We\'ve used GoVindu for multiple corporate events. Their attention to detail and ability to accommodate dietary restrictions is outstanding. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Private Party Host',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      content: 'The team at GoVindu transformed our backyard into a culinary paradise. The presentation was beautiful and the flavors were incredible. Worth every penny!',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'Event Coordinator',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      content: 'Professional, reliable, and absolutely delicious. GoVindu has been our go-to caterer for the past three years. They never disappoint!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experiences with GoVindu Catering.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-16"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gradient-to-br from-white via-orange-50 to-orange-100 rounded-2xl shadow-2xl p-8 h-[450px] border-2 border-gray-100 hover:shadow-3xl hover:border-orange-200 transition-all duration-300 transform hover:-translate-y-1 hover:from-orange-50 hover:via-orange-100 hover:to-orange-200">
                <div className="flex flex-col h-full">
                  {/* Image and Rating Row */}
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mr-4 border-4 border-orange-100">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 text-xl mb-2">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-orange-600 font-semibold mb-4 bg-orange-50 px-3 py-1 rounded-full inline-block">
                      {testimonial.role}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Below Cards */}
        <div className="custom-pagination flex justify-center mt-8"></div>
      </div>
    </section>
  );
};

export default Testimonials;