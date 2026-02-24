import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { contactInfo } from '../data/mock';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Mock form submission
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      content: contactInfo.phone,
      link: `tel:${contactInfo.phone}`
    },
    {
      icon: Mail,
      title: 'Email',
      content: contactInfo.email,
      link: `mailto:${contactInfo.email}`
    },
    {
      icon: MapPin,
      title: 'Location',
      content: contactInfo.address,
      link: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1633092228879-d6a88c22e7bc"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our fire safety experts for consultation and quotes
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600">{method.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your fire safety requirements"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Contact Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Free Consultation</h4>
                      <p className="text-gray-600">Get expert advice on fire safety requirements for your property</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                      <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Site Visit</h4>
                      <p className="text-gray-600">Free site inspection for accurate quotation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">24/7 Emergency</h4>
                      <p className="text-gray-600">Emergency support available round the clock</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-red-600 rounded-xl text-white">
                  <h4 className="font-semibold mb-2">Need Immediate Assistance?</h4>
                  <p className="text-red-100 mb-4">Call us directly for urgent fire safety needs</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
