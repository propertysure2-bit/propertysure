'use me';
'use client';

import { Building2, Tag, Landmark, FileText, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

const servicesList = [
  {
    icon: Building2,
    title: 'Buy Property',
    subtitle: 'Residential, Commercial & Plots',
    description: 'Find your dream home or commercial investment from curated, verified real estate listings with full legal support.'
  },
  {
    icon: Tag,
    title: 'Sell Property',
    subtitle: 'Professional Marketing & Buyer Assistance',
    description: 'Get maximum market value for your property with our premium lead network and dedicated buyer matchmaking.'
  },
  {
    icon: Landmark,
    title: 'Home Loans',
    subtitle: 'Support from Multiple Leading Banks',
    description: 'Lowest ROI, minimal processing fee, doorstep documentation, and rapid approval with top national banks.'
  },
  {
    icon: ShieldCheck,
    title: 'Loan Against Property',
    subtitle: 'Quick Processing with Expert Guidance',
    description: 'Unlock maximum equity value from your existing commercial or residential property for personal or business needs.'
  },
  {
    icon: TrendingUp,
    title: 'Investment Advisory',
    subtitle: 'Long-term Property Investment Planning',
    description: 'High return investment strategies tailored to your wealth growth targets across prime developing corridors.'
  },
  {
    icon: FileText,
    title: 'Documentation Support',
    subtitle: 'End-to-End Paperwork Assistance',
    description: 'Complete registry, title check, deed draft, mutation support, and legal title verification under expert eyes.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-gold-accent font-bold text-xs uppercase tracking-widest mb-2">
            OUR SERVICES
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            We Offer <span className="text-gold-accent">Best Services</span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Comprehensive end-to-end real estate and financial solutions tailored to your unique requirements.
          </p>
        </div>

        {/* 6 Services Grid matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-gold-accent flex items-center justify-center mb-6 group-hover:bg-navy-blue group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-navy-dark mb-1 group-hover:text-gold-accent transition">
                    {service.title}
                  </h3>

                  <div className="text-xs font-semibold text-amber-700 bg-amber-50 inline-block px-2.5 py-1 rounded-md mb-4">
                    {service.subtitle}
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-blue hover:text-gold-accent transition group-hover:translate-x-1"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
