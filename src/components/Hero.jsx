'use me';
'use client';

import { ShieldCheck, Clock, Percent, Headphones, Building, Users, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-navy-dark text-white overflow-hidden py-16 md:py-24 border-b border-gray-800">
      {/* Background Image overlay with dark tint gradient */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/95 to-navy-dark/70 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-navy-light/80 border border-gold-accent/30 text-gold-accent px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold tracking-wide shadow-sm">
              <span>Buy | Sell | Loans | Solutions – All Under One Roof</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Your Trusted Partner in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-gold-accent">
                PROPERTY & FINANCE
              </span>
            </h1>

            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed">
              Buy, sell, or invest in property with confidence. Property Sure offers verified listings, expert guidance, and seamless home loan assistance—all under one roof.
            </p>

            {/* Quick feature highlights matching layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-2 border-y border-gray-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-gold-accent shrink-0" />
                <span className="text-xs font-medium text-gray-200">Trusted Advisors</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold-accent shrink-0" />
                <span className="text-xs font-medium text-gray-200">Quick Loan Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-gold-accent shrink-0" />
                <span className="text-xs font-medium text-gray-200">Lowest Interest Rates</span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-gold-accent shrink-0" />
                <span className="text-xs font-medium text-gray-200">End-to-End Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#properties" 
                className="bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-gold-accent/20 transition-all flex items-center gap-2 group text-sm md:text-base"
              >
                <span>🟢 Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#homeloan" 
                className="bg-navy-light hover:bg-navy-light/80 text-white font-semibold px-7 py-3.5 rounded-lg border border-gray-700 hover:border-gold-accent/50 transition-all flex items-center gap-2 text-sm md:text-base"
              >
                <span>🏦 Apply for Home Loan</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Key Stats Card matching design image */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-navy-card/90 backdrop-blur-md border border-gray-700/60 p-6 md:p-8 rounded-2xl shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-gold-accent text-navy-dark text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                ISO Certified
              </div>

              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="p-4 rounded-xl bg-navy-dark/60 border border-gray-800">
                  <div className="text-3xl md:text-4xl font-extrabold text-gold-accent mb-1">10+</div>
                  <div className="text-xs md:text-sm text-gray-300 font-medium">Years of Experience</div>
                </div>
                
                <div className="p-4 rounded-xl bg-navy-dark/60 border border-gray-800">
                  <div className="text-3xl md:text-4xl font-extrabold text-gold-accent mb-1">1000+</div>
                  <div className="text-xs md:text-sm text-gray-300 font-medium">Happy Clients</div>
                </div>

                <div className="p-4 rounded-xl bg-navy-dark/60 border border-gray-800">
                  <div className="text-3xl md:text-4xl font-extrabold text-gold-accent mb-1">₹500+ Cr</div>
                  <div className="text-xs md:text-sm text-gray-300 font-medium">Loans Processed</div>
                </div>

                <div className="p-4 rounded-xl bg-navy-dark/60 border border-gray-800">
                  <div className="text-3xl md:text-4xl font-extrabold text-gold-accent mb-1">4</div>
                  <div className="text-xs md:text-sm text-gray-300 font-medium">Cities Served</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 text-center">
                <p className="text-xs text-gray-400">
                  *Get doorstep financial consultation and instant eligibility report within 24 hours.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
