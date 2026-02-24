import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-red-600 to-red-700 p-2.5 rounded-lg shadow-md">
              <Flame className="h-7 w-7 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold text-gray-900">SureSafe</span>
              <p className="text-xs text-gray-600 hidden sm:block">Fire Safety Solutions</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-red-600 border-b-2 border-red-600 pb-1'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-red-600'
                      : 'text-gray-700 hover:text-red-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold inline-block text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
