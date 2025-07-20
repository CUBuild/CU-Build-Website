import React, { useState } from 'react';
import sponsorData from '../../utils/data/sponsors.json';
import { colors } from '../../utils/data/colors';
import { details, sponsorshipDetails } from '../../utils/data/eventDetails';

// Import all images from a folder
const images = import.meta.glob('../../assets/sponsors/2025/*.png', { eager: true });

const imageMap = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const fileName = path.split('/').pop(); // get just the file name
    return [fileName, module.default]; // module.default is the actual URL
  })
);

interface SponsorCardProps {
  level: string;
  color: string;
  size?: 'small' | 'medium' | 'large';
}

type Role = 'small' | 'medium' | 'large';

const sizeMap: Record<Role, string[]> = {
  large: ['md:grid-cols-3 gap-8', 'max-w-[300px] p-6'],
  medium: ['md:grid-cols-4 gap-6', 'max-w-[240px] p-6'],
  small: ['md:grid-cols-5 gap-4', 'max-w-[200px] p-4'],
};

const SponsorshipCard: React.FC<SponsorCardProps> = ({ level, color, size = 'small' }) => {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-center mb-8" style={{ color: color }}>
        {level} {level === 'Partner' ? 'Organizations' : 'Sponsors'}
      </h3>

      <div className={`${sizeMap[size][0]} grid grid-cols-2 items-center justify-items-center`}>
        {sponsorData.sponsors
          .filter((sponsor) => sponsor.level === level.toLowerCase())
          .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))
          .map((sponsor, index) => (
            <a key={`${level.toLowerCase()}-${index}`} href={sponsor.url} target="_blank" rel="noopener noreferrer">
              <div
                className={`${sizeMap[size][1]} w-full aspect-[3/2] bg-white rounded-lg shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform`}>
                <div className="w-full h-full  rounded flex items-center justify-center">
                  <img
                    src={imageMap[sponsor.logo]}
                    alt={`${level} ${level === 'Partners' ? 'Organizations' : 'Sponsors'} ${sponsor.title}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </a>
          ))}
      </div>
    </div>
  );
};

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
        <SponsorshipCard level="Platinum" color={colors.pink} size="large" />

        {/* Gold Sponsors */}
        <SponsorshipCard level="Gold" color={colors.yellow} size="medium" />

        {/* Integration Partners */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-indigo-600">Integration Partners</h3>
          <div className="space-y-8">
            {sponsorData.sponsors
              .filter((sponsor) => sponsor.isIntegrationPartner)
              .sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }))
              .map((sponsor, _) => (
                <div
                  key={`integration-partner-${sponsor.title.replaceAll(' ', '-').toLowerCase()}`}
                  className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all">
                  {/* Integratio Partner Image */}
                  <div className="w-full md:w-1/4 aspect-[3/2] rounded-lg flex items-center justify-center p-4">
                    <img src={imageMap[sponsor.logo]} alt={`${sponsor.title}`} className="max-w-full max-h-full object-contain" />
                  </div>

                  {/* Integration Information */}
                  <div className="w-full md:w-3/4">
                    <h4 className="text-xl font-bold mb-3">{sponsor.title}</h4>
                    {sponsor.description && <p className="space-y-2 text-gray-600 mb-2">{sponsor.description}</p>}
                    <ul className="space-y-2 text-gray-600">
                      {sponsor.points?.map((point, index) => (
                        <li key={`${sponsor.title}-point-${index}`} className="flex items-start">
                          <span className="text-indigo-500 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Partner Organizations */}
        <SponsorshipCard level="Partner" color={colors.yellow} />

        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Sponsorship Opportunities</h2>

        {/* Sponsorship Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {Object.entries(sponsorshipDetails).map(([key, details]) => (
            <div
              key={`sponsor-details-for-${details.title}`}
              className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 transform hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{details.title}</h3>
                <p className="text-4xl font-bold" style={{ color: colors[details.color] }}>
                  {details.cost}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                {details.benefits.map((benefit, index) => (
                  <li key={`${key}-benefit-${index}`} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Get Involved</h3>
          <p className="text-gray-600 mb-6 text-center ">Reach out and inquire about sponsorship, partnership, integrations, or volunteering.</p>
          <a href={details.sponsorship} target="_blank" rel="noopener noreferrer">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: colors.pink }}>
                2025 Prospectus
              </button>
            </div>
          </a>

          {/* TODO: form */}
          {/* <form onSubmit={handleSubmit} className="space-y-6">
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
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;
