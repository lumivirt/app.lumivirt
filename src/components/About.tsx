import { History, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-dark-850 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Our Story</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <History className="w-8 h-8 [&>path]:stroke-[#FFE066]" />,
              title: "Our Origins",
              description: "Founded by industry veterans with decades of staffing experience, determined to create positive change."
            },
            {
              icon: <Target className="w-8 h-8 [&>path]:stroke-[#66F2F1]" />,
              title: "Our Mission",
              description: "Revolutionizing healthcare staffing through transparency, technology, and trust."
            },
            {
              icon: <Users className="w-8 h-8 [&>path]:stroke-[#FFE066]" />,
              title: "Our Impact",
              description: "Building bridges between healthcare facilities and professionals for better patient outcomes."
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
      </div>
    </section>
  );
}