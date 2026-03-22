import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const serviceData = {
    'weddings': {
      title: 'Wedding Catering',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: `At GoVindu Caterings, we understand that your wedding day is one of the most important moments of your life. Our wedding catering services are designed to make your special day truly unforgettable with authentic Andhra & Telangana cuisine blessed by Lord Venkateswara.

      We offer comprehensive wedding catering packages that include:
      • Customized menus featuring traditional South Indian delicacies
      • Professional service staff trained in wedding etiquette
      • Elegant presentation and plating
      • Dietary accommodations for all guests
      • Setup and cleanup services
      • Coordination with your wedding planner

      From intimate ceremonies to grand receptions, our experienced team ensures every detail is perfect, allowing you to focus on celebrating your love with family and friends.`,
      faqs: [
        {
          question: 'What types of wedding packages do you offer?',
          answer: 'We offer three main wedding packages: Traditional (serving 50-100 guests), Premium (100-300 guests), and Luxury (300+ guests). Each package includes customized menus, service staff, and complete event coordination.'
        },
        {
          question: 'Can you accommodate dietary restrictions?',
          answer: 'Absolutely! We cater to all dietary needs including vegetarian, vegan, gluten-free, and allergen-specific requirements. We work closely with you to ensure all guests\' preferences are accommodated.'
        },
        {
          question: 'Do you provide service staff for the wedding?',
          answer: 'Yes, our professional service staff is included in all wedding packages. They are trained in wedding service etiquette and will ensure smooth service throughout your event.'
        },
        {
          question: 'How far in advance should we book wedding catering?',
          answer: 'We recommend booking at least 3-6 months in advance for weddings, especially during peak seasons. However, we can accommodate last-minute bookings based on availability.'
        },
        {
          question: 'Can you work with our wedding planner?',
          answer: 'Definitely! We have extensive experience collaborating with wedding planners and are happy to coordinate all catering aspects with your planning team.'
        }
      ]
    },
    'corporate-events': {
      title: 'Corporate Event Catering',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: `GoVindu Caterings specializes in professional corporate event catering that impresses clients and boosts team morale. Our corporate catering services combine the rich flavors of Andhra & Telangana cuisine with modern presentation standards perfect for business environments.

      Our corporate event services include:
      • Business lunch and dinner catering
      • Conference and seminar meal services
      • Team building event catering
      • Product launch and networking events
      • Executive dining experiences
      • Coffee breaks and refreshments
      • Dietary accommodation for international guests

      We understand the importance of first impressions in business settings and ensure our service maintains the highest standards of professionalism while delivering exceptional culinary experiences.`,
      faqs: [
        {
          question: 'What types of corporate events do you cater?',
          answer: 'We cater to all corporate events including business meetings, conferences, seminars, product launches, team-building events, networking functions, and executive dining experiences.'
        },
        {
          question: 'Can you provide catering for international guests?',
          answer: 'Yes, we have experience catering to international delegations and can accommodate various cultural and dietary preferences while showcasing authentic South Indian cuisine.'
        },
        {
          question: 'Do you offer buffet or plated service for corporate events?',
          answer: 'We offer both buffet and plated service options depending on your event requirements. Buffet service is ideal for larger gatherings, while plated service provides a more formal dining experience.'
        },
        {
          question: 'Can you accommodate last-minute corporate catering requests?',
          answer: 'We understand business needs can change quickly. While we prefer advance notice, we can often accommodate last-minute requests based on availability and menu complexity.'
        },
        {
          question: 'Do you provide setup and cleanup services?',
          answer: 'Yes, all our corporate catering packages include professional setup, service during the event, and complete cleanup afterward, ensuring a hassle-free experience for our clients.'
        }
      ]
    },
    'private-parties': {
      title: 'Private Party Catering',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: `Celebrate life's special moments with GoVindu Caterings' intimate and personalized private party catering. Whether it's a birthday, anniversary, family gathering, or any private celebration, we create memorable dining experiences with the divine blessings of Lord Venkateswara.

      Our private party catering services include:
      • Customized menus for any occasion
      • Intimate service for small to medium gatherings
      • Themed party food options
      • Children's menu options
      • Cake and dessert services
      • Setup and coordination
      • Flexible timing and service options

      We treat every private party as special, ensuring your celebration is filled with delicious food and warm hospitality that reflects the authentic flavors of Andhra & Telangana cuisine.`,
      faqs: [
        {
          question: 'What size parties do you cater for?',
          answer: 'We cater to intimate gatherings of 10-50 guests, making us perfect for private parties, family celebrations, and small social events.'
        },
        {
          question: 'Can you accommodate children\'s parties?',
          answer: 'Absolutely! We offer kid-friendly menu options, themed presentations, and can work with you to create fun, age-appropriate dining experiences for children.'
        },
        {
          question: 'Do you provide cake and dessert services?',
          answer: 'Yes, we can arrange for beautiful cakes and desserts to complement your celebration. We work with local bakers or can provide traditional South Indian sweets.'
        },
        {
          question: 'How much notice do you need for private parties?',
          answer: 'We recommend 2-4 weeks notice for private parties, but we can often accommodate shorter notice depending on the menu complexity and guest count.'
        },
        {
          question: 'Can you help with party planning and coordination?',
          answer: 'While we specialize in catering, we can certainly coordinate with your party planner and provide recommendations for timing, service flow, and menu selections.'
        }
      ]
    },
    'special-occasions': {
      title: 'Special Occasions Catering',
      image: 'https://images.unsplash.com/photo-1551218377-a0a4b1ed3a5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: `From graduations to retirements, holidays to milestone celebrations, GoVindu Caterings brings the divine touch of Lord Venkateswara to every special occasion. Our special occasions catering combines traditional South Indian flavors with contemporary presentation to create unforgettable moments.

      Our special occasions services include:
      • Graduation celebrations
      • Retirement parties
      • Holiday gatherings
      • Milestone birthdays
      • Religious ceremonies
      • Community events
      • Award ceremonies
      • Custom celebration packages

      Each special occasion deserves exceptional food that honors the moment. We work closely with you to understand the significance of your event and create a culinary experience that perfectly complements your celebration.`,
      faqs: [
        {
          question: 'What types of special occasions do you cater?',
          answer: 'We cater to all special occasions including graduations, retirements, milestone birthdays, religious ceremonies, holiday gatherings, award ceremonies, and community celebrations.'
        },
        {
          question: 'Can you create custom menus for specific occasions?',
          answer: 'Yes, we love working with clients to create custom menus that reflect the theme and significance of their special occasion. We can incorporate traditional elements or modern twists.'
        },
        {
          question: 'Do you cater to religious ceremonies?',
          answer: 'Absolutely! We have extensive experience with various religious ceremonies and can provide appropriate menus that respect cultural and religious traditions while maintaining our authentic Andhra & Telangana cuisine.'
        },
        {
          question: 'Can you accommodate large groups for special occasions?',
          answer: 'Yes, we can cater to groups of all sizes for special occasions. Our scalable service allows us to provide the same quality and attention to detail regardless of guest count.'
        },
        {
          question: 'How do you handle dietary restrictions for diverse groups?',
          answer: 'We are experienced in accommodating diverse dietary needs and can create inclusive menus that work for all guests while maintaining the authenticity of our South Indian cuisine.'
        }
      ]
    }
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-orange-500 hover:text-orange-600">Return to Home</Link>
        </div>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Service Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#1B5E20' }}>
              {service.title}
            </h1>
            <Link to="/" className="text-orange-500 hover:text-orange-600 font-semibold">
              ← Back to Services
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Image Section */}
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Description Section */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#1B5E20' }}>
                About Our {service.title}
              </h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {service.description}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#1B5E20' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;