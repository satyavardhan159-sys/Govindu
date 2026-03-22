const Pricing = () => {
  const packages = [
    {
      name: 'Silver Package',
      price: '$45',
      perPerson: 'per person',
      features: [
        '3-course meal (appetizer, main, dessert)',
        'Non-alcoholic beverages',
        'Basic table setup',
        'Standard service staff',
        'Setup and cleanup',
        'Up to 50 guests'
      ],
      popular: false
    },
    {
      name: 'Gold Package',
      price: '$65',
      perPerson: 'per person',
      features: [
        '4-course meal with wine pairing',
        'Full beverage service (alcoholic & non-alcoholic)',
        'Elegant table setup with linens',
        'Professional service staff',
        'Setup, service, and cleanup',
        'Custom menu consultation',
        'Up to 100 guests'
      ],
      popular: true
    },
    {
      name: 'Platinum Package',
      price: '$95',
      perPerson: 'per person',
      features: [
        '5-course gourmet meal',
        'Premium wine and beverage selection',
        'Luxury table setup with floral arrangements',
        'Dedicated event coordinator',
        'Full service including bartending',
        'Custom cake and dessert station',
        'Photography service',
        'Unlimited guests'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#E8F5E9]/80 via-[#C8E6C9]/80 to-[#A5D6A7]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B5E20] mb-4">
            Pricing Packages
          </h2>
          <p className="text-lg text-[#3E2723] max-w-2xl mx-auto font-body">
            Choose the perfect package for your event. All packages include professional
            service and exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-btn shadow-lg overflow-hidden border border-secondary/20 transition-transform duration-300 cursor-pointer ${pkg.popular ? 'ring-2 ring-primary transform scale-105 z-10' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-semibold rounded-bl-btn">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-dark mb-4">
                  {pkg.name}
                </h3>
                {/* Price removed as per request */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-dark font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-btn font-heading font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-bg
                  ${pkg.popular
                    ? 'bg-primary hover:bg-secondary text-white shadow-md'
                    : 'bg-secondary/10 hover:bg-secondary/20 text-dark'}
                `}>
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-dark mb-4 font-body">
            Need a custom package? <a href="#contact" className="text-primary underline hover:text-secondary font-bold">Contact us</a> for personalized pricing.
          </p>
          <a
            href="#contact"
            className="inline-block text-white px-8 py-3 rounded-btn font-heading font-semibold transition-colors duration-200 shadow-md border-2 border-[#1B5E20]"
            style={{ backgroundColor: '#1B5E20' }}
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;