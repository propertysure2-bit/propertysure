'use me';
'use client';

import { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Noida',
    service: 'Home Loan',
    loanAmount: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Something went wrong while submitting.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: 'Noida',
        service: 'Home Loan',
        loanAmount: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setErrorMsg(err.message || 'Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-navy-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Connect Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-gold-accent uppercase tracking-widest bg-navy-light px-3 py-1 rounded-full">
                LET'S CONNECT
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
                Get a Free <span className="text-gold-accent">Consultation</span>
              </h2>
              <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed">
                Fill out the form and our property & home loan expert will contact you shortly. Office visits by prior appointment only.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              
              <a 
                href="tel:+919368737795" 
                className="flex items-center gap-4 bg-navy-card p-4 rounded-xl border border-gray-800 hover:border-gold-accent transition"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-accent text-navy-dark flex items-center justify-center font-bold">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-400">Phone Support</span>
                  <div className="text-lg font-bold text-white">+91 93687 37795</div>
                </div>
              </a>

              <a 
                href="mailto:info@propertysure.in" 
                className="flex items-center gap-4 bg-navy-card p-4 rounded-xl border border-gray-800 hover:border-gold-accent transition"
              >
                <div className="w-12 h-12 rounded-lg bg-navy-light text-gold-accent flex items-center justify-center font-bold">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-400">Email Address</span>
                  <div className="text-base font-bold text-white">info@propertysure.in</div>
                </div>
              </a>

              <a 
                href="https://wa.me/919368737795?text=Hi,%20I%20want%20a%20free%20consultation" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-emerald-950/60 p-4 rounded-xl border border-emerald-800/80 hover:bg-emerald-900/60 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400">Instant WhatsApp</span>
                  <div className="text-base font-bold text-white">Chat on WhatsApp (+91 93687 37795)</div>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Contact Form matching reference design form */}
          <div className="lg:col-span-7 bg-white text-gray-800 p-6 md:p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-navy-dark mb-1">Get a Free Consultation</h3>
            <p className="text-gray-500 text-xs md:text-sm mb-6">Fill out the form and our expert will contact you shortly.</p>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto" />
                <h4 className="text-2xl font-bold text-navy-dark">Enquiry Sent Successfully!</h4>
                <p className="text-gray-600 text-sm">Thank you for reaching out. We will call you within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="Enter your mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email (optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none" 
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
                    <select 
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                    >
                      <option value="Delhi">Delhi</option>
                      <option value="Noida">Noida</option>
                      <option value="Greater Noida">Greater Noida</option>
                      <option value="Gurgaon">Gurgaon</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">I'm Interested In</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                    >
                      <option value="Home Loan">Home Loan</option>
                      <option value="Property Purchase">Property Purchase</option>
                      <option value="Sell Property">Sell Property</option>
                      <option value="Loan Against Property">Loan Against Property</option>
                      <option value="Balance Transfer">Balance Transfer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Required Loan Amount (₹)</label>
                    <input 
                      type="text" 
                      placeholder="Enter amount (optional)"
                      value={formData.loanAmount}
                      onChange={(e) => setFormData({...formData, loanAmount: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message (Optional)</label>
                  <textarea 
                    rows={3} 
                    placeholder="Tell us your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2 text-sm focus:ring-2 focus:ring-navy-blue focus:outline-none"
                  />
                </div>

                {errorMsg && (
                  <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gold-accent hover:bg-gold-hover text-navy-dark font-extrabold py-3.5 rounded-lg shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
