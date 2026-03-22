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
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pricing Packages
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect package for your event. All packages include professional
            service and exceptional quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                pkg.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {pkg.name}
                </h3>



                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
                  pkg.popular
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}>
                  Choose Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom package? Contact us for personalized pricing.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;