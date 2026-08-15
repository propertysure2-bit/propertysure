'use me';
'use client';

import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Top 7 Home Loan Tips to Get Lowest Interest Rate in 2026',
    category: 'Home Loan Tips',
    date: 'Jul 24, 2026',
    author: 'Financial Advisor Team',
    summary: 'Discover how maintaining a 750+ CIBIL score and choosing correct loan tenures can save you lakhs in interest.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Real Estate Market Updates: Why Noida Expressway is Booming',
    category: 'Market Updates',
    date: 'Jul 18, 2026',
    author: 'Property Analyst',
    summary: 'Analyzing infrastructure growth, upcoming metro lines, and commercial hubs driving 15% annual appreciation.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Property Investment Guide: Commercial vs Residential Plots',
    category: 'Investment Guide',
    date: 'Jul 10, 2026',
    author: 'Investment Desk',
    summary: 'Detailed comparison of rental yields, tax benefits, liquidity, and long-term capital gains.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'First-Time Homebuyer Checklist: Legal & Financial Verification',
    category: 'Checklist',
    date: 'Jun 28, 2026',
    author: 'Legal Specialist',
    summary: 'Crucial checklist items including RERA registration, occupancy certificates, and encumbrance verification.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80'
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <div className="text-gold-accent font-bold text-xs uppercase tracking-widest mb-2">
              REAL ESTATE INSIGHTS
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
              Latest <span className="text-gold-accent">Articles & Guides</span>
            </h2>
          </div>
          <a href="#contact" className="mt-4 md:mt-0 text-navy-blue font-bold hover:text-gold-accent flex items-center gap-1.5 text-sm">
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-navy-blue text-gold-accent text-xs font-bold px-2.5 py-1 rounded-md">
                  {post.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-gold-accent" /> {post.date}</span>
                  </div>

                  <h3 className="font-bold text-navy-dark text-base group-hover:text-gold-accent transition line-clamp-2 mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed mb-4">
                    {post.summary}
                  </p>
                </div>

                <a href="#contact" className="inline-flex items-center gap-1 text-xs font-bold text-navy-blue group-hover:text-gold-accent transition">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
