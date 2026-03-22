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
    <section id="services" className="py-20 bg-gradient-to-br from-[#E8F5E9]/80 via-[#C8E6C9]/80 to-[#A5D6A7]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B5E20] mb-4">
            Our Catering Services
          </h2>
          <p className="text-lg text-[#3E2723] max-w-2xl mx-auto font-body">
            We specialize in creating memorable dining experiences for all types of events,
            from intimate gatherings to large celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.slug)}
              className="bg-white rounded-btn shadow-lg p-6 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border border-transparent hover:border-secondary group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-full mb-4 transition-colors duration-300 group-hover:bg-secondary">
                <service.icon className="w-8 h-8 text-primary group-hover:text-white" style={{ filter: 'drop-shadow(0 0 2px #1B5E20)' }} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-secondary transition-colors duration-300" style={{ color: '#1B5E20' }}>
                {service.title}
              </h3>
              <p className="text-body text-gray-700 group-hover:text-dark">
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