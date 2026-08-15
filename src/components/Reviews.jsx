'use me';
'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Home Loan Customer',
    location: 'Noida',
    stars: 5,
    quote: 'Property Sure made my home-buying experience smooth and stress-free. From selecting the apartment to sanctioning my SBI loan in 5 days, their team handled everything seamlessly!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 2,
    name: 'Neha Verma',
    role: 'Property Buyer',
    location: 'Gurgaon',
    stars: 5,
    quote: 'Professional team, transparent process and the best property deals. Verified listings saved me from false claims by market brokers.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 3,
    name: 'Amit Gupta',
    role: 'LAP Customer',
    location: 'Delhi',
    stars: 5,
    quote: 'I got a loan against property at the best rate. Quick approval and excellent support from my dedicated relationship manager.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  const prevReview = () => {
    setActive((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActive((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-gold-accent font-bold text-xs uppercase tracking-widest mb-2">
            WHAT OUR CLIENTS SAY
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Trusted by <span className="text-gold-accent">Thousands</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Read real stories from buyers and investors who secured their dream property with Property Sure.
          </p>
        </div>

        {/* Reviews Cards Grid matching layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((item, idx) => (
            <div 
              key={item.id}
              className={`bg-white rounded-2xl p-8 border ${idx === active ? 'border-gold-accent shadow-xl scale-105' : 'border-gray-100 shadow-sm'} transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-gold-accent/20 mb-2" />

                <p className="text-gray-700 text-sm italic leading-relaxed mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-11 h-11 rounded-full object-cover border-2 border-gold-accent" 
                />
                <div>
                  <h4 className="text-sm font-bold text-navy-dark">{item.name}</h4>
                  <span className="text-xs text-gray-500">{item.role} • {item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
