import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Property Sure',
  description: 'Review the Terms and Conditions for using Property Sure real estate and home loan advisory services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-navy-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-navy-light text-gold-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-4 h-4" />
            Terms of Agreement
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-2">
            Terms & <span className="text-gold-accent">Conditions</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto mt-3 text-xs md:text-sm">
            Last Updated: July 2026 • Property Sure Real Estate & Financial Advisory
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <main className="flex-grow py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-gray-200 text-gray-700 text-sm md:text-base leading-relaxed space-y-8">
          
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing and using the website <strong>Property Sure</strong>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our portal.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">2. Real Estate Advisory Services</h2>
            <p>
              Property Sure acts as an integrated real estate marketing, buyer consultation, and home loan advisory facilitator across Delhi NCR (Delhi, Noida, Greater Noida, Gurgaon).
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>All property listings, layouts, pricing, and availability are subject to physical verification and confirmation with respective builders/property owners.</li>
              <li>Calculations provided by the Home Loan EMI Calculator are estimations for guidance purposes only and do not constitute a binding financial sanction letter.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">3. Home Loan Approval & Bank Terms</h2>
            <p>
              Home loan sanctions, interest rates, tenure, and final approval eligibility are determined exclusively by the respective lending partner banks (e.g. SBI, HDFC, ICICI, Axis Bank) based on their internal credit policies and applicant CIBIL evaluation.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">4. Property Seller Listings</h2>
            <p>
              Property owners or agents submitting listings via the "Sell Property" portal warrant that all details provided are accurate and that they hold legal rights to offer the property for sale.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">5. Intellectual Property Rights</h2>
            <p>
              All branding, text content, visual design elements, logo assets, and code on this website belong to Property Sure and are protected under copyright laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl md:text-2xl font-bold text-navy-dark mb-3">6. Contact Information</h2>
            <p>
              For legal enquiries or clarification regarding these terms, please contact us at <a href="mailto:info@propertysure.in" className="text-navy-blue font-bold hover:underline">info@propertysure.in</a> or call <a href="tel:+919368737795" className="text-navy-blue font-bold hover:underline">+91 93687 37795</a>.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
