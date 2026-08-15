import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Services | Property Sure - Real Estate & Loan Services',
  description: 'Explore Property Sure services including Property Purchase, Selling, Home Loans, LAP, and Documentation Support.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-navy-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-gold-accent font-bold text-xs uppercase tracking-widest bg-navy-light px-3 py-1 rounded-full">
            REAL ESTATE & FINANCIAL SOLUTIONS
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Our Premium <span className="text-gold-accent">Services</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            From discovering verified residential & commercial properties to securing high-value home loans at lowest interest rates.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <Services />

      {/* Contact Consultation */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
