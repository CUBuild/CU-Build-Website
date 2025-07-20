import React, { useState } from 'react';
import Logo from './Logo';
import { colors } from '../utils/data/colors';

interface Teams {
  teamName: string;
  projectName: string;
  description: string;
  track?: string;
  prizes?: string[];
  members: string[];
}

interface Sponsors {
  imageLink: string;
  url: string;
}

interface Data {
  year: string;
  teams: Teams[];
  sponsors: Sponsors[];
}

interface PastEventProps {
  data: Data;
}

const getRandomPrimaryColor = () => {
  const base = [
    { base: colors.pink, light: `${colors.pink}10` }, // Pink
    { base: colors.purple, light: `${colors.purple}10` }, // Purple
    { base: colors.green, light: `${colors.green}10` }, // Green
    { base: colors.cyan, light: `${colors.cyan}10` }, // Cyan
    { base: colors.yellow, light: `${colors.yellow}10` }, // Yellow
  ];
  return base[Math.floor(Math.random() * base.length)];
};

const PastEvent: React.FC<PastEventProps> = ({ data }) => {
  const [backgroundColor] = useState(getRandomPrimaryColor());

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .shimmer-bg {
            background: linear-gradient(
              120deg,
              ${backgroundColor.light} 0%,
              white 25%,
              ${backgroundColor.light} 50%,
              white 75%,
              ${backgroundColor.light} 100%
            );
            background-size: 200% 200%;
            animation: shimmer 15s ease-in-out infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto">
        <div className="shimmer-bg rounded-3xl mb-20">
          <div className="max-w-7xl mx-auto py-16">
            <div className="text-center">
              <Logo isDark />
              <h2 className="text-4xl font-bold mt-8 mb-4" style={{ color: backgroundColor.base }}>
                CU Build {data.year}
              </h2>
              <p className="text-xl text-gray-600">Celebrating innovation and collaboration</p>
            </div>
          </div>
        </div>

        {/* Winning Teams Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#e31a90' }}>
            Winning Teams
          </h3>
          <div className="space-y-8">
            {Object.entries(data.teams)
              .sort(([, a], [, b]) => a.teamName.localeCompare(b.teamName))
              .map(([key, value]) => (
                <div key={key} className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                      <h4 className="text-2xl font-bold mb-2">{value.teamName}</h4>
                      <p className="text-xl text-gray-600 mb-4">{value.projectName}</p>
                      <div className="mb-4">
                        {value.track && (
                          <span
                            className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                            style={{ backgroundColor: '#e31a90', color: 'white' }}>
                            {value.track}
                          </span>
                        )}
                        {value.prizes &&
                          value.prizes.map((prizes, key) => (
                            <span
                              key={key}
                              className={`${
                                prizes.length > 1 && key !== 0 ? 'ml-3' : ''
                              } inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold`}>
                              {prizes}
                            </span>
                          ))}
                      </div>
                      <p className="text-gray-600 mb-6">{value.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {value.members.map((member, idx) => (
                          <div key={idx} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm">
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <div className="lg:w-1/3">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Project Screenshot</span>
                  </div>
                </div> */}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Sponsors Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our {data.year} Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(data.sponsors).map(([key, _]) => (
              <div key={key} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Sponsor Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvent;
