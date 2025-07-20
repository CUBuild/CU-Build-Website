import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { colors } from '../../utils/data/colors';

const Home: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Logo isDark />
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Join credit union professionals in building innovative solutions for our industry in a cooperative, exciting, and competitive environment.
        </p>
        <Link to="/register">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: colors.pink }}>
              Register Now
            </button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Home;
