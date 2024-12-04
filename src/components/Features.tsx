import { Shield, Clock, BarChart, Heart } from 'lucide-react';

export default function Features() {
  return (
    <section className="bg-dark-850 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Lumivirt</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <Shield className="w-8 h-8 [&>path]:stroke-[#FFE066]" />,
              title: "Complete Transparency",
              description: "Real-time access to performance metrics and financial data."
            },
            {
              icon: <Clock className="w-8 h-8 [&>path]:stroke-[#66F2F1]" />,
              title: "Rapid Response",
              description: "Advanced matching algorithms for faster staffing solutions."
            },
            {
              icon: <BarChart className="w-8 h-8 [&>path]:stroke-[#FFE066]" />,
              title: "Data-Driven Decisions",
              description: "Comprehensive analytics to optimize staffing strategies."
            },
            {
              icon: <Heart className="w-8 h-8 [&>path]:stroke-[#66F2F1]" />,
              title: "Quality Care Focus",
              description: "Ensuring the best match between facilities and healthcare professionals."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-dark-800 rounded-xl p-8 hover:bg-opacity-90 transition-all duration-300 shadow-glow">
              <div className="bg-dark-900 rounded-lg p-4 inline-block mb-4 shadow-inner-light">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}