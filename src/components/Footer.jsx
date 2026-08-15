'use me';
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, MessageCircle, Share2, Globe, Shield, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-gray-300 pt-16 pb-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-12 w-52 overflow-hidden bg-white/10 p-2 rounded-lg">
              <Image 
                src="/logo_finanace.jpeg" 
                alt="Property Sure Logo" 
                fill 
                className="object-contain object-left p-1"
              />
            </div>
            <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-sm">
              Property Sure offers 100% verified real estate listings, expert financial guidance, and multi-bank home loan assistance across Delhi NCR.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-navy-light text-gold-accent flex items-center justify-center hover:bg-gold-accent hover:text-navy-dark transition" title="Share Page">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-navy-light text-gold-accent flex items-center justify-center hover:bg-gold-accent hover:text-navy-dark transition" title="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-navy-light text-gold-accent flex items-center justify-center hover:bg-gold-accent hover:text-navy-dark transition" title="Verified Portal">
                <Shield className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gold-accent/40 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li><Link href="/" className="hover:text-gold-accent transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-gold-accent transition">About Us</Link></li>
              <li><Link href="/properties" className="hover:text-gold-accent transition">Featured Properties</Link></li>
              <li><Link href="/services" className="hover:text-gold-accent transition">Our Services</Link></li>
              <li><Link href="/sell" className="hover:text-gold-accent transition">Sell Property</Link></li>
              <li><Link href="/blog" className="hover:text-gold-accent transition">Blog Articles</Link></li>
            </ul>
          </div>

          {/* Col 3: Loan Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gold-accent/40 pb-2 inline-block">
              Loan Services
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm">
              <li><Link href="/home-loans" className="hover:text-gold-accent transition">New Home Loan</Link></li>
              <li><Link href="/home-loans" className="hover:text-gold-accent transition">Loan Against Property</Link></li>
              <li><Link href="/home-loans" className="hover:text-gold-accent transition">Balance Transfer</Link></li>
              <li><Link href="/home-loans" className="hover:text-gold-accent transition">Top-Up Loan</Link></li>
              <li><Link href="/home-loans" className="hover:text-gold-accent transition">EMI Calculator</Link></li>
              <li><Link href="/contact" className="hover:text-gold-accent transition">Bank Partners</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gold-accent/40 pb-2 inline-block">
              Contact Info
            </h4>
            <div className="space-y-3 text-xs md:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-accent shrink-0 mt-0.5" />
                <span className="text-gray-400">Delhi NCR (Delhi | Noida | Greater Noida | Gurgaon)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-accent shrink-0" />
                <a href="tel:+919368737795" className="hover:text-gold-accent font-semibold">+91 93687 37795</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-accent shrink-0" />
                <a href="mailto:info@propertysure.in" className="hover:text-gold-accent">info@propertysure.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>
            Copyright ©️ {new Date().getFullYear()} <span className="text-gold-accent font-semibold">Property Sure</span>. All Rights Reserved.
          </div>

          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold-accent transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold-accent transition">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-gold-accent transition">Contact</Link>
          </div>
        </div>

      </div>

      {/* Floating Sticky WhatsApp Button */}
      <a 
        href="https://wa.me/919368737795?text=Hello%20Property%20Sure" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-transform duration-300 hover:scale-110"
        title="Chat with Us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-xs font-bold pr-1">
          Chat on WhatsApp
        </span>
      </a>

      {/* Scroll To Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-40 bg-navy-light hover:bg-navy-blue border border-gray-700 text-gold-accent p-3 rounded-full shadow-xl transition"
        title="Scroll to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
