'use me';
'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a property?',
    answer: 'You can browse our featured listings or contact our relationship managers via Call or WhatsApp. We schedule a personalized site visit, verify property documents, and assist with booking token amount.'
  },
  {
    question: 'What documents are required for a Home Loan?',
    answer: 'Standard required documents include Aadhaar Card, PAN Card, last 6 months Bank Statements, last 3 months Salary Slips (or 2-3 years IT Returns for self-employed), Property legal documents, and passport photos.'
  },
  {
    question: 'How long does home loan approval take?',
    answer: 'With Property Sure pre-verified properties and direct tie-ups with leading banks like HDFC, SBI & ICICI, sanction letters are typically issued within 3 to 7 working days.'
  },
  {
    question: 'Can I apply for a home loan online?',
    answer: 'Yes! You can calculate your EMI using our online EMI calculator, submit your preliminary details online, and our doorstep banking partner will collect your documents digitally.'
  },
  {
    question: 'Which cities do you serve?',
    answer: 'Currently, we provide full end-to-end real estate and loan services across Delhi, Noida, Greater Noida, and Gurgaon (Delhi-NCR region).'
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-dark">
            Got Questions? <span className="text-gold-accent">We Have Answers</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Everything you need to know about property buying and home loan processing.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 transition"
            >
              <button 
                onClick={() => toggleFAQ(idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 bg-white hover:bg-gray-50 transition"
              >
                <span className="font-bold text-navy-dark text-base md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-gold-accent shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIdx === idx && (
                <div className="p-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
