import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import useActiveRoute from '../utils/hooks/useActiveRoute';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const homeRoute = useActiveRoute('/');
  const scheduleRoute = useActiveRoute('/schedule');
  const registerRoute = useActiveRoute('/register');
  const sponsorsRoute = useActiveRoute('/sponsors');
  const faqRoute = useActiveRoute('/faq');

  return (
    <header className="bg-white shadow-xl border-b border-gray-100/50 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Logo isDark isSmall />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`transition-colors ${homeRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              style={homeRoute.isActive ? { color: homeRoute.activeColor } : undefined}>
              Home
            </Link>
            <Link
              to="/schedule"
              className={`transition-colors ${scheduleRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              style={scheduleRoute.isActive ? { color: scheduleRoute.activeColor } : undefined}>
              Schedule
            </Link>
            <Link
              to="/register"
              className={`transition-colors ${registerRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              style={registerRoute.isActive ? { color: registerRoute.activeColor } : undefined}>
              Register
            </Link>
            <Link
              to="/sponsors"
              className={`transition-colors ${sponsorsRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              style={sponsorsRoute.isActive ? { color: sponsorsRoute.activeColor } : undefined}>
              Sponsors
            </Link>
            <Link
              to="/faq"
              className={`transition-colors ${faqRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
              style={faqRoute.isActive ? { color: faqRoute.activeColor } : undefined}>
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden w-10 h-10 flex items-center justify-center focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 relative transform transition-all duration-300">
              <span
                className={`absolute h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300 
                  ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
                style={{ top: '2px' }}
              />
              <span
                className={`absolute h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300 
                  ${isOpen ? 'opacity-0' : ''}`}
                style={{ top: '10px' }}
              />
              <span
                className={`absolute h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300 
                  ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
                style={{ top: '18px' }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed left-0 right-0 w-full min-h-screen transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ top: '72px', backgroundColor: '#E31A90' }}>
          <nav className="flex flex-col p-4">
            <button
              onClick={() => handleNavigation('/')}
              className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
                homeRoute.isActive ? 'bg-white/20 font-semibold' : ''
              }`}>
              Home
            </button>
            <button
              onClick={() => handleNavigation('/schedule')}
              className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
                scheduleRoute.isActive ? 'bg-white/20 font-semibold' : ''
              }`}>
              Schedule
            </button>
            <button
              onClick={() => handleNavigation('/register')}
              className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
                registerRoute.isActive ? 'bg-white/20 font-semibold' : ''
              }`}>
              Register
            </button>
            <button
              onClick={() => handleNavigation('/sponsors')}
              className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
                sponsorsRoute.isActive ? 'bg-white/20 font-semibold' : ''
              }`}>
              Sponsors
            </button>
            <button
              onClick={() => handleNavigation('/faq')}
              className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
                faqRoute.isActive ? 'bg-white/20 font-semibold' : ''
              }`}>
              FAQ
            </button>

            {/* Social Media Links */}
            <div className="mt-auto border-t border-pink-400 pt-4 px-4">
              <div className="flex justify-center space-x-6">
                <a
                  href="https://linkedin.com/company/cu-build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-200 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/cubuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-200 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
