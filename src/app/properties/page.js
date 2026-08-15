import Navbar from '@/components/Navbar';
import FeaturedProperties from '@/components/FeaturedProperties';
import SmartSearch from '@/components/SmartSearch';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Explore Properties | Property Sure - Verified Flats, Villas & Plots',
  description: 'Browse verified 1 BHK, 2 BHK, 3 BHK apartments, luxury villas, commercial spaces, and residential plots in Noida, Delhi, Gurgaon & Greater Noida.',
};

export default function PropertiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-gold-accent font-bold text-xs uppercase tracking-widest bg-navy-light px-3 py-1 rounded-full">
            VERIFIED LISTINGS
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Explore Premium <span className="text-gold-accent">Properties</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Handpicked 100% verified flats, luxury villas, commercial spaces, and residential plots across Delhi NCR.
          </p>
        </div>
      </section>

      {/* Smart Search */}
      <SmartSearch />

      {/* Featured Properties Section */}
      <FeaturedProperties />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
