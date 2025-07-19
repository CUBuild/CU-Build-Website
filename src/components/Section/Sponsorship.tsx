import React, { useState } from 'react';

const Sponsorship: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
    interestedTier: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Sponsors</h2>

        {/* Platinum Sponsors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8" style={{ color: '#e31a90' }}>
            Platinum Sponsors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {[1, 2, 3].map((i) => (
              <div
                key={`platinum-${i}`}
                className="w-full max-w-[300px] aspect-[3/2] bg-white rounded-lg shadow-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-lg font-semibold">Platinum Sponsor {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-yellow-500">Gold Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={`gold-${i}`}
                className="w-full max-w-[240px] aspect-[3/2] bg-white rounded-lg shadow-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-lg font-semibold">Gold Sponsor {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Organizations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-purple-500">Partner Organizations</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={`partner-${i}`}
                className="w-full max-w-[200px] aspect-[3/2] bg-white rounded-lg shadow-lg p-4 flex items-center justify-center transform hover:scale-105 transition-transform">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-sm font-semibold">Partner {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Partners */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-indigo-600">Integration Partners</h3>
          <div className="space-y-8">
            {/* Integration Partner 1 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all">
              <div className="w-full md:w-1/4 aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center p-4">
                <span className="text-gray-400 text-lg font-semibold">Partner Logo 1</span>
              </div>
              <div className="w-full md:w-3/4">
                <h4 className="text-xl font-bold mb-3">Financial Core Integration</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                  </li>
                </ul>
              </div>
            </div>

            {/* Integration Partner 2 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all">
              <div className="w-full md:w-1/4 aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center p-4">
                <span className="text-gray-400 text-lg font-semibold">Partner Logo 2</span>
              </div>
              <div className="w-full md:w-3/4">
                <h4 className="text-xl font-bold mb-3">Payment Processing Solutions</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                  </li>
                </ul>
              </div>
            </div>

            {/* Integration Partner 3 */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all">
              <div className="w-full md:w-1/4 aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center p-4">
                <span className="text-gray-400 text-lg font-semibold">Partner Logo 3</span>
              </div>
              <div className="w-full md:w-3/4">
                <h4 className="text-xl font-bold mb-3">Digital Banking Platform</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    Architecto beatae vitae dicta sunt explicabo nemo enim ipsam.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Sponsorship Opportunities</h2>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Platinum Tier */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 transform hover:scale-105 transition-transform">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Platinum</h3>
              <p className="text-4xl font-bold" style={{ color: '#e31a90' }}>
                $10,000
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premier logo placement
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>5 event tickets
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Keynote speaking opportunity
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dedicated mentorship station
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Social media promotion
              </li>
            </ul>
          </div>

          {/* Gold Tier */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 transform hover:scale-105 transition-transform">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Gold</h3>
              <p className="text-4xl font-bold text-yellow-500">$5,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Logo on event materials
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>3 event tickets
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Workshop session
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Mentorship opportunities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Brand recognition
              </li>
            </ul>
          </div>

          {/* Partner Organizations */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 transform hover:scale-105 transition-transform">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Partner</h3>
              <p className="text-4xl font-bold text-purple-500">Contact Us</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Logo on website
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>1 event ticket
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Networking opportunities
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Community involvement
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Resource sharing
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Become a Sponsor</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interested Tier</label>
              <select
                name="interestedTier"
                value={formData.interestedTier}
                onChange={handleInputChange}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
                required>
                <option value="">Select a tier</option>
                <option value="platinum">Platinum</option>
                <option value="gold">Gold</option>
                <option value="partner">Partner Organization</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
                required></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#e31a90' }}>
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
