import React from 'react';
import { Lightbulb, Users, Trophy } from 'lucide-react';

const dataCards = [
  {
    title: '300+',
    description: 'Total Participants',
    bgColor: '#e31a90',
  },
  {
    title: '5',
    description: 'Years Building',
    bgColor: '#3baf49',
  },
  {
    title: '20+',
    description: 'Sponsors',
    bgColor: '#52c2ec',
  },
  {
    title: '50+',
    description: 'Projects Built',
    bgColor: '#613395',
  },
];
const innovcationCards = [
  {
    title: 'Innovate',
    description: 'Build cutting-edge solutions that transform the credit union industry',
    icon: <Lightbulb size={32} className="text-white" />,
    bgColor: 'yellow',
  },
  {
    title: 'Collaborate',
    description: 'Work alongside industry experts and passionate professionals',
    icon: <Users size={32} className="text-white" />,
    bgColor: 'cyan',
  },
  {
    title: 'Compete',
    description: 'Win amazing prizes while pushing the boundaries of innovation',
    icon: <Trophy size={32} className="text-white" />,
    bgColor: 'purple',
  },
  {
    title: 'Network',
    description: 'Connect with peers and build lasting professional relationships',
    icon: <Users size={32} className="text-white" />,
    bgColor: 'green',
  },
];

// TODO: add section about CU Build mission and vision
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">What is CU Build?</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Data Cards */}
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
              {Object.entries(dataCards).map(([key, card]) => (
                <div key={key} className="text-center p-4 rounded-lg bg-opacity-90" style={{ backgroundColor: card.bgColor }}>
                  <div className="text-3xl font-bold text-white mb-1">{card.title}</div>
                  <div className="text-sm text-white font-medium">{card.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation Cards */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(innovcationCards).map(([key, card]) => (
              <div
                key={key}
                className={`group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-${card.bgColor}-500 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }}>
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-${card.bgColor}-400 to-${card.bgColor}-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div
                  className={`absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-${card.bgColor}-300 to-${card.bgColor}-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12`}></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-${card.bgColor}-300 to-${card.bgColor}-500 rounded-full flex items-center justify-center group-hover:animate-pulse`}>
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">{card.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
