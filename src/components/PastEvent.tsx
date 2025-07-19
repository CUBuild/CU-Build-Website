import React, { useState } from 'react';
import Logo from './Logo';

interface TeamMember {
  name: string;
  role: string;
}

interface WinningTeam {
  teamName: string;
  projectName: string;
  description: string;
  track: string;
  prize?: string;
  members: TeamMember[];
}

interface PastEventProps {
  year: string;
  winningTeams: WinningTeam[];
}

const getRandomPrimaryColor = () => {
  const colors = [
    { base: '#e31a90', light: 'rgba(227, 26, 144, 0.1)' }, // Pink
    { base: '#613395', light: 'rgba(97, 51, 149, 0.1)' }, // Purple
    { base: '#3baf49', light: 'rgba(59, 175, 73, 0.1)' }, // Green
    { base: '#52c2ec', light: 'rgba(82, 194, 236, 0.1)' }, // Cyan
    { base: '#f6de08', light: 'rgba(246, 222, 8, 0.1)' }, // Yellow
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const PastEvent: React.FC<PastEventProps> = ({ year, winningTeams }) => {
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
                CU Build {year}
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
            {winningTeams.map((team, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-2/3">
                    <h4 className="text-2xl font-bold mb-2">{team.teamName}</h4>
                    <p className="text-xl text-gray-600 mb-4">{team.projectName}</p>
                    <div className="mb-4">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ backgroundColor: '#e31a90', color: 'white' }}>
                        {team.track}
                      </span>
                      {team.prize && (
                        <span className="inline-block ml-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
                          {team.prize}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-6">{team.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {team.members.map((member, idx) => (
                        <div key={idx} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm">
                          {member.name} - {member.role}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-1/3">
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">Project Screenshot</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Our {year} Sponsors</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
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
