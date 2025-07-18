import React, { useState } from 'react';
import { Calendar, Users, Trophy, Lightbulb, ExternalLink, CreditCard, MapPin, Clock, Heart, Award, Coffee } from 'lucide-react';

const App = () => {
  const [ticketingMode, setTicketingMode] = useState('external'); // 'external' or 'integrated'
  const [eventDetails, setEventDetails] = useState({
    date: 'October 15-16, 2024',
    location: 'Innovation Center, Denver, CO',
    capacity: '200 participants',
    earlyBirdPrice: '$149',
    regularPrice: '$199'
  });

  const CUBuildLogo = () => (
    <div className="relative w-16 h-16 mx-auto mb-6">
      <div className="grid grid-cols-3 gap-1 w-full h-full">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`rounded-lg transform transition-all duration-300 hover:scale-110 ${
              i === 0 ? 'bg-pink-500' :
              i === 1 ? 'bg-green-500' :
              i === 2 ? 'bg-yellow-400' :
              i === 3 ? 'bg-cyan-400' :
              i === 4 ? 'bg-purple-600' :
              i === 5 ? 'bg-pink-500' :
              i === 6 ? 'bg-green-500' :
              i === 7 ? 'bg-yellow-400' :
              'bg-cyan-400'
            }`}
            style={{
              backgroundColor: i === 0 || i === 5 ? '#e31a90' :
                              i === 1 || i === 6 ? '#3baf49' :
                              i === 2 || i === 7 ? '#f6de08' :
                              i === 3 || i === 8 ? '#52c2ec' :
                              '#613395'
            }}
          />
        ))}
      </div>
    </div>
  );

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10">
                <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{
                        backgroundColor: i === 0 || i === 5 ? '#e31a90' :
                                        i === 1 || i === 6 ? '#3baf49' :
                                        i === 2 || i === 7 ? '#f6de08' :
                                        i === 3 || i === 8 ? '#52c2ec' :
                                        '#613395'
                      }}
                    />
                  ))}
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-800">CU Build</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
              <a href="#schedule" className="text-gray-600 hover:text-pink-500 transition-colors">Schedule</a>
              <a href="#register" className="text-gray-600 hover:text-pink-500 transition-colors">Register</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <CUBuildLogo />
          <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            CU <span style={{color: '#e31a90'}}>Build</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join credit union professionals in building innovative solutions for our industry in a cooperative, 
            exciting, and competitive environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{backgroundColor: '#e31a90'}}
            >
              Register Now
            </button>
            <button 
              className="py-4 px-8 rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 border-2 hover:bg-gray-50"
              style={{borderColor: '#613395', color: '#613395'}}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Event Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">Event Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform transition-all duration-300 hover:scale-105">
              <Calendar size={48} className="mx-auto mb-4" style={{color: '#e31a90'}} />
              <h4 className="text-xl font-bold text-gray-800 mb-2">When</h4>
              <p className="text-gray-600">{eventDetails.date}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform transition-all duration-300 hover:scale-105">
              <MapPin size={48} className="mx-auto mb-4" style={{color: '#3baf49'}} />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Where</h4>
              <p className="text-gray-600">{eventDetails.location}</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform transition-all duration-300 hover:scale-105">
              <Heart size={48} className="mx-auto mb-4" style={{color: '#52c2ec'}} />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Mission</h4>
              <p className="text-gray-600">501(c)(3) nonprofit organization</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center transform transition-all duration-300 hover:scale-105">
              <Award size={48} className="mx-auto mb-4" style={{color: '#613395'}} />
              <h4 className="text-xl font-bold text-gray-800 mb-2">Prizes</h4>
              <p className="text-gray-600">$25,000+ in total prizes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">3-Day Experience</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Day 1 */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{backgroundColor: '#e31a90'}}>
                  Day 1
                </div>
              </div>
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-6">Kickoff & Ideation</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#e31a90'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">9:00 AM</div>
                    <div className="text-gray-600">Registration & Welcome Breakfast</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#e31a90'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">10:00 AM</div>
                    <div className="text-gray-600">Opening Ceremony & Keynote</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#e31a90'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">11:30 AM</div>
                    <div className="text-gray-600">Challenge Briefing & Team Formation</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#e31a90'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">1:00 PM</div>
                    <div className="text-gray-600">Lunch & Networking</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#e31a90'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">2:30 PM</div>
                    <div className="text-gray-600">Build Session Begins!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{backgroundColor: '#3baf49'}}>
                  Day 2
                </div>
              </div>
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-6">Build & Develop</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#3baf49'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">8:00 AM</div>
                    <div className="text-gray-600">Breakfast & Morning Energizer</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#3baf49'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">9:00 AM</div>
                    <div className="text-gray-600">Intensive Build Session</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#3baf49'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">12:00 PM</div>
                    <div className="text-gray-600">Working Lunch & Mentorship</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#3baf49'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">1:00 PM</div>
                    <div className="text-gray-600">Continued Development</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#3baf49'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">7:00 PM</div>
                    <div className="text-gray-600">Dinner & Social Hour</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style={{backgroundColor: '#f6de08', color: '#333'}}>
                  Day 3
                </div>
              </div>
              <h4 className="text-2xl font-bold text-center text-gray-800 mb-6">Present & Celebrate</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#f6de08'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">8:00 AM</div>
                    <div className="text-gray-600">Final Build & Polish</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#f6de08'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">11:00 AM</div>
                    <div className="text-gray-600">Presentation Prep & Rehearsal</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#f6de08'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">1:00 PM</div>
                    <div className="text-gray-600">Lunch & Final Touches</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#f6de08'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">2:00 PM</div>
                    <div className="text-gray-600">Team Presentations</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-3" style={{backgroundColor: '#f6de08'}}></div>
                  <div>
                    <div className="font-semibold text-gray-800">4:00 PM</div>
                    <div className="text-gray-600">Awards & Closing Ceremony</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-6 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2">
                <Coffee size={24} style={{color: '#52c2ec'}} />
                <span className="text-gray-700">All meals included</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={24} style={{color: '#613395'}} />
                <span className="text-gray-700">Expert mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy size={24} style={{color: '#e31a90'}} />
                <span className="text-gray-700">Amazing prizes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8">
                  <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="rounded-sm"
                        style={{
                          backgroundColor: i === 0 || i === 5 ? '#e31a90' :
                                          i === 1 || i === 6 ? '#3baf49' :
                                          i === 2 || i === 7 ? '#f6de08' :
                                          i === 3 || i === 8 ? '#52c2ec' :
                                          '#613395'
                        }}
                      />
                    ))}
                  </div>
                </div>
                <h4 className="text-xl font-bold">CU Build</h4>
              </div>
              <p className="text-gray-400">
                Building the future of credit unions through innovation and collaboration.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#schedule" className="hover:text-white transition-colors">Schedule</a></li>
                <li><a href="#register" className="hover:text-white transition-colors">Register</a></li>
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
    </div>
  );
};

export default App;