import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Award, Clock, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { products, stats } from '../data/mock';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1766152249662-c7774b68bd72"
            alt="Fire Safety Equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="h-5 w-5 text-red-500" />
              <span className="text-white text-sm font-medium">Certified Fire Safety Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Complete Fire Safety
              <span className="block text-red-500 mt-2">Solutions for Homes</span>
              <span className="block text-white mt-2">& Industries</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We provide certified fire protection equipment, installation, and maintenance services. 
              Protecting lives and property with trusted, professional fire safety solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/products"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
              >
                Get Free Quote
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-4">
                  <Award className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-white font-semibold">Certified Products</h3>
                <p className="text-gray-300 text-sm">IS Standard Compliant</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-4">
                  <Clock className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-white font-semibold">24/7 Support</h3>
                <p className="text-gray-300 text-sm">Emergency Response</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="bg-red-600/20 backdrop-blur-sm rounded-full p-4">
                  <Phone className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-white font-semibold">Expert Installation</h3>
                <p className="text-gray-300 text-sm">Professional Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular fire safety equipment, trusted by thousands of customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.capacities.map((capacity) => (
                      <span
                        key={capacity}
                        className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {capacity}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-red-600 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/products"
              className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose SureSafe?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                SureSafe Fire Safety Solutions is a trusted supplier and service provider of 
                certified fire safety equipment. We specialize in supplying, installing, and 
                maintaining fire protection systems for residential, commercial, and industrial properties.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-50 p-2 rounded-lg flex-shrink-0">
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Certified Products</h3>
                    <p className="text-gray-600 text-sm">All products are IS standard certified and approved</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-50 p-2 rounded-lg flex-shrink-0">
                    <Award className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Professional Installation</h3>
                    <p className="text-gray-600 text-sm">Expert technicians ensure proper installation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-50 p-2 rounded-lg flex-shrink-0">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
                    <p className="text-gray-600 text-sm">Round-the-clock emergency support available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-50 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Annual Maintenance</h3>
                    <p className="text-gray-600 text-sm">Comprehensive AMC packages available</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-red-600">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src="https://images.unsplash.com/photo-1633092228879-d6a88c22e7bc"
                  alt="Fire Safety Professionals"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Protect Your Property?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts for a free consultation and quote
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
          >
            <span>Contact Us Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
