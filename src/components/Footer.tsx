import React from 'react';
import { Link } from 'react-router-dom';
import useActiveRoute from '../utils/hooks/useActiveRoute';
import Logo from './Logo';

const Footer: React.FC = () => {
  const homeRoute = useActiveRoute('/');
  const scheduleRoute = useActiveRoute('/schedule');
  const registerRoute = useActiveRoute('/register');
  const sponsorsRoute = useActiveRoute('/sponsors');
  const faqRoute = useActiveRoute('/faq');
  const year2024Route = useActiveRoute('/2024');
  const year2023Route = useActiveRoute('/2023');
  const year2022Route = useActiveRoute('/2022');
  const year2021Route = useActiveRoute('/2021');

  return (
    <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description - Full width on mobile */}
          <div className="md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Logo isSmall />
            </div>
            <p className="text-gray-400">Building the future of credit unions through innovation and collaboration.</p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/"
                  className={`transition-colors hover:text-white ${homeRoute.isActive ? 'font-semibold' : ''}`}
                  style={homeRoute.isActive ? { color: homeRoute.activeColor } : undefined}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/schedule"
                  className={`transition-colors hover:text-white ${scheduleRoute.isActive ? 'font-semibold' : ''}`}
                  style={scheduleRoute.isActive ? { color: scheduleRoute.activeColor } : undefined}>
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={`transition-colors hover:text-white ${registerRoute.isActive ? 'font-semibold' : ''}`}
                  style={registerRoute.isActive ? { color: registerRoute.activeColor } : undefined}>
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className={`transition-colors hover:text-white ${sponsorsRoute.isActive ? 'font-semibold' : ''}`}
                  style={sponsorsRoute.isActive ? { color: sponsorsRoute.activeColor } : undefined}>
                  Sponsors
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className={`transition-colors hover:text-white ${faqRoute.isActive ? 'font-semibold' : ''}`}
                  style={faqRoute.isActive ? { color: faqRoute.activeColor } : undefined}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Previous Years */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold mb-4">Previous Years</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/2024"
                  className={`transition-colors hover:text-white ${year2024Route.isActive ? 'font-semibold' : ''}`}
                  style={year2024Route.isActive ? { color: year2024Route.activeColor } : undefined}>
                  2024
                </Link>
              </li>
              <li>
                <Link
                  to="/2023"
                  className={`transition-colors hover:text-white ${year2023Route.isActive ? 'font-semibold' : ''}`}
                  style={year2023Route.isActive ? { color: year2023Route.activeColor } : undefined}>
                  2023
                </Link>
              </li>
              <li>
                <Link
                  to="/2022"
                  className={`transition-colors hover:text-white ${year2022Route.isActive ? 'font-semibold' : ''}`}
                  style={year2022Route.isActive ? { color: year2022Route.activeColor } : undefined}>
                  2022
                </Link>
              </li>
              <li>
                <Link
                  to="/2021"
                  className={`transition-colors hover:text-white ${year2021Route.isActive ? 'font-semibold' : ''}`}
                  style={year2021Route.isActive ? { color: year2021Route.activeColor } : undefined}>
                  2021
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact and Social */}
          <div className="text-center md:text-left">
            <h5 className="font-semibold mb-4">Contact</h5>
            <ul className="space-y-2 text-gray-400">
              <li>info@cubuild.com</li>
              <li>(555) 123-4567</li>
            </ul>
            <div className="mt-6">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://linkedin.com/company/cu-build"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://discord.gg/cubuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                </a>
              </div>
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

export default Footer;
