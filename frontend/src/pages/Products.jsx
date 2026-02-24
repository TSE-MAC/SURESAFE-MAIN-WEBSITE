import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { products } from '../data/mock';

const Products = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'extinguisher', name: 'Fire Extinguishers' },
    { id: 'detection', name: 'Detection Systems' },
    { id: 'suppression', name: 'Suppression Systems' }
  ];

  const getCategory = (productName) => {
    if (productName.includes('Extinguisher')) return 'extinguisher';
    if (productName.includes('Detector') || productName.includes('Alarm')) return 'detection';
    return 'suppression';
  };

  const filteredProducts = filter === 'all'
    ? products
    : products.filter(product => getCategory(product.name) === filter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1738782582520-d1be2a9d7bca"
            alt="Fire Safety Products"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Certified fire safety equipment for complete protection
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Capacities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.capacities.map((capacity) => (
                        <span
                          key={capacity}
                          className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {capacity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Our Products?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality and certification you can trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">IS Certified</h3>
              <p className="text-gray-600">All products meet Indian Standards</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Genuine Products</h3>
              <p className="text-gray-600">100% authentic from authorized dealers</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warranty Support</h3>
              <p className="text-gray-600">Extended warranty on all products</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Advice</h3>
              <p className="text-gray-600">Free consultation on product selection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
