import Navbar from '@/components/Navbar';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShieldCheck, Award, Target, Users, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'About Us | Property Sure - Trusted Real Estate & Financial Partner',
  description: 'Learn about Property Sure, your premier partner in real estate and home loans across Delhi NCR.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-navy-dark text-white py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-gold-accent font-bold text-xs uppercase tracking-widest bg-navy-light px-3 py-1 rounded-full">
            ABOUT PROPERTY SURE
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Building Trust, <span className="text-gold-accent">Securing Futures</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
            Property Sure is Delhi NCR's leading integrated real estate and home finance advisory firm. We simplify property transactions with total legal transparency and multi-bank loan assistance.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-navy-dark">
              Our Vision & <span className="text-gold-accent">Core Mission</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We empower homebuyers and investors by providing 100% verified properties alongside guaranteed home loan support from top national banks.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy-dark">100% Verified Property Titles</h4>
                  <p className="text-xs text-gray-500">Every property passes rigorous legal and title verification before listing.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy-dark">Direct Doorstep Banking Assistance</h4>
                  <p className="text-xs text-gray-500">Tie-ups with SBI, HDFC, ICICI, Axis and 15+ banks for instant sanction letters.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-navy-dark">End-to-End Handholding</h4>
                  <p className="text-xs text-gray-500">Dedicated relationship managers guide you from property search to loan disbursal & registry.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-navy-dark text-white p-6 rounded-2xl text-center space-y-2 border border-gray-800">
              <Award className="w-10 h-10 text-gold-accent mx-auto" />
              <div className="text-3xl font-extrabold text-gold-accent">10+</div>
              <div className="text-xs text-gray-300">Years Industry Experience</div>
            </div>
            
            <div className="bg-amber-500 text-navy-dark p-6 rounded-2xl text-center space-y-2">
              <Users className="w-10 h-10 text-navy-dark mx-auto" />
              <div className="text-3xl font-extrabold">1000+</div>
              <div className="text-xs font-semibold">Happy Home Buyers</div>
            </div>

            <div className="bg-gray-100 text-navy-dark p-6 rounded-2xl text-center space-y-2 border border-gray-200 col-span-2">
              <ShieldCheck className="w-10 h-10 text-navy-blue mx-auto" />
              <div className="text-3xl font-extrabold text-navy-blue">₹500+ Crore</div>
              <div className="text-xs text-gray-600 font-medium">Home Loans Processed across Delhi NCR</div>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Customer Reviews */}
      <Reviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
