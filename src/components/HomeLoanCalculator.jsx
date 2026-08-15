'use me';
'use client';

import { useState } from 'react';
import { Calculator, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

const bankLogos = [
  { name: 'HDFC Bank', roi: '8.35% onwards', color: 'border-blue-600' },
  { name: 'State Bank of India (SBI)', roi: '8.40% onwards', color: 'border-sky-600' },
  { name: 'ICICI Bank', roi: '8.40% onwards', color: 'border-orange-600' },
  { name: 'Axis Bank', roi: '8.50% onwards', color: 'border-red-700' },
  { name: 'Kotak Mahindra Bank', roi: '8.50% onwards', color: 'border-red-600' },
  { name: 'Bank of Baroda', roi: '8.40% onwards', color: 'border-amber-600' },
  { name: 'PNB Housing Finance', roi: '8.50% onwards', color: 'border-purple-600' },
  { name: 'LIC Housing Finance', roi: '8.45% onwards', color: 'border-emerald-600' }
];

export default function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 Lakhs default
  const [interestRate, setInterestRate] = useState(8.5); // 8.5% default
  const [tenure, setTenure] = useState(20); // 20 years default

  // Calculate Monthly EMI
  // Formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenure * 12;

  const emi = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const formatLakhs = (val) => {
    if (val >= 10000000) return `₹ ${(val / 10000000).toFixed(2)} Cr`;
    if (val >= 100000) return `₹ ${(val / 100000).toFixed(2)} Lakhs`;
    return `₹ ${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="homeloan" className="py-16 md:py-24 bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-light text-gold-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4" />
            Instant Loan Eligibility & EMI Calculator
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Home Loan <span className="text-gold-accent">Calculator</span>
          </h2>
          <p className="text-gray-300 mt-3 text-sm md:text-base">
            Plan your home loan tenure, interest rate, and monthly installment with transparent calculations.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-navy-card rounded-2xl p-6 md:p-10 border border-gray-800 shadow-2xl grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Sliders Input Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Loan Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-gray-300">Loan Amount</label>
                <span className="text-xl font-bold text-gold-accent bg-navy-dark px-4 py-1 rounded-lg border border-gray-800">
                  {formatLakhs(loanAmount)}
                </span>
              </div>
              <input 
                type="range" 
                min="500000" 
                max="50000000" 
                step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-navy-dark rounded-lg appearance-none cursor-pointer accent-gold-accent"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>₹ 5 Lakhs</span>
                <span>₹ 5 Crore</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-gray-300">Interest Rate (% p.a.)</label>
                <span className="text-xl font-bold text-gold-accent bg-navy-dark px-4 py-1 rounded-lg border border-gray-800">
                  {interestRate} %
                </span>
              </div>
              <input 
                type="range" 
                min="6.5" 
                max="15.0" 
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-navy-dark rounded-lg appearance-none cursor-pointer accent-gold-accent"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>6.5 %</span>
                <span>15 %</span>
              </div>
            </div>

            {/* Loan Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-gray-300">Tenure (Years)</label>
                <span className="text-xl font-bold text-gold-accent bg-navy-dark px-4 py-1 rounded-lg border border-gray-800">
                  {tenure} Years
                </span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full h-2 bg-navy-dark rounded-lg appearance-none cursor-pointer accent-gold-accent"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1 Year</span>
                <span>30 Years</span>
              </div>
            </div>

          </div>

          {/* EMI Display Output Column */}
          <div className="lg:col-span-5 bg-navy-dark p-6 md:p-8 rounded-xl border border-gray-800 text-center space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-gray-400">Monthly EMI</span>
              <div className="text-4xl md:text-5xl font-extrabold text-gold-accent mt-2">
                ₹ {emi.toLocaleString('en-IN')}
              </div>
              <span className="text-xs text-gray-400">/ month</span>
            </div>

            <div className="pt-4 border-t border-gray-800 space-y-3 text-sm text-left">
              <div className="flex justify-between text-gray-300">
                <span>Principal Amount:</span>
                <span className="font-semibold text-white">₹ {loanAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Total Interest Payable:</span>
                <span className="font-semibold text-amber-400">₹ {totalInterest.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-300 pt-2 border-t border-gray-800">
                <span>Total Payable Amount:</span>
                <span className="font-bold text-white text-base">₹ {totalPayment.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <a 
              href="#contact"
              className="block w-full bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold py-3.5 rounded-lg shadow-lg transition"
            >
              Apply For Home Loan Now
            </a>
          </div>

        </div>

        {/* Banks We Assist With */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Banks We Assist With</h3>
            <p className="text-gray-400 text-sm mt-1">
              We collaborate with premier financial institutions for pre-approved home loan offers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {bankLogos.map((bank, index) => (
              <div 
                key={index}
                className={`bg-white/5 border ${bank.color} p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition text-center flex flex-col justify-center items-center gap-1`}
              >
                <Building className="w-6 h-6 text-gold-accent mb-1" />
                <h4 className="text-sm font-bold text-white">{bank.name}</h4>
                <span className="text-xs text-emerald-400 font-semibold">{bank.roi}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
