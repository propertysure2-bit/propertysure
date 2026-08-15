import Navbar from '@/components/Navbar';
import SellPropertyForm from '@/components/SellPropertyForm';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sell Your Property | Property Sure - Best Value Guaranteed',
  description: 'Sell your residential, commercial property or plot fast with Property Sure expert marketing and direct verified buyer network.',
};

export default function SellPropertyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-gold-accent font-bold text-xs uppercase tracking-widest bg-navy-light px-3 py-1 rounded-full">
            MAXIMUM VALUE GUARANTEED
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Sell Your <span className="text-gold-accent">Property</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            List your flat, villa, commercial office or plot. We connect you with genuine pre-approved buyers instantly.
          </p>
        </div>
      </section>

      {/* Sell Property Form */}
      <SellPropertyForm />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Footer */}
      <Footer />
    </div>
  );
}
