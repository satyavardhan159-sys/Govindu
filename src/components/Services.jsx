import { Users, Building, Home, Cake } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Users,
      title: 'Weddings',
      description: 'Elegant wedding catering with customized menus for your special day. From intimate ceremonies to grand receptions.',
      slug: 'weddings'
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Professional catering services for business meetings, conferences, and company celebrations.',
      slug: 'corporate-events'
    },
    {
      icon: Home,
      title: 'Private Parties',
      description: 'Intimate gatherings, birthdays, anniversaries, and family celebrations with personalized service.',
      slug: 'private-parties'
    },
    {
      icon: Cake,
      title: 'Special Occasions',
      description: 'Graduations, retirements, holidays, and any special event that deserves exceptional catering.',
      slug: 'special-occasions'
    }
  ];

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Catering Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We specialize in creating memorable dining experiences for all types of events,
            from intimate gatherings to large celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.slug)}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 hover:bg-orange-50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 transition-colors duration-300 hover:bg-orange-200">
                <service.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-orange-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;