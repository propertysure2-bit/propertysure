'use me';
'use client';

import { Home, Landmark, Zap, Handshake, TrendingUp, UserCheck } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Verified Properties',
    description: '100% physically verified legal titles, clear documentation, RERA compliance, and risk-free deals.'
  },
  {
    icon: Landmark,
    title: 'Home Loan Experts',
    description: 'Direct tie-ups with leading national banks ensuring lowest interest rates and highest loan eligibility.'
  },
  {
    icon: Zap,
    title: 'Fast Documentation',
    description: 'Hassle-free, quick processing with minimal paperwork and automated approval tracking.'
  },
  {
    icon: Handshake,
    title: 'Transparent Process',
    description: 'Zero hidden charges, clear brokerage policies, and honest guidance from start to finish.'
  },
  {
    icon: TrendingUp,
    title: 'Investment Advice',
    description: 'High-growth locality identification with maximum ROI and capital appreciation strategy.'
  },
  {
    icon: UserCheck,
    title: 'Dedicated Manager',
    description: 'Personal relationship manager assigned to guide you through site visits, negotiation, and loan disbursal.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-gold-accent font-bold text-xs uppercase tracking-widest mb-2">
            WHY CHOOSE PROPERTY SURE
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Committed to Your <span className="text-gold-accent">Trust & Satisfaction</span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            We bridge the gap between dream properties and seamless financial solutions with total transparency.
          </p>
        </div>

        {/* 6 Professional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gold-accent/40 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-blue text-gold-accent flex items-center justify-center mb-6 group-hover:bg-gold-accent group-hover:text-navy-dark transition-colors shadow-md">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark mb-2 group-hover:text-gold-accent transition">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
