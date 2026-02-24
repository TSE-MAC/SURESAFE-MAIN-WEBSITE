import React from 'react';
import { ShoppingCart, Wrench, Search, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/mock';

const Services = () => {
  const iconMap = {
    ShoppingCart: ShoppingCart,
    Wrench: Wrench,
    Search: Search,
    Shield: Shield,
    Users: Users
  };

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Free initial consultation to assess your fire safety needs'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Custom solution design based on your requirements and budget'
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Professional installation by certified technicians'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing maintenance and 24/7 emergency support'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768359089503-19558600d0f1"
            alt="Fire Safety Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive fire safety solutions from installation to maintenance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete fire safety services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-4 rounded-lg flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-red-600 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent workflow for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-red-200">
                    <ArrowRight className="absolute -right-3 -top-3 h-6 w-6 text-red-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Annual Maintenance Contract
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Keep your fire safety systems in optimal condition with our comprehensive AMC packages.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Regular Inspections</h4>
                    <p className="text-gray-600">Scheduled maintenance visits to ensure system reliability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Priority Support</h4>
                    <p className="text-gray-600">24/7 emergency response with priority service</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Parts Replacement</h4>
                    <p className="text-gray-600">Genuine parts replacement at competitive prices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Compliance Certificates</h4>
                    <p className="text-gray-600">Official documentation for regulatory compliance</p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Get AMC Quote</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1712640379137-6d2532f887a7"
                alt="Fire Safety Maintenance"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional service you can rely on
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Technicians</h3>
              <p className="text-gray-600">All our technicians are trained and certified professionals</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Every installation meets strict quality and safety standards</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">500+ satisfied customers trust our services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Need Fire Safety Services?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
