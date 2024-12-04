import Metrics from '../components/Metrics';

export default function MetricsPage() {
  return (
    <div>
      <p className="text-gray-400 mb-12">
        Track our performance metrics in real-time. We believe in complete transparency
        and sharing our data helps build trust with our partners.
      </p>
      <Metrics />
    </div>
  );
}