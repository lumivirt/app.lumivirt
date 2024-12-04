import { FC } from 'react';

interface MetricProps {
  name: string;
  value: string;
  color: string;
  glowColor: string;
}

const Metric: FC<MetricProps> = ({ name, value, color, glowColor }) => (
  <div className="group flex rounded-lg overflow-hidden hover:transform hover:scale-102 transition-all duration-300">
    <div className="bg-dark-800 bg-opacity-80 py-3 px-4 w-[60%] flex items-center group-hover:bg-dark-850 transition-colors backdrop-blur-sm shadow-inner-glow">
      <p className="text-gray-300 font-medium text-sm">{name}</p>
    </div>
    <div className={`${color} py-3 px-4 w-[40%] flex items-center justify-center transition-colors ${glowColor} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] animate-shine"></div>
      <span className="text-dark-900 font-bold text-sm relative z-10">{value}</span>
    </div>
  </div>
);

export default function Metrics() {
  const categories = [
    {
      title: "Financial",
      color: "bg-accent-yellow",
      glowColor: "shadow-glow-yellow",
      metrics: [
        { name: "Average Pay Rate", value: "$45/hr" },
        { name: "Profit Margin", value: "15%" },
        { name: "Cost Savings", value: "22%" },
        { name: "Revenue Growth", value: "+35%" }
      ]
    },
    {
      title: "Facility",
      color: "bg-accent-cyan",
      glowColor: "shadow-glow-cyan",
      metrics: [
        { name: "Fill Rate", value: "95%" },
        { name: "Response Time", value: "2hrs" },
        { name: "Retention", value: "89%" },
        { name: "Satisfaction", value: "4.8/5" }
      ]
    },
    {
      title: "Staff",
      color: "bg-accent-yellow",
      glowColor: "shadow-glow-yellow",
      metrics: [
        { name: "Pool Size", value: "2500+" },
        { name: "Engagement", value: "92%" },
        { name: "Growth Rate", value: "+45%" },
        { name: "Rating", value: "4.9/5" }
      ]
    },
    {
      title: "Performance",
      color: "bg-accent-cyan",
      glowColor: "shadow-glow-cyan",
      metrics: [
        { name: "Fulfillment", value: "98%" },
        { name: "Reliability", value: "99.9%" },
        { name: "Accuracy", value: "99.7%" },
        { name: "Efficiency", value: "+75%" }
      ]
    }
  ];

  return (
    <section className="bg-dark-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Performance Metrics</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              {category.metrics.map((metric, index) => (
                <Metric
                  key={index}
                  name={metric.name}
                  value={metric.value}
                  color={category.color}
                  glowColor={category.glowColor}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}