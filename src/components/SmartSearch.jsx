'use me';
'use client';

import { useState } from 'react';
import { Search, MapPin, Home, DollarSign, BedDouble } from 'lucide-react';

export default function SmartSearch({ onFilterChange }) {
  const [city, setCity] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onFilterChange) {
      onFilterChange({ city, propertyType, budget, bedrooms });
    }
  };

  return (
    <section className="relative z-20 max-w-6xl mx-auto px-4 -mt-10 md:-mt-12">
      <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-100">
        <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center">
          
          {/* City Selector */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">City</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-gold-accent absolute left-3 top-3.5" />
              <select 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-navy-blue focus:outline-none"
              >
                <option value="">All Cities</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Greater Noida">Greater Noida</option>
                <option value="Gurgaon">Gurgaon</option>
              </select>
            </div>
          </div>

          {/* Property Type */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Property Type</label>
            <div className="relative">
              <Home className="w-4 h-4 text-gold-accent absolute left-3 top-3.5" />
              <select 
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-navy-blue focus:outline-none"
              >
                <option value="">All Types</option>
                <option value="Apartment">Apartment / Flat</option>
                <option value="Villa">Villa / Independent House</option>
                <option value="Plot">Plot / Land</option>
                <option value="Commercial">Commercial Office / Shop</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Budget</label>
            <div className="relative">
              <DollarSign className="w-4 h-4 text-gold-accent absolute left-3 top-3.5" />
              <select 
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-navy-blue focus:outline-none"
              >
                <option value="">Any Budget</option>
                <option value="under50">Under ₹50 Lakhs</option>
                <option value="50to100">₹50 Lakhs - ₹1 Crore</option>
                <option value="1to2cr">₹1 Crore - ₹2 Crore</option>
                <option value="above2cr">Above ₹2 Crore</option>
              </select>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="relative">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Bedrooms</label>
            <div className="relative">
              <BedDouble className="w-4 h-4 text-gold-accent absolute left-3 top-3.5" />
              <select 
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-navy-blue focus:outline-none"
              >
                <option value="">Any BHK</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4+">4+ BHK</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="pt-2 sm:pt-5">
            <button 
              type="submit"
              className="w-full bg-navy-blue hover:bg-navy-dark text-white font-bold py-2.5 px-4 rounded-lg shadow-md transition flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4 text-gold-accent" />
              <span>Search Properties</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
