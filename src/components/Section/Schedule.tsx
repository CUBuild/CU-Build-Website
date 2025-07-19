import React from 'react';
import { schedule } from '../../utils/data/eventDetails';

const formatTimeDisplay = (time: string) => {
  if (time.includes('-')) {
    const [start, end] = time.split('-').map((t) => t.trim());
    return (
      <div className="flex flex-col">
        <span className="font-medium">{start}</span>
        <span className="font-medium text-pink-500">to</span>
        <span className="font-medium">{end}</span>
      </div>
    );
  }
  return <span className="font-medium">{time}</span>;
};

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">Event Schedule</h3>
        <div className="space-y-8">
          {Object.entries(schedule).map(([day, events]) => (
            <div key={day} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
              <h4 className="text-2xl font-bold mb-6 text-pink-600">{day}</h4>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors">
                    <div className="w-32 flex-shrink-0 text-gray-700">{formatTimeDisplay(event.time)}</div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-lg text-gray-900 group-hover:text-pink-600 transition-colors">{event.activity}</h5>
                      {event.description && <p className="text-gray-600 mt-1">{event.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
