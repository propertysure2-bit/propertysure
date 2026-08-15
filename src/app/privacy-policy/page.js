import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Property Sure',
  description: 'Read the Privacy Policy for Property Sure. Learn how we handle and protect your personal and financial information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-navy-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-navy-light text-gold-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            Legal Documentation
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2">
            Privacy <span className="text-gold-accent">Policy</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto mt-3 text-xs md:text-sm">
            Last Updated: July 2026 • Property Sure Real Estate & Financial Services
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 text-gray-700 text-sm md:text-base leading-relaxed space-y-8">
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">1. Introduction</h2>
            <p>
              Welcome to <strong>Property Sure</strong> ("we", "our", or "us"). We respect your privacy and are committed to protecting the personal data and financial information you share with us when accessing our website and real estate or home loan advisory services across Delhi NCR.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">2. Information We Collect</h2>
            <p className="mb-2">We collect information to provide seamless home search and loan processing services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Identifiers:</strong> Name, mobile phone number, email address, and city of residence.</li>
              <li><strong>Property Details:</strong> Preferences for property buying or selling, budget range, and location interest.</li>
              <li><strong>Financial & Loan Data:</strong> Desired loan amount, tenure, employment status, and CIBIL eligibility indicators shared voluntarily for loan calculations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To connect you with senior relationship managers for property site visits and consultation.</li>
              <li>To evaluate home loan eligibility and share your documents securely with our partner national banks (such as SBI, HDFC, ICICI, Axis Bank) upon your explicit request.</li>
              <li>To send updates regarding property listings, interest rate drops, and deal alerts.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">4. Data Sharing & Security</h2>
            <p>
              We do not sell, rent, or trade your personal information to unauthorized third-party marketers. Your data is strictly shared only with verified banking partners and legal documentation consultants for fulfilling your home purchase or loan request.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">5. WhatsApp & Communication Consent</h2>
            <p>
              By submitting an enquiry form on Property Sure, you consent to receive calls, SMS, and WhatsApp messages from our official representatives regarding your property or loan query.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">6. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to update your data preferences, please email us at <a href="mailto:info@propertysure.in" className="text-navy-blue font-bold hover:underline">info@propertysure.in</a> or call <a href="tel:+919368737795" className="text-navy-blue font-bold hover:underline">+91 93687 37795</a>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
