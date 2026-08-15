import Navbar from '@/components/Navbar';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Real Estate Blog & Articles | Property Sure',
  description: 'Read expert articles on Home Loan tips, Real Estate Market updates, Investment advice, and first-time buyer checklists.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy-dark text-white py-16 md:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-gold-accent font-bold text-xs uppercase tracking-widest bg-navy-light px-3 py-1 rounded-full">
            INSIGHTS & GUIDES
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4">
            Property & Finance <span className="text-gold-accent">Blog</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-sm md:text-base">
            Expert articles, CIBIL score advice, real estate market reports, and legal documentation checklists.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <BlogSection />

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
