import { Calendar, Clock, MapPin } from 'lucide-react';

export default function ShiftRequestPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-dark-800 rounded-xl p-8 shadow-glow">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Facility Name
            </label>
            <input
              type="text"
              className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
              placeholder="Enter facility name"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Start Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg pl-12 pr-4 py-2 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Shift Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg pl-12 pr-4 py-2 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                >
                  <option>Day Shift</option>
                  <option>Night Shift</option>
                  <option>Evening Shift</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                className="w-full bg-dark-900 border border-gray-700 rounded-lg pl-12 pr-4 py-2 text-white focus:ring-2 focus:ring-accent-cyan focus:border-transparent"
                placeholder="Enter location"
              />
            </div>
          </div>

          <button className="w-full bg-accent-cyan hover:bg-opacity-90 text-dark-900 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-glow">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}