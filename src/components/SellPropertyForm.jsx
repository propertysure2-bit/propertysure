'use me';
'use client';

import { useState } from 'react';
import { Upload, CheckCircle, Send, ShieldAlert } from 'lucide-react';

export default function SellPropertyForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    city: 'Noida',
    propertyType: 'Apartment',
    propertyValue: '',
  });

  const [images, setImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files).map((file) => file.name);
      setImages(fileList);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/sell-property', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, images }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong while submitting.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        city: 'Noida',
        propertyType: 'Apartment',
        propertyValue: '',
      });
      setImages([]);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setErrorMsg(err.message || 'Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="sell" className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-gold-accent font-bold text-xs uppercase tracking-widest mb-2">
            SELL YOUR PROPERTY
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            List Property with <span className="text-gold-accent">Property Sure</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Get verified buyers, high market visibility, and hassle-free transaction support.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-200 shadow-xl relative">
          
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
              <h3 className="text-2xl font-bold text-navy-dark">Property Submitted Successfully!</h3>
              <p className="text-gray-600 max-w-md mx-auto text-sm">
                Our senior relationship manager will call you within 2 business hours for verification and photos inspection.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Mobile Number *</label>
                  <input 
                    type="tel" 
                    name="mobile" 
                    required 
                    placeholder="Enter 10-digit mobile number" 
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your email address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">City *</label>
                  <select 
                    name="city" 
                    value={formData.city} 
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                  >
                    <option value="Noida">Noida</option>
                    <option value="Greater Noida">Greater Noida</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Other">Other NCR</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Property Type *</label>
                  <select 
                    name="propertyType" 
                    value={formData.propertyType} 
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                  >
                    <option value="Apartment">Residential Flat / Apartment</option>
                    <option value="Villa">Villa / Independent House</option>
                    <option value="Plot">Plot / Land</option>
                    <option value="Commercial">Commercial Office / Shop</option>
                  </select>
                </div>

                {/* Property Value */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Expected Value (₹ Lakhs / Cr)</label>
                  <input 
                    type="text" 
                    name="propertyValue" 
                    placeholder="e.g. ₹ 75 Lakhs" 
                    value={formData.propertyValue}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Upload Images</label>
                <div className="border-2 border-dashed border-gray-300 hover:border-navy-blue rounded-xl p-6 text-center bg-white cursor-pointer transition">
                  <input 
                    type="file" 
                    multiple 
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden" 
                    id="property-image-input"
                  />
                  <label htmlFor="property-image-input" className="cursor-pointer flex flex-col items-center gap-2">
                    <Upload className="w-8 h-8 text-gold-accent" />
                    <span className="text-sm font-semibold text-gray-700">Click to upload property photos</span>
                    <span className="text-xs text-gray-400">PNG, JPG up to 10MB each</span>
                  </label>
                </div>

                {images.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {images.map((img, idx) => (
                      <span key={idx} className="bg-amber-100 text-amber-900 text-xs px-2.5 py-1 rounded-md font-medium">
                        📷 {img}
                      </span>
                    ))}
                  </div>
                )}
              </div>

                {errorMsg && (
                  <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg border border-red-200 mt-4">
                    {errorMsg}
                  </div>
                )}

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-navy-blue hover:bg-navy-dark text-white font-bold py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-base disabled:opacity-60"
                >
                  {loading ? (
                    <span>Submitting Property Details...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-gold-accent" />
                      <span>Submit Property For Sale</span>
                    </>
                  )}
                </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
