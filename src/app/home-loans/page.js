import Navbar from '@/components/Navbar';
import HomeLoanCalculator from '@/components/HomeLoanCalculator';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Home Loans & EMI Calculator | Property Sure',
  description: 'Apply for Home Loans, Loan Against Property, and Balance Transfers with lowest ROI from SBI, HDFC, ICICI, Axis Bank and more.',
};

export default function HomeLoansPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-gold-accent font-bold text-xs uppercase tracking-widest bg-navy-light px-3 py-1 rounded-full">
            INSTANT LOAN ASSISTANCE
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Home Loans & <span className="text-gold-accent">Financial Support</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Get lowest interest rates, minimal paperwork, and instant doorstep approval with leading national banks.
          </p>
        </div>
      </section>

      {/* EMI Calculator & Banks */}
      <HomeLoanCalculator />

      {/* Contact Form */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
