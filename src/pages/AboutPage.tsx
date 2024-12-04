import { History, Target, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Our Journey</h2>
        <p className="text-gray-400">
          Founded by industry veterans with decades of staffing experience, Lumivirt emerged from a deep understanding of the healthcare staffing industry's challenges and opportunities. Our mission is to create positive change through transparency and technology.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <History className="w-8 h-8 [&>path]:stroke-[#FFE066]" />,
              title: "Transparency",
              description: "We believe in complete openness in all our operations and pricing."
            },
            {
              icon: <Target className="w-8 h-8 [&>path]:stroke-[#66F2F1]" />,
              title: "Innovation",
              description: "Continuously improving through technology and data-driven solutions."
            },
            {
              icon: <Users className="w-8 h-8 [&>path]:stroke-[#FFE066]" />,
              title: "Partnership",
              description: "Building lasting relationships with healthcare facilities and professionals."
            }
          ].map((item, index) => (
            <div key={index} className="bg-dark-800 rounded-xl p-8 hover:bg-opacity-90 transition-all duration-300 shadow-glow">
              <div className="bg-dark-900 rounded-lg p-4 inline-block mb-4 shadow-inner-light">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}