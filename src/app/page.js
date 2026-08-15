import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SmartSearch from '@/components/SmartSearch';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import HomeLoanCalculator from '@/components/HomeLoanCalculator';
import SellPropertyForm from '@/components/SellPropertyForm';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans selection:bg-gold-accent selection:text-navy-dark">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Smart Property Search */}
        <SmartSearch />

        {/* 4. Featured Properties */}
        <FeaturedProperties />

        {/* 5. Why Property Sure */}
        <WhyChooseUs />

        {/* 6. Our Services */}
        <Services />

        {/* 7. Home Loan Section & Calculator */}
        <HomeLoanCalculator />

        {/* 8. Sell Your Property */}
        <SellPropertyForm />

        {/* 9. Customer Reviews */}
        <Reviews />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Blog */}
        <BlogSection />

        {/* 12. Contact */}
        <ContactSection />
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />
    </div>
  );
}
