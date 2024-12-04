import { Info } from 'lucide-react';

interface Rate {
  role: string;
  payRate: number;
  billRate: number;
}

// Helper function to round to nearest 5 cents
const roundToNearestFiveCents = (value: number): number => {
  return Math.ceil(value * 20) / 20;
};

// Calculate bill rates with 42% markup and round to nearest 5 cents
const calculateBillRate = (payRate: number): number => {
  return roundToNearestFiveCents(payRate * 1.42);
};

const rates: Rate[] = [
  { role: 'CNA', payRate: 19.95, billRate: calculateBillRate(19.95) },
  { role: 'CMA', payRate: 22.40, billRate: calculateBillRate(22.40) },
  { role: 'LPN', payRate: 36.75, billRate: calculateBillRate(36.75) },
  { role: 'RN', payRate: 45.50, billRate: calculateBillRate(45.50) },
];

const RateCard = ({ title, rates, type }: { title: string; rates: Rate[]; type: 'pay' | 'bill' }) => (
  <div className="bg-dark-800 rounded-xl p-8 shadow-glow">
    <h3 className="text-2xl font-bold text-white mb-6">{title}</h3>
    <div className="space-y-4">
      {rates.map((rate) => (
        <div key={rate.role} className="flex justify-between items-center bg-dark-850 p-4 rounded-lg shadow-inner-light">
          <span className="text-gray-300 font-medium">{rate.role}</span>
          <span className="text-white font-bold">
            ${type === 'pay' ? rate.payRate.toFixed(2) : rate.billRate.toFixed(2)}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default function RateComparison() {
  return (
    <section className="bg-dark-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Transparent Pricing</h2>
          <div className="inline-flex items-center gap-2 bg-dark-800 px-4 py-2 rounded-full shadow-inner-light">
            <Info className="w-5 h-5 text-accent-purple" />
            <p className="text-gray-300 text-sm">
              Rates may vary based on location, shift, and other factors
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <RateCard title="Pay Rates" rates={rates} type="pay" />
          <RateCard title="Bill Rates" rates={rates} type="bill" />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            Our transparent pricing model maintains a consistent 42% markup from pay rate to bill rate,
            ensuring fair compensation for our healthcare professionals while providing competitive rates for facilities.
          </p>
        </div>
      </div>
    </section>
  );
}