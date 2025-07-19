import React from 'react';
import { Lightbulb, Users, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">What is CU Build?</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              CU Build is an event known as a build-a-thon, where credit union professionals can participate in building solutions for the CU industry
              in a cooperative, innovative, exciting, and competitive environment.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              CU Build started as just an idea based on a first-hand experience at an American Airlines' Hackathon. "What if we could have a hackathon
              like this in our industry, leveraging the cooperative principles?" The idea turned to dreams and visions and lots of people have helped
              us along the way.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-opacity-90" style={{ backgroundColor: '#e31a90' }}>
                <div className="text-3xl font-bold text-white mb-1">300+</div>
                <div className="text-sm text-white font-medium">Total Participants</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-opacity-90" style={{ backgroundColor: '#3baf49' }}>
                <div className="text-3xl font-bold text-white mb-1">5</div>
                <div className="text-sm text-white font-medium">Years Building</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-opacity-90" style={{ backgroundColor: '#52c2ec' }}>
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-white font-medium">Sponsors</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-opacity-90" style={{ backgroundColor: '#613395' }}>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white font-medium">Projects Built</div>
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
              }}>
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
              }}>
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
              }}>
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
              }}>
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

export default About;
