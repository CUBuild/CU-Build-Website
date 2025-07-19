import React, { useState } from 'react';
import { ExternalLink, CreditCard } from 'lucide-react';
import { details } from '../../utils/data/eventDetails';

// TODO: add external ticketing link
// TODO: add section about hotel information and travel tips
const Register: React.FC = () => {
  const [ticketingMode, setTicketingMode] = useState('external');

  const TicketingSection = () => {
    if (ticketingMode === 'external') {
      return (
        <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reserve Your Spot</h3>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">Early Bird</span>
              <span className="text-2xl font-bold" style={{ color: '#e31a90' }}>
                {details.earlyBirdPrice}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">Regular</span>
              <span className="text-2xl font-bold text-gray-600">{details.regularPrice}</span>
            </div>
          </div>
          <button
            className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#e31a90' }}>
            <ExternalLink size={20} />
            Get Tickets
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Secure Registration</h3>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
          />
          <input
            type="text"
            placeholder="Credit Union/Organization"
            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
          />
          <select className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors">
            <option>Select Ticket Type</option>
            <option>Early Bird - {details.earlyBirdPrice}</option>
            <option>Regular - {details.regularPrice}</option>
          </select>
          <button
            onClick={() => console.log('Processing payment...')}
            className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            style={{ backgroundColor: '#3baf49' }}>
            <CreditCard size={20} />
            Register & Pay
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-purple-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">Join CU Build</h3>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Limited spots available. Register now to secure your place in this innovative event.
        </p>

        {/* Ticketing Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-xl shadow-lg">
            <button
              onClick={() => setTicketingMode('external')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                ticketingMode === 'external' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-pink-500'
              }`}>
              External Ticketing
            </button>
            <button
              onClick={() => setTicketingMode('integrated')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                ticketingMode === 'integrated' ? 'bg-pink-500 text-white' : 'text-gray-600 hover:text-pink-500'
              }`}>
              Integrated Payment
            </button>
          </div>
        </div>

        <TicketingSection />
      </div>
    </section>
  );
};

export default Register;
