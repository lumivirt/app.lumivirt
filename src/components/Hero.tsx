import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const scrollToCTA = () => {
    const ctaSection = document.querySelector('#cta-section');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-radial from-dark-850 to-dark-950 flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center gap-8 mb-16">
          <Logo className="text-8xl md:text-9xl mb-4" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Staffing Illuminated
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Creating better experiences through data-driven insights and honest partnerships in the healthcare staffing industry.
        </p>
        <button 
          onClick={scrollToCTA}
          className="group bg-accent-cyan hover:bg-opacity-90 text-dark-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 mx-auto shadow-glow"
        >
          Join the Mission
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}