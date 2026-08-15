'use me';
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Mail, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [loansDropdown, setLoansDropdown] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Banner Bar */}
      <div className="bg-navy-dark text-gray-200 text-xs md:text-sm py-2 px-4 md:px-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-3.5 h-3.5 text-gold-accent shrink-0" />
            <span className="font-medium">Serving: Delhi | Noida | Greater Noida | Gurgaon</span>
          </div>

          <div className="flex items-center gap-6 text-xs md:text-sm">
            <a href="mailto:info@propertysure.in" className="flex items-center gap-1.5 hover:text-gold-accent transition">
              <Mail className="w-3.5 h-3.5 text-gold-accent" />
              <span>info@propertysure.in</span>
            </a>
            <a href="tel:+919368737795" className="flex items-center gap-1.5 hover:text-gold-accent transition font-semibold">
              <Phone className="w-3.5 h-3.5 text-gold-accent" />
              <span>+91 93687 37795</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <nav className="bg-white border-b border-gray-100 py-3 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 md:h-16 w-60 md:w-72 overflow-hidden py-1">
              <Image 
                src="/logo_finanace.jpeg" 
                alt="Property Sure Logo" 
                fill 
                className="object-contain object-left scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 font-medium text-gray-700 text-sm">
            <Link href="/" className="hover:text-gold-accent font-semibold transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-navy-blue transition">
              About Us
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
              <Link href="/services" className="flex items-center gap-1 hover:text-navy-blue transition py-2">
                Services <ChevronDown className="w-4 h-4" />
              </Link>
              {servicesDropdown && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-52 border border-gray-100 animate-fadeIn">
                  <Link href="/services" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-navy-blue">All Services</Link>
                  <Link href="/sell" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-navy-blue">Sell Property</Link>
                  <Link href="/properties" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-navy-blue">Buy Property</Link>
                </div>
              )}
            </div>

            {/* Loan Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setLoansDropdown(true)} onMouseLeave={() => setLoansDropdown(false)}>
              <Link href="/home-loans" className="flex items-center gap-1 hover:text-navy-blue transition py-2">
                Loan Services <ChevronDown className="w-4 h-4" />
              </Link>
              {loansDropdown && (
                <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-56 border border-gray-100 animate-fadeIn">
                  <Link href="/home-loans" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-navy-blue">Home Loans & EMI</Link>
                  <Link href="/home-loans#calculator" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-navy-blue">EMI Calculator</Link>
                </div>
              )}
            </div>

            <Link href="/properties" className="hover:text-navy-blue transition">Properties</Link>
            <Link href="/blog" className="hover:text-navy-blue transition">Blog</Link>
            <Link href="/contact" className="hover:text-navy-blue transition">Contact Us</Link>
          </div>

          {/* Quick Actions (Call Now & WhatsApp CTA) */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+919368737795" 
              className="flex items-center gap-2 bg-navy-blue hover:bg-navy-dark text-white px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-gold-accent" />
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/919368737795?text=Hello%20Property%20Sure,%20I%20want%20more%20information." 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium text-xs md:text-sm transition shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-navy-blue"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 flex flex-col gap-3 pb-4 text-sm font-medium">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/home-loans" onClick={() => setMobileMenuOpen(false)}>Loan Services & EMI</Link>
            <Link href="/properties" onClick={() => setMobileMenuOpen(false)}>Properties</Link>
            <Link href="/sell" onClick={() => setMobileMenuOpen(false)}>Sell Your Property</Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>

            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <a href="tel:+919368737795" className="flex justify-center items-center gap-2 bg-navy-blue text-white py-2.5 rounded-lg">
                <Phone className="w-4 h-4 text-gold-accent" />
                Call Now (+91 93687 37795)
              </a>
              <a 
                href="https://wa.me/919368737795?text=Hello%20Property%20Sure" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-emerald-600 text-white py-2.5 rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
