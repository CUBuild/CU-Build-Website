import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <Logo isDark />
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Join credit union professionals in building innovative solutions for our industry in a cooperative, exciting, and competitive environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/register')}
            className="py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#e31a90' }}>
            Register Now
          </button>
          <button
            onClick={() => navigate('/about')}
            className="py-4 px-8 rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 border-2 hover:bg-gray-50"
            style={{ borderColor: '#613395', color: '#613395' }}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
