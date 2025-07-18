import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Users, Trophy, Lightbulb, ExternalLink, CreditCard } from 'lucide-react';
import logo from "./assets/cu-build-logo.png";
import logoDark from "./assets/cu-build-logo-dark.png";
import { useLocation } from 'react-router';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/">
            <CULogo isDark isSmall/>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
            <Link to="/schedule" className="text-gray-600 hover:text-pink-500 transition-colors">Schedule</Link>
            <Link to="/register" className="text-gray-600 hover:text-pink-500 transition-colors">Register</Link>
            <Link to="/sponsors" className="text-gray-600 hover:text-pink-500 transition-colors">Sponsors</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

const CULogo: React.FC<{ isSmall?: boolean, isDark?: boolean }> = ({ isSmall, isDark }) => (
  <img 
    src={isDark ? logoDark : logo} 
    alt="CU Build Logo" 
    className={isSmall ? 'h-12 w-22' : 'h-auto mx-auto mb-6 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80'} 
  />
);

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <CULogo isDark />
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Join credit union professionals in building innovative solutions for our industry in a cooperative, 
          exciting, and competitive environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/register')}
            className="py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{backgroundColor: '#e31a90'}}
          >
            Register Now
          </button>
          <button 
            onClick={() => navigate('/about')}
            className="py-4 px-8 rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 border-2 hover:bg-gray-50"
            style={{borderColor: '#613395', color: '#613395'}}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">What is CU Build?</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              CU Build is an event known as a build-a-thon, where credit union professionals can participate 
              in building solutions for the CU industry in a cooperative, innovative, exciting, and competitive environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              CU Build started as just an idea based on a first-hand experience at an American Airlines' Hackathon. 
              "What if we could have a hackathon like this in our industry, leveraging the cooperative principles?" 
              The idea turned to dreams and visions and lots of people have helped us along the way.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-opacity-10" style={{backgroundColor: '#e31a90'}}>
                <div className="text-3xl font-bold" style={{color: '#e31a90'}}>72</div>
                <div className="text-sm text-gray-600">Hours of Innovation</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-opacity-10" style={{backgroundColor: '#3baf49'}}>
                <div className="text-3xl font-bold" style={{color: '#3baf49'}}>300+</div>
                <div className="text-sm text-gray-600">Total Participants</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-opacity-10" style={{backgroundColor: '#52c2ec'}}>
                <div className="text-3xl font-bold" style={{color: '#52c2ec'}}>5+</div>
                <div className="text-sm text-gray-600">Years Running</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-opacity-10" style={{backgroundColor: '#f6de08'}}>
                <div className="text-3xl font-bold" style={{color: '#f6de08'}}>50+</div>
                <div className="text-sm text-gray-600">Solutions Built</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div 
              className="group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-yellow-400 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <Lightbulb size={32} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Innovate</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Build cutting-edge solutions that transform the credit union industry</p>
              </div>
            </div>

            <div 
              className="group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-cyan-400 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-cyan-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <Users size={32} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Collaborate</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Work alongside industry experts and passionate professionals</p>
              </div>
            </div>

            <div 
              className="group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-purple-500 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <Trophy size={32} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Compete</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Win amazing prizes while pushing the boundaries of innovation</p>
              </div>
            </div>

            <div 
              className="group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-green-500 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <Users size={32} className="text-white" />
                </div>
                <h4 className="font-bold text-gray-800 mb-3 text-lg">Network</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Connect with peers and build lasting professional relationships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const eventDetails = {
  date: 'October 15-16, 2024',
  location: 'Innovation Center, Denver, CO',
  capacity: '200 participants',
  earlyBirdPrice: '$149',
  regularPrice: '$199'
};

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
              <span className="text-2xl font-bold" style={{color: '#e31a90'}}>{eventDetails.earlyBirdPrice}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-semibold">Regular</span>
              <span className="text-2xl font-bold text-gray-600">{eventDetails.regularPrice}</span>
            </div>
          </div>
          <button 
            className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            style={{backgroundColor: '#e31a90'}}
          >
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
            <option>Early Bird - {eventDetails.earlyBirdPrice}</option>
            <option>Regular - {eventDetails.regularPrice}</option>
          </select>
          <button 
            onClick={() => console.log('Processing payment...')}
            className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            style={{backgroundColor: '#3baf49'}}
          >
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
                ticketingMode === 'external' 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              External Ticketing
            </button>
            <button
              onClick={() => setTicketingMode('integrated')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                ticketingMode === 'integrated' 
                  ? 'bg-pink-500 text-white' 
                  : 'text-gray-600 hover:text-pink-500'
              }`}
            >
              Integrated Payment
            </button>
          </div>
        </div>

        <TicketingSection />
      </div>
    </section>
  );
};

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

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <CULogo isSmall />
            </div>
            <p className="text-gray-400">
              Building the future of credit unions through innovation and collaboration.
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Schedule</Link></li>
              <li><Link to="/register" className="hover:text-white transition-colors">Register</Link></li>
              <li><Link to="/sponsors" className="hover:text-white transition-colors">Sponsors</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Contact</h5>
            <ul className="space-y-2 text-gray-400">
              <li>info@cubuild.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Follow Us</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CU Build. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const Sponsorship: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: '',
    interestedTier: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Sponsors</h2>
        
        {/* Platinum Sponsors */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8" style={{color: '#e31a90'}}>Platinum Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            {[1, 2, 3].map((i) => (
              <div key={`platinum-${i}`} className="w-full max-w-[300px] aspect-[3/2] bg-white rounded-lg shadow-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
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
              <div key={`gold-${i}`} className="w-full max-w-[240px] aspect-[3/2] bg-white rounded-lg shadow-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
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
              <div key={`partner-${i}`} className="w-full max-w-[200px] aspect-[3/2] bg-white rounded-lg shadow-lg p-4 flex items-center justify-center transform hover:scale-105 transition-transform">
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
              <p className="text-4xl font-bold" style={{color: '#e31a90'}}>$10,000</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Premier logo placement
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                5 event tickets
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
                <span className="text-green-500 mr-2">✓</span>
                3 event tickets
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
                <span className="text-green-500 mr-2">✓</span>
                1 event ticket
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
                required
              >
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
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{backgroundColor: '#e31a90'}}
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-cyan-50">
        <Header />
        <Routes>
          <Route path="/" element={<><Home /><About /></>} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsors" element={<Sponsorship />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;