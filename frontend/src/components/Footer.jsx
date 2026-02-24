import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { contactInfo } from '../data/mock';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const productList = [
    'ABC Fire Extinguisher',
    'CO₂ Fire Extinguisher',
    'Fire Hose Reel',
    'Fire Alarm System',
    'Smoke Detector',
    'Fire Hydrant System'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-red-600 p-2 rounded-lg">
                <Flame className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">SureSafe</span>
                <p className="text-sm text-gray-400">Fire Safety Solutions</p>
              </div>
            </Link>
            <p className="text-gray-400 mb-4">
              Protecting Lives & Property with Trusted Fire Safety Equipment. 
              Your safety is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2">
              {productList.map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-1" />
                <span className="text-gray-400">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 SureSafe Fire Safety Solutions. All rights reserved. | 
            <span className="ml-1">Designed with safety in mind.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
