import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contact Us | Property Sure - Delhi NCR Office & Helpline',
  description: 'Connect with Property Sure. Call +91 93687 37795 or email info@propertysure.in for property and home loan consultation.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-gold-accent font-bold text-xs uppercase tracking-widest bg-navy-light px-3 py-1 rounded-full">
            WE ARE HERE TO HELP
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Contact <span className="text-gold-accent">Property Sure</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Reach out via Call, WhatsApp, or submission form. Our expert relationship managers are ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section Component */}
      <ContactSection />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
