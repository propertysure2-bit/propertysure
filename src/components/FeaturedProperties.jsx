'use me';
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Maximize, BedDouble, ArrowUpRight, Phone, CheckCircle } from 'lucide-react';

const mockProperties = [
  {
    id: 1,
    title: 'Luxury 3 BHK Residence',
    price: '₹ 1.25 Cr',
    location: 'Sector 150, Noida',
    city: 'Noida',
    area: '1850 sq.ft',
    bedrooms: '3 BHK',
    propertyType: 'Apartment',
    description: 'Modern luxury apartment with high-end amenities, club house, and rapid loan pre-approval.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    tag: 'Verified'
  },
  {
    id: 2,
    title: 'Ultra Premium Villa',
    price: '₹ 2.85 Cr',
    location: 'Golf Course Road, Gurgaon',
    city: 'Gurgaon',
    area: '3400 sq.ft',
    bedrooms: '4 BHK',
    propertyType: 'Villa',
    description: 'Exclusive independent villa with private garden, smart automation, and prime connectivity.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
    tag: 'Hot Deal'
  },
  {
    id: 3,
    title: 'Modern Highrise Apartment',
    price: '₹ 85 Lakhs',
    location: 'Tech Zone 4, Greater Noida',
    city: 'Greater Noida',
    area: '1450 sq.ft',
    bedrooms: '2 BHK',
    propertyType: 'Apartment',
    description: 'Ready to move flat close to metro station and top international schools.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    tag: 'Verified'
  },
  {
    id: 4,
    title: 'Commercial Retail Shop / Office',
    price: '₹ 1.95 Cr',
    location: 'Connaught Place, Delhi',
    city: 'Delhi',
    area: '1200 sq.ft',
    bedrooms: 'N/A',
    propertyType: 'Commercial',
    description: 'High footfall retail commercial space ideal for corporate office or high-yield investment.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tag: 'Investment Pick'
  },
  {
    id: 5,
    title: 'Spacious 4 BHK Duplex',
    price: '₹ 2.10 Cr',
    location: 'Dwarka Expressway, Gurgaon',
    city: 'Gurgaon',
    area: '2650 sq.ft',
    bedrooms: '4 BHK',
    propertyType: 'Apartment',
    description: 'Opulent duplex with panoramic skyline views, Olympic size pool and 24/7 security.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tag: 'Verified'
  },
  {
    id: 6,
    title: 'Residential Land / Plot',
    price: '₹ 65 Lakhs',
    location: 'Yamuna Expressway, Greater Noida',
    city: 'Greater Noida',
    area: '200 Sq. Yards',
    bedrooms: 'N/A',
    propertyType: 'Plot',
    description: 'Gated community plot with wide roads, underground electricity, and 100% clear title documentation.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    tag: 'Clear Title'
  }
];

export default function FeaturedProperties() {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <section id="properties" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
            Handpicked Real Estate
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Featured <span className="text-gold-accent">Properties</span>
          </h2>
          <p className="text-gray-600 mt-3 text-sm md:text-base">
            Explore 100% verified residential and commercial properties with complete home loan assistance.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProperties.map((prop) => (
            <div 
              key={prop.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* Property Image Container */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <Image 
                  src={prop.image} 
                  alt={prop.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy-blue text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  {prop.tag}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-navy-dark font-extrabold text-base px-3 py-1 rounded-lg shadow">
                  {prop.price}
                </div>
              </div>

              {/* Property Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-gold-accent text-xs font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{prop.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-navy-dark group-hover:text-gold-accent transition">
                    {prop.title}
                  </h3>

                  <p className="text-gray-500 text-xs md:text-sm mt-2 line-clamp-2 leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-navy-blue" />
                    <span>{prop.area}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-navy-blue" />
                    <span>{prop.bedrooms}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="mt-5 flex gap-2">
                  <button 
                    onClick={() => setSelectedProperty(prop)}
                    className="w-full bg-navy-blue hover:bg-navy-dark text-white font-semibold py-2.5 rounded-lg text-sm transition flex items-center justify-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-4 h-4 text-gold-accent" />
                  </button>
                  <a 
                    href={`https://wa.me/919368737795?text=I%20am%20interested%20in%20property%20${encodeURIComponent(prop.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 p-2.5 rounded-lg border border-emerald-200 transition"
                    title="Enquire on WhatsApp"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative animate-scaleUp">
            <button 
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>

            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
              <Image src={selectedProperty.image} alt={selectedProperty.title} fill className="object-cover" />
            </div>

            <span className="text-xs font-bold text-gold-accent uppercase tracking-wider">{selectedProperty.propertyType} • {selectedProperty.city}</span>
            <h3 className="text-2xl font-bold text-navy-dark mt-1">{selectedProperty.title}</h3>
            <p className="text-2xl font-extrabold text-amber-600 mt-1">{selectedProperty.price}</p>
            
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">{selectedProperty.description}</p>

            <div className="my-4 p-3 bg-blue-50 rounded-lg text-xs text-navy-blue flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Instant Home Loan Approval assistance from 15+ Banks available for this unit.</span>
            </div>

            <div className="flex gap-3 mt-6">
              <a 
                href={`https://wa.me/919368737795?text=I%20want%20to%20book%20a%20site%20visit%20for%20${encodeURIComponent(selectedProperty.title)}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg text-center text-sm shadow hover:bg-emerald-700"
              >
                Book Site Visit
              </a>
              <a 
                href="tel:+919368737795"
                className="w-full bg-navy-blue text-white font-bold py-3 rounded-lg text-center text-sm shadow hover:bg-navy-dark"
              >
                Call Expert
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
