import React from 'react';
import { Shield, Target, Award, Users, CheckCircle, TrendingUp } from 'lucide-react';
import { stats } from '../data/mock';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "We prioritize safety above all, ensuring every product meets the highest standards."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "All our products are certified and tested for reliability and performance."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction and safety are at the core of everything we do."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "We constantly upgrade our services to meet evolving safety standards."
    }
  ];

  const certifications = [
    "IS 15683 - Fire Extinguishers",
    "IS 2189 - Fire Alarm Systems",
    "IS 5182 - Smoke Detectors",
    "IS 903 - Fire Hydrant Systems",
    "IS 884 - Fire Hose Reels",
    "ISO 9001:2015 Certified"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633092228879-d6a88c22e7bc"
            alt="About SureSafe"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About SureSafe</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your Trusted Partner in Fire Safety Solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                SureSafe Fire Safety Solutions is a leading provider of comprehensive fire safety equipment 
                and services in Gujarat. Established with a mission to protect lives and property, we have 
                been serving residential, commercial, and industrial clients for over 5 years.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We specialize in supplying certified fire safety equipment, professional installation services, 
                regular maintenance contracts, and expert consultation. Our team of trained professionals 
                ensures that every client receives the highest standard of safety solutions.
              </p>
              <p className="text-lg text-gray-600">
                Based in Botad, Gujarat, we have successfully completed over 1000 installations and continue 
                to serve 500+ satisfied customers across the region. Our commitment to quality, reliability, 
                and customer satisfaction has made us a trusted name in fire safety.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1760228793179-aeb9b305861f"
                alt="Fire Safety Equipment"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Installations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, certified fire safety solutions that protect lives and property. 
                We strive to make fire safety accessible and affordable for everyone while maintaining 
                the highest standards of quality and service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted fire safety solutions provider in Gujarat, recognized for our 
                commitment to excellence, innovation, and customer satisfaction. We aim to create a 
                safer environment for all through continuous improvement and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All our products meet Indian and international safety standards
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4"
              >
                <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SureSafe?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart from others
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border-l-4 border-red-600 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Certified Products</h3>
              <p className="text-gray-600">
                All our products are IS standard certified and approved by regulatory authorities.
              </p>
            </div>
            <div className="p-6 border-l-4 border-red-600 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our trained professionals ensure proper installation and maintenance of all systems.
              </p>
            </div>
            <div className="p-6 border-l-4 border-red-600 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock emergency support and maintenance services for your peace of mind.
              </p>
            </div>
            <div className="p-6 border-l-4 border-red-600 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Quality fire safety solutions at affordable prices with flexible payment options.
              </p>
            </div>
            <div className="p-6 border-l-4 border-red-600 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-gray-600">
                Fast delivery and installation services to ensure your safety is never compromised.
              </p>
            </div>
            <div className="p-6 border-l-4 border-red-600 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive AMC</h3>
              <p className="text-gray-600">
                Annual maintenance contracts to keep your fire safety systems in optimal condition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
