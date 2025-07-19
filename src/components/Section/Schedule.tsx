import React from 'react';
import { schedule } from '../../utils/data/eventDetails';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">Event Schedule</h3>
        <div className="space-y-8">
          {Object.entries(schedule).map(([day, events]) => (
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
              <div key={day} className="mb-8">
                <h4 className="text-2xl font-bold mb-4">{day}</h4>
                {events.map((event, index) => (
                  <div key={index} className="flex items-start mb-4">
                    <span className="text-gray-600 w-24">{event.time}</span>
                    <div>
                      <h5 className="font-semibold">{event.activity}</h5>
                      <p className="text-gray-600">{event.description}</p>
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
