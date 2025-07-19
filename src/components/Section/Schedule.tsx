import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">Event Schedule</h3>
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
            <h4 className="text-xl font-bold mb-4">Day 1 - October 15</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-gray-600 w-24">9:00 AM</span>
                <div>
                  <h5 className="font-semibold">Registration & Welcome</h5>
                  <p className="text-gray-600">Check-in, networking, and opening remarks</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 w-24">10:00 AM</span>
                <div>
                  <h5 className="font-semibold">Team Formation</h5>
                  <p className="text-gray-600">Form teams and brainstorm ideas</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 w-24">12:00 PM</span>
                <div>
                  <h5 className="font-semibold">Lunch & Networking</h5>
                  <p className="text-gray-600">Catered lunch and networking session</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 w-24">1:00 PM</span>
                <div>
                  <h5 className="font-semibold">Build Time</h5>
                  <p className="text-gray-600">Teams begin working on their projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 w-24">5:00 PM</span>
                <div>
                  <h5 className="font-semibold">Day 1 Wrap-up</h5>
                  <p className="text-gray-600">Progress check-in and evening announcements</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
            <h4 className="text-xl font-bold mb-4">Day 2 - October 16</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-gray-600 w-24">9:00 AM</span>
                <div>
                  <h5 className="font-semibold">Day 2 Kick-off</h5>
                  <p className="text-gray-600">Morning announcements and continue building</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 w-24">12:00 PM</span>
                <div>
                  <h5 className="font-semibold">Lunch Break</h5>
                  <p className="text-gray-600">Final preparation time</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 w-24">2:00 PM</span>
                <div>
                  <h5 className="font-semibold">Project Presentations</h5>
                  <p className="text-gray-600">Teams present their solutions</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 w-24">4:00 PM</span>
                <div>
                  <h5 className="font-semibold">Awards Ceremony</h5>
                  <p className="text-gray-600">Winners announced and prizes awarded</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-gray-600 w-24">5:00 PM</span>
                <div>
                  <h5 className="font-semibold">Closing Remarks</h5>
                  <p className="text-gray-600">Event wrap-up and networking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
