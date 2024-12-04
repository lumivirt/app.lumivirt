import React from 'react';
import { Building2, UserPlus, Rocket } from 'lucide-react';

const CTAButton = ({ icon, text, color }: { icon: React.ReactNode; text: string; color: string }) => (
  <button className={`${color} hover:opacity-90 text-dark-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 w-full md:w-auto justify-center shadow-glow`}>
    {React.cloneElement(icon as React.ReactElement, {
      className: "w-5 h-5 [&>path]:stroke-[#111218]"
    })}
    {text}
  </button>
);

export default function CallToAction() {
  return (
    <section id="cta-section" className="bg-dark-850 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Ready to Transform Healthcare Staffing?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <CTAButton
            icon={<Building2 />}
            text="Join as a Partner"
            color="bg-accent-yellow"
          />
          <CTAButton
            icon={<UserPlus />}
            text="Staff: Join the Revolution"
            color="bg-accent-cyan"
          />
          <CTAButton
            icon={<Rocket />}
            text="Facilities: Take a Test Drive"
            color="bg-accent-yellow"
          />
        </div>
      </div>
    </section>
  );
}