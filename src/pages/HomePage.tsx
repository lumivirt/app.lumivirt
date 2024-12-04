import Hero from '../components/Hero';
import RateComparison from '../components/RateComparison';
import About from '../components/About';
import Features from '../components/Features';
import Metrics from '../components/Metrics';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-950 bg-gradient-radial from-dark-900 to-dark-950">
      <Hero />
      <RateComparison />
      <About />
      <Features />
      <Metrics />
      <CallToAction />
      <Footer />
    </div>
  );
}