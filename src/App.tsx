import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Home, About, Schedule, Register, Sponsorship, FAQ, PastEvent, Footer } from './components';
import data2021 from './utils/data/past/2021.json';
import data2022 from './utils/data/past/2022.json';
import data2023 from './utils/data/past/2023.json';
import data2024 from './utils/data/past/2024.json';

// const useActiveRoute = (path: string) => {
//   const location = useLocation();
//   const [color, setColor] = useState('#e31a90');

//   useEffect(() => {
//     const colors = ['#e31a90', '#613395', '#3baf49', '#52c2ec', '#f6de08'];
//     let currentIndex = 0;

//     if (location.pathname === path) {
//       const interval = setInterval(() => {
//         currentIndex = (currentIndex + 1) % colors.length;
//         setColor(colors[currentIndex]);
//       }, 3000); // Change color every 3 seconds

//       return () => clearInterval(interval);
//     }
//   }, [location.pathname, path]);

//   return {
//     isActive: location.pathname === path,
//     activeColor: color
//   };
// };

// const Header: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleNavigation = (path: string) => {
//     setIsOpen(false);
//     navigate(path);
//   };

//   const homeRoute = useActiveRoute('/');
//   const scheduleRoute = useActiveRoute('/schedule');
//   const registerRoute = useActiveRoute('/register');
//   const sponsorsRoute = useActiveRoute('/sponsors');
//   const faqRoute = useActiveRoute('/faq');

//   return (
//     <header className="bg-white shadow-xl border-b border-gray-100/50 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           <Link to="/" onClick={() => setIsOpen(false)}>
//             <CULogo isDark isSmall/>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             <Link
//               to="/"
//               className={`transition-colors ${homeRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
//               style={homeRoute.isActive ? { color: homeRoute.activeColor } : undefined}
//             >
//               Home
//             </Link>
//             <Link
//               to="/schedule"
//               className={`transition-colors ${scheduleRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
//               style={scheduleRoute.isActive ? { color: scheduleRoute.activeColor } : undefined}
//             >
//               Schedule
//             </Link>
//             <Link
//               to="/register"
//               className={`transition-colors ${registerRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
//               style={registerRoute.isActive ? { color: registerRoute.activeColor } : undefined}
//             >
//               Register
//             </Link>
//             <Link
//               to="/sponsors"
//               className={`transition-colors ${sponsorsRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
//               style={sponsorsRoute.isActive ? { color: sponsorsRoute.activeColor } : undefined}
//             >
//               Sponsors
//             </Link>
//             <Link
//               to="/faq"
//               className={`transition-colors ${faqRoute.isActive ? 'font-semibold' : 'text-gray-600 hover:text-pink-500'}`}
//               style={faqRoute.isActive ? { color: faqRoute.activeColor } : undefined}
//             >
//               FAQ
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden w-10 h-10 flex items-center justify-center focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <div className="w-6 h-6 relative transform transition-all duration-300">
//               <span
//                 className={`absolute h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300
//                 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}
//                 style={{ top: '2px' }}
//               />
//               <span
//                 className={`absolute h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300
//                 ${isOpen ? 'opacity-0' : ''}`}
//                 style={{ top: '10px' }}
//               />
//               <span
//                 className={`absolute h-1 w-full bg-gray-800 rounded-lg transform transition-all duration-300
//                 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
//                 style={{ top: '18px' }}
//               />
//             </div>
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         <div
//           className={`md:hidden fixed inset-0 transform transition-transform duration-300 ease-in-out ${
//             isOpen ? 'translate-x-0' : 'translate-x-full'
//           }`}
//           style={{ top: '72px', backgroundColor: '#e31a90' }}
//         >
//           <nav className="flex flex-col p-4">
//             <button
//               onClick={() => handleNavigation('/')}
//               className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
//                 homeRoute.isActive ? 'bg-white/20 font-semibold' : ''
//               }`}
//             >
//               Home
//             </button>
//             <button
//               onClick={() => handleNavigation('/schedule')}
//               className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
//                 scheduleRoute.isActive ? 'bg-white/20 font-semibold' : ''
//               }`}
//             >
//               Schedule
//             </button>
//             <button
//               onClick={() => handleNavigation('/register')}
//               className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
//                 registerRoute.isActive ? 'bg-white/20 font-semibold' : ''
//               }`}
//             >
//               Register
//             </button>
//             <button
//               onClick={() => handleNavigation('/sponsors')}
//               className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
//                 sponsorsRoute.isActive ? 'bg-white/20 font-semibold' : ''
//               }`}
//             >
//               Sponsors
//             </button>
//             <button
//               onClick={() => handleNavigation('/faq')}
//               className={`text-xl py-4 px-4 text-white hover:bg-white/20 rounded-lg transition-colors ${
//                 faqRoute.isActive ? 'bg-white/20 font-semibold' : ''
//               }`}
//             >
//               FAQ
//             </button>

//             {/* Social Media Links */}
//             <div className="mt-auto border-t border-pink-400 pt-4 px-4">
//               <div className="flex justify-center space-x-6">
//                 <a
//                   href="https://linkedin.com/company/cu-build"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-pink-200 transition-colors"
//                 >
//                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                   </svg>
//                 </a>
//                 <a
//                   href="https://discord.gg/cubuild"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-white hover:text-pink-200 transition-colors"
//                 >
//                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// const CULogo: React.FC<{ isSmall?: boolean, isDark?: boolean }> = ({ isSmall, isDark }) => (
//   <img
//     src={isDark ? logoDark : logo}
//     alt="CU Build Logo"
//     className={isSmall ? 'h-12 w-22' : 'h-auto mx-auto mb-6 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80'}
//   />
// );

// const Home: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center">
//         <CULogo isDark />
//         <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
//           Join credit union professionals in building innovative solutions for our industry in a cooperative,
//           exciting, and competitive environment.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button
//             onClick={() => navigate('/register')}
//             className="py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             style={{backgroundColor: '#e31a90'}}
//           >
//             Register Now
//           </button>
//           <button
//             onClick={() => navigate('/about')}
//             className="py-4 px-8 rounded-xl font-bold text-lg transform transition-all duration-300 hover:scale-105 border-2 hover:bg-gray-50"
//             style={{borderColor: '#613395', color: '#613395'}}
//           >
//             Learn More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// const About: React.FC = () => {
//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">What is CU Build?</h3>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <p className="text-lg text-gray-600 leading-relaxed">
//               CU Build is an event known as a build-a-thon, where credit union professionals can participate
//               in building solutions for the CU industry in a cooperative, innovative, exciting, and competitive environment.
//             </p>
//             <p className="text-lg text-gray-600 leading-relaxed">
//               CU Build started as just an idea based on a first-hand experience at an American Airlines' Hackathon.
//               "What if we could have a hackathon like this in our industry, leveraging the cooperative principles?"
//               The idea turned to dreams and visions and lots of people have helped us along the way.
//             </p>
//             <div className="grid grid-cols-2 gap-4 mt-8">
//               <div className="text-center p-4 rounded-lg bg-opacity-90" style={{backgroundColor: '#e31a90'}}>
//                 <div className="text-3xl font-bold text-white mb-1">300+</div>
//                 <div className="text-sm text-white font-medium">Total Participants</div>
//               </div>
//               <div className="text-center p-4 rounded-lg bg-opacity-90" style={{backgroundColor: '#3baf49'}}>
//                 <div className="text-3xl font-bold text-white mb-1">5</div>
//                 <div className="text-sm text-white font-medium">Years Building</div>
//               </div>
//               <div className="text-center p-4 rounded-lg bg-opacity-90" style={{backgroundColor: '#52c2ec'}}>
//                 <div className="text-3xl font-bold text-white mb-1">20+</div>
//                 <div className="text-sm text-white font-medium">Sponsors</div>
//               </div>
//               <div className="text-center p-4 rounded-lg bg-opacity-90" style={{backgroundColor: '#613395'}}>
//                 <div className="text-3xl font-bold text-white mb-1">50+</div>
//                 <div className="text-sm text-white font-medium">Projects Built</div>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <div
//               className="group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-yellow-400 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
//               onMouseMove={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 const x = e.clientX - rect.left - rect.width / 2;
//                 const y = e.clientY - rect.top - rect.height / 2;
//                 e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
//               <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12"></div>
//               <div className="relative z-10">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
//                   <Lightbulb size={32} className="text-white" />
//                 </div>
//                 <h4 className="font-bold text-gray-800 mb-3 text-lg">Innovate</h4>
//                 <p className="text-gray-600 text-sm leading-relaxed">Build cutting-edge solutions that transform the credit union industry</p>
//               </div>
//             </div>

//             <div
//               className="group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-cyan-400 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
//               onMouseMove={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 const x = e.clientX - rect.left - rect.width / 2;
//                 const y = e.clientY - rect.top - rect.height / 2;
//                 e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
//               <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-cyan-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12"></div>
//               <div className="relative z-10">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-full flex items-center justify-center group-hover:animate-pulse">
//                   <Users size={32} className="text-white" />
//                 </div>
//                 <h4 className="font-bold text-gray-800 mb-3 text-lg">Collaborate</h4>
//                 <p className="text-gray-600 text-sm leading-relaxed">Work alongside industry experts and passionate professionals</p>
//               </div>
//             </div>

//             <div
//               className="group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-purple-500 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
//               onMouseMove={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 const x = e.clientX - rect.left - rect.width / 2;
//                 const y = e.clientY - rect.top - rect.height / 2;
//                 e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
//               <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12"></div>
//               <div className="relative z-10">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
//                   <Trophy size={32} className="text-white" />
//                 </div>
//                 <h4 className="font-bold text-gray-800 mb-3 text-lg">Compete</h4>
//                 <p className="text-gray-600 text-sm leading-relaxed">Win amazing prizes while pushing the boundaries of innovation</p>
//               </div>
//             </div>

//             <div
//               className="group relative p-6 rounded-2xl text-center cursor-pointer bg-white border-2 border-gray-100 hover:border-green-500 shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500"
//               onMouseMove={(e) => {
//                 const rect = e.currentTarget.getBoundingClientRect();
//                 const x = e.clientX - rect.left - rect.width / 2;
//                 const y = e.clientY - rect.top - rect.height / 2;
//                 e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
//               }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
//               <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-45 group-hover:rotate-12"></div>
//               <div className="relative z-10">
//                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:animate-pulse">
//                   <Users size={32} className="text-white" />
//                 </div>
//                 <h4 className="font-bold text-gray-800 mb-3 text-lg">Network</h4>
//                 <p className="text-gray-600 text-sm leading-relaxed">Connect with peers and build lasting professional relationships</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const eventDetails = {
//   date: 'October 15-16, 2024',
//   location: 'Innovation Center, Denver, CO',
//   capacity: '200 participants',
//   earlyBirdPrice: '$149',
//   regularPrice: '$199'
// };

// const Register: React.FC = () => {
//   const [ticketingMode, setTicketingMode] = useState('external');

//   const TicketingSection = () => {
//     if (ticketingMode === 'external') {
//       return (
//         <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
//           <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Reserve Your Spot</h3>
//           <div className="space-y-4 mb-6">
//             <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//               <span className="font-semibold">Early Bird</span>
//               <span className="text-2xl font-bold" style={{color: '#e31a90'}}>{eventDetails.earlyBirdPrice}</span>
//             </div>
//             <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
//               <span className="font-semibold">Regular</span>
//               <span className="text-2xl font-bold text-gray-600">{eventDetails.regularPrice}</span>
//             </div>
//           </div>
//           <button
//             className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
//             style={{backgroundColor: '#e31a90'}}
//           >
//             <ExternalLink size={20} />
//             Get Tickets
//           </button>
//         </div>
//       );
//     }

//     return (
//       <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
//         <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Secure Registration</h3>
//         <div className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               placeholder="First Name"
//               className="p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               className="p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
//             />
//           </div>
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
//           />
//           <input
//             type="text"
//             placeholder="Credit Union/Organization"
//             className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
//           />
//           <select className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition-colors">
//             <option>Select Ticket Type</option>
//             <option>Early Bird - {eventDetails.earlyBirdPrice}</option>
//             <option>Regular - {eventDetails.regularPrice}</option>
//           </select>
//           <button
//             onClick={() => console.log('Processing payment...')}
//             className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
//             style={{backgroundColor: '#3baf49'}}
//           >
//             <CreditCard size={20} />
//             Register & Pay
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-purple-50">
//       <div className="max-w-4xl mx-auto">
//         <h3 className="text-4xl font-bold text-center text-gray-800 mb-8">Join CU Build</h3>
//         <p className="text-center text-gray-600 mb-12 text-lg">
//           Limited spots available. Register now to secure your place in this innovative event.
//         </p>

//         {/* Ticketing Mode Toggle */}
//         <div className="flex justify-center mb-8">
//           <div className="bg-white p-1 rounded-xl shadow-lg">
//             <button
//               onClick={() => setTicketingMode('external')}
//               className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//                 ticketingMode === 'external'
//                   ? 'bg-pink-500 text-white'
//                   : 'text-gray-600 hover:text-pink-500'
//               }`}
//             >
//               External Ticketing
//             </button>
//             <button
//               onClick={() => setTicketingMode('integrated')}
//               className={`px-6 py-3 rounded-lg font-semibold transition-all ${
//                 ticketingMode === 'integrated'
//                   ? 'bg-pink-500 text-white'
//                   : 'text-gray-600 hover:text-pink-500'
//               }`}
//             >
//               Integrated Payment
//             </button>
//           </div>
//         </div>

//         <TicketingSection />
//       </div>
//     </section>
//   );
// };

// const Schedule: React.FC = () => {
//   return (
//     <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">Event Schedule</h3>
//         <div className="space-y-8">
//           <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
//             <h4 className="text-xl font-bold mb-4">Day 1 - October 15</h4>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">9:00 AM</span>
//                 <div>
//                   <h5 className="font-semibold">Registration & Welcome</h5>
//                   <p className="text-gray-600">Check-in, networking, and opening remarks</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">10:00 AM</span>
//                 <div>
//                   <h5 className="font-semibold">Team Formation</h5>
//                   <p className="text-gray-600">Form teams and brainstorm ideas</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">12:00 PM</span>
//                 <div>
//                   <h5 className="font-semibold">Lunch & Networking</h5>
//                   <p className="text-gray-600">Catered lunch and networking session</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">1:00 PM</span>
//                 <div>
//                   <h5 className="font-semibold">Build Time</h5>
//                   <p className="text-gray-600">Teams begin working on their projects</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">5:00 PM</span>
//                 <div>
//                   <h5 className="font-semibold">Day 1 Wrap-up</h5>
//                   <p className="text-gray-600">Progress check-in and evening announcements</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
//             <h4 className="text-xl font-bold mb-4">Day 2 - October 16</h4>
//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">9:00 AM</span>
//                 <div>
//                   <h5 className="font-semibold">Day 2 Kick-off</h5>
//                   <p className="text-gray-600">Morning announcements and continue building</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">12:00 PM</span>
//                 <div>
//                   <h5 className="font-semibold">Lunch Break</h5>
//                   <p className="text-gray-600">Final preparation time</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">2:00 PM</span>
//                 <div>
//                   <h5 className="font-semibold">Project Presentations</h5>
//                   <p className="text-gray-600">Teams present their solutions</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">4:00 PM</span>
//                 <div>
//                   <h5 className="font-semibold">Awards Ceremony</h5>
//                   <p className="text-gray-600">Winners announced and prizes awarded</p>
//                 </div>
//               </div>
//               <div className="flex items-start">
//                 <span className="text-gray-600 w-24">5:00 PM</span>
//                 <div>
//                   <h5 className="font-semibold">Closing Remarks</h5>
//                   <p className="text-gray-600">Event wrap-up and networking</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const Footer: React.FC = () => {
//   const homeRoute = useActiveRoute('/');
//   const scheduleRoute = useActiveRoute('/schedule');
//   const registerRoute = useActiveRoute('/register');
//   const sponsorsRoute = useActiveRoute('/sponsors');
//   const faqRoute = useActiveRoute('/faq');
//   const year2024Route = useActiveRoute('/2024');
//   const year2023Route = useActiveRoute('/2023');
//   const year2022Route = useActiveRoute('/2022');
//   const year2021Route = useActiveRoute('/2021');

//   return (
//     <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//           {/* Logo and Description - Full width on mobile */}
//           <div className="md:col-span-2 text-center md:text-left">
//             <div className='flex items-center justify-center md:justify-start gap-2 mb-4'>
//               <CULogo isSmall />
//             </div>
//             <p className="text-gray-400">
//               Building the future of credit unions through innovation and collaboration.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="text-center md:text-left">
//             <h5 className="font-semibold mb-4">Quick Links</h5>
//             <ul className="space-y-2 text-gray-400">
//               <li>
//                 <Link
//                   to="/"
//                   className={`transition-colors hover:text-white ${homeRoute.isActive ? 'font-semibold' : ''}`}
//                   style={homeRoute.isActive ? { color: homeRoute.activeColor } : undefined}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/schedule"
//                   className={`transition-colors hover:text-white ${scheduleRoute.isActive ? 'font-semibold' : ''}`}
//                   style={scheduleRoute.isActive ? { color: scheduleRoute.activeColor } : undefined}
//                 >
//                   Schedule
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/register"
//                   className={`transition-colors hover:text-white ${registerRoute.isActive ? 'font-semibold' : ''}`}
//                   style={registerRoute.isActive ? { color: registerRoute.activeColor } : undefined}
//                 >
//                   Register
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/sponsors"
//                   className={`transition-colors hover:text-white ${sponsorsRoute.isActive ? 'font-semibold' : ''}`}
//                   style={sponsorsRoute.isActive ? { color: sponsorsRoute.activeColor } : undefined}
//                 >
//                   Sponsors
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/faq"
//                   className={`transition-colors hover:text-white ${faqRoute.isActive ? 'font-semibold' : ''}`}
//                   style={faqRoute.isActive ? { color: faqRoute.activeColor } : undefined}
//                 >
//                   FAQ
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Previous Years */}
//           <div className="text-center md:text-left">
//             <h5 className="font-semibold mb-4">Previous Years</h5>
//             <ul className="space-y-2 text-gray-400">
//               <li>
//                 <Link
//                   to="/2024"
//                   className={`transition-colors hover:text-white ${year2024Route.isActive ? 'font-semibold' : ''}`}
//                   style={year2024Route.isActive ? { color: year2024Route.activeColor } : undefined}
//                 >
//                   2024
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/2023"
//                   className={`transition-colors hover:text-white ${year2023Route.isActive ? 'font-semibold' : ''}`}
//                   style={year2023Route.isActive ? { color: year2023Route.activeColor } : undefined}
//                 >
//                   2023
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/2022"
//                   className={`transition-colors hover:text-white ${year2022Route.isActive ? 'font-semibold' : ''}`}
//                   style={year2022Route.isActive ? { color: year2022Route.activeColor } : undefined}
//                 >
//                   2022
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/2021"
//                   className={`transition-colors hover:text-white ${year2021Route.isActive ? 'font-semibold' : ''}`}
//                   style={year2021Route.isActive ? { color: year2021Route.activeColor } : undefined}
//                 >
//                   2021
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact and Social */}
//           <div className="text-center md:text-left">
//             <h5 className="font-semibold mb-4">Contact</h5>
//             <ul className="space-y-2 text-gray-400">
//               <li>info@cubuild.com</li>
//               <li>(555) 123-4567</li>
//             </ul>
//             <div className="mt-6">
//               <h5 className="font-semibold mb-4">Follow Us</h5>
//               <div className="flex justify-center md:justify-start space-x-4">
//                 <a
//                   href="https://linkedin.com/company/cu-build"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                   </svg>
//                 </a>
//                 <a
//                   href="https://discord.gg/cubuild"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-colors"
//                 >
//                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                     <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; 2024 CU Build. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// const Sponsorship: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     organization: '',
//     email: '',
//     phone: '',
//     message: '',
//     interestedTier: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Sponsors</h2>

//         {/* Platinum Sponsors */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center mb-8" style={{color: '#e31a90'}}>Platinum Sponsors</h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
//             {[1, 2, 3].map((i) => (
//               <div key={`platinum-${i}`} className="w-full max-w-[300px] aspect-[3/2] bg-white rounded-lg shadow-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
//                 <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
//                   <span className="text-gray-400 text-lg font-semibold">Platinum Sponsor {i}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Gold Sponsors */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center mb-8 text-yellow-500">Gold Sponsors</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={`gold-${i}`} className="w-full max-w-[240px] aspect-[3/2] bg-white rounded-lg shadow-lg p-6 flex items-center justify-center transform hover:scale-105 transition-transform">
//                 <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
//                   <span className="text-gray-400 text-lg font-semibold">Gold Sponsor {i}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Partner Organizations */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center mb-8 text-purple-500">Partner Organizations</h3>
//           <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center justify-items-center">
//             {[1, 2, 3, 4, 5].map((i) => (
//               <div key={`partner-${i}`} className="w-full max-w-[200px] aspect-[3/2] bg-white rounded-lg shadow-lg p-4 flex items-center justify-center transform hover:scale-105 transition-transform">
//                 <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
//                   <span className="text-gray-400 text-sm font-semibold">Partner {i}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Integration Partners */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center mb-12 text-indigo-600">Integration Partners</h3>
//           <div className="space-y-8">
//             {/* Integration Partner 1 */}
//             <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all">
//               <div className="w-full md:w-1/4 aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center p-4">
//                 <span className="text-gray-400 text-lg font-semibold">Partner Logo 1</span>
//               </div>
//               <div className="w-full md:w-3/4">
//                 <h4 className="text-xl font-bold mb-3">Financial Core Integration</h4>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Integration Partner 2 */}
//             <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all">
//               <div className="w-full md:w-1/4 aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center p-4">
//                 <span className="text-gray-400 text-lg font-semibold">Partner Logo 2</span>
//               </div>
//               <div className="w-full md:w-3/4">
//                 <h4 className="text-xl font-bold mb-3">Payment Processing Solutions</h4>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Integration Partner 3 */}
//             <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all">
//               <div className="w-full md:w-1/4 aspect-[3/2] bg-gray-100 rounded-lg flex items-center justify-center p-4">
//                 <span className="text-gray-400 text-lg font-semibold">Partner Logo 3</span>
//               </div>
//               <div className="w-full md:w-3/4">
//                 <h4 className="text-xl font-bold mb-3">Digital Banking Platform</h4>
//                 <ul className="space-y-2 text-gray-600">
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-indigo-500 mr-2">•</span>
//                     Architecto beatae vitae dicta sunt explicabo nemo enim ipsam.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Sponsorship Opportunities</h2>

//         {/* Sponsorship Tiers */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
//           {/* Platinum Tier */}
//           <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 transform hover:scale-105 transition-transform">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Platinum</h3>
//               <p className="text-4xl font-bold" style={{color: '#e31a90'}}>$10,000</p>
//             </div>
//             <ul className="space-y-3 mb-8">
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Premier logo placement
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 5 event tickets
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Keynote speaking opportunity
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Dedicated mentorship station
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Social media promotion
//               </li>
//             </ul>
//           </div>

//           {/* Gold Tier */}
//           <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 transform hover:scale-105 transition-transform">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Gold</h3>
//               <p className="text-4xl font-bold text-yellow-500">$5,000</p>
//             </div>
//             <ul className="space-y-3 mb-8">
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Logo on event materials
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 3 event tickets
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Workshop session
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Mentorship opportunities
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Brand recognition
//               </li>
//             </ul>
//           </div>

//           {/* Partner Organizations */}
//           <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 transform hover:scale-105 transition-transform">
//             <div className="text-center mb-6">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">Partner</h3>
//               <p className="text-4xl font-bold text-purple-500">Contact Us</p>
//             </div>
//             <ul className="space-y-3 mb-8">
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Logo on website
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 1 event ticket
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Networking opportunities
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Community involvement
//               </li>
//               <li className="flex items-center">
//                 <span className="text-green-500 mr-2">✓</span>
//                 Resource sharing
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100">
//           <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Become a Sponsor</h3>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
//                 <input
//                   type="text"
//                   name="organization"
//                   value={formData.organization}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Interested Tier</label>
//               <select
//                 name="interestedTier"
//                 value={formData.interestedTier}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
//                 required
//               >
//                 <option value="">Select a tier</option>
//                 <option value="platinum">Platinum</option>
//                 <option value="gold">Gold</option>
//                 <option value="partner">Partner Organization</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 rows={4}
//                 className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full py-4 px-6 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//               style={{backgroundColor: '#e31a90'}}
//             >
//               Submit Inquiry
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// const FAQ: React.FC = () => {
//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <CULogo isDark />
//           <h2 className="text-4xl font-bold text-gray-800 mt-8 mb-4">Frequently Asked Questions</h2>
//           <p className="text-xl text-gray-600">Find answers to common questions about CU Build</p>
//         </div>

//         <div className="space-y-8">
//           <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
//             <h3 className="text-xl font-bold mb-3" style={{color: '#e31a90'}}>What is CU Build?</h3>
//             <p className="text-gray-600">
//               CU Build is an event known as a build-a-thon, where credit union professionals can participate
//               in building solutions for the CU industry in a cooperative, innovative, exciting, and competitive environment.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
//             <h3 className="text-xl font-bold mb-3" style={{color: '#e31a90'}}>Who can participate?</h3>
//             <p className="text-gray-600">
//               Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
//             <h3 className="text-xl font-bold mb-3" style={{color: '#e31a90'}}>What should I bring?</h3>
//             <p className="text-gray-600">
//               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
//             <h3 className="text-xl font-bold mb-3" style={{color: '#e31a90'}}>What can I win?</h3>
//             <p className="text-gray-600">
//               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
//             <h3 className="text-xl font-bold mb-3" style={{color: '#e31a90'}}>Do I need to be technical?</h3>
//             <p className="text-gray-600">
//               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
//             <h3 className="text-xl font-bold mb-3" style={{color: '#e31a90'}}>How are teams formed?</h3>
//             <p className="text-gray-600">
//               Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
//             </p>
//           </div>
//         </div>

//         {/* Contact Section */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
//           <p className="text-gray-600 mb-8">
//             Can't find the answer you're looking for? Please contact our support team.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-block py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//             style={{backgroundColor: '#e31a90'}}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// interface TeamMember {
//   name: string;
//   role: string;
// }

// interface WinningTeam {
//   teamName: string;
//   projectName: string;
//   description: string;
//   track: string;
//   prize?: string;
//   members: TeamMember[];
// }

// interface PastEventProps {
//   year: string;
//   winningTeams: WinningTeam[];
// }

// const getRandomPrimaryColor = () => {
//   const colors = [
//     { base: '#e31a90', light: 'rgba(227, 26, 144, 0.1)' }, // Pink
//     { base: '#613395', light: 'rgba(97, 51, 149, 0.1)' },  // Purple
//     { base: '#3baf49', light: 'rgba(59, 175, 73, 0.1)' },  // Green
//     { base: '#52c2ec', light: 'rgba(82, 194, 236, 0.1)' }, // Cyan
//     { base: '#f6de08', light: 'rgba(246, 222, 8, 0.1)' }   // Yellow
//   ];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// const PastEvent: React.FC<PastEventProps> = ({ year, winningTeams }) => {
//   const [backgroundColor] = useState(getRandomPrimaryColor());

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8">
//       <style>
//         {`
//           @keyframes shimmer {
//             0% {
//               background-position: 0% 50%;
//             }
//             50% {
//               background-position: 100% 50%;
//             }
//             100% {
//               background-position: 0% 50%;
//             }
//           }

//           .shimmer-bg {
//             background: linear-gradient(
//               120deg,
//               ${backgroundColor.light} 0%,
//               white 25%,
//               ${backgroundColor.light} 50%,
//               white 75%,
//               ${backgroundColor.light} 100%
//             );
//             background-size: 200% 200%;
//             animation: shimmer 15s ease-in-out infinite;
//           }
//         `}
//       </style>

//       <div className="max-w-7xl mx-auto">
//         <div className="shimmer-bg rounded-3xl mb-20">
//           <div className="max-w-7xl mx-auto py-16">
//             <div className="text-center">
//               <CULogo isDark />
//               <h2 className="text-4xl font-bold mt-8 mb-4" style={{color: backgroundColor.base}}>
//                 CU Build {year}
//               </h2>
//               <p className="text-xl text-gray-600">Celebrating innovation and collaboration</p>
//             </div>
//           </div>
//         </div>

//         {/* Winning Teams Section */}
//         <div className="mb-20">
//           <h3 className="text-3xl font-bold text-center mb-12" style={{color: '#e31a90'}}>Winning Teams</h3>
//           <div className="space-y-8">
//             {winningTeams.map((team, index) => (
//               <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
//                 <div className="flex flex-col lg:flex-row gap-8">
//                   <div className="lg:w-2/3">
//                     <h4 className="text-2xl font-bold mb-2">{team.teamName}</h4>
//                     <p className="text-xl text-gray-600 mb-4">{team.projectName}</p>
//                     <div className="mb-4">
//                       <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
//                         style={{backgroundColor: '#e31a90', color: 'white'}}>
//                         {team.track}
//                       </span>
//                       {team.prize && (
//                         <span className="inline-block ml-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
//                           {team.prize}
//                         </span>
//                       )}
//                     </div>
//                     <p className="text-gray-600 mb-6">{team.description}</p>
//                     <div className="flex flex-wrap gap-3">
//                       {team.members.map((member, idx) => (
//                         <div key={idx} className="px-3 py-1 rounded-lg bg-gray-100 text-gray-600 text-sm">
//                           {member.name} - {member.role}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="lg:w-1/3">
//                     <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
//                       <span className="text-gray-400">Project Screenshot</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Sponsors Section */}
//         <div>
//           <h3 className="text-3xl font-bold text-center mb-12">Our {year} Sponsors</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {Array.from({ length: 8 }).map((_, index) => (
//               <div key={index} className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
//                 <span className="text-gray-400">Sponsor Logo</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Sample data for each year
// const data2024 = {
//   winningTeams: [
//     {
//       teamName: "Innovation Squad",
//       projectName: "Smart Credit",
//       description: "A revolutionary AI-powered credit assessment tool that helps credit unions make faster, more accurate lending decisions.",
//       track: "Financial Technology",
//       prize: "First Place",
//       members: [
//         { name: "Jane Smith", role: "Lead Developer" },
//         { name: "John Doe", role: "UI/UX Designer" },
//         { name: "Sarah Johnson", role: "Business Analyst" }
//       ]
//     },
//     // Add more teams as needed
//   ]
// };

// const data2023 = {
//   winningTeams: [
//     {
//       teamName: "Digital Pioneers",
//       projectName: "MemberConnect",
//       description: "An innovative platform that enhances member engagement through personalized communication channels.",
//       track: "Member Experience",
//       prize: "Grand Prize",
//       members: [
//         { name: "Mike Wilson", role: "Project Manager" },
//         { name: "Lisa Chen", role: "Full Stack Developer" },
//         { name: "Tom Brown", role: "Data Scientist" }
//       ]
//     },
//     // Add more teams as needed
//   ]
// };

// const data2022 = {
//   winningTeams: [
//        {
//       teamName: "Future Finance",
//       projectName: "SecureShare",
//       description: "A blockchain-based solution for secure document sharing between credit unions.",
//       track: "Security",
//       prize: "Innovation Award",
//       members: [
//         { name: "Alex Rivera", role: "Blockchain Developer" },
//         { name: "Emma White", role: "Security Expert" },
//         { name: "Chris Taylor", role: "UI Developer" }
//       ]
//     },
//     // Add more teams as needed
//   ]
// };

// const data2021 = {
//   winningTeams: [
//     {
//       teamName: "Tech Transformers",
//       projectName: "CommunityBoost",
//       description: "A community engagement platform that gamifies financial education and rewards member participation.",
//       track: "Community Impact",
//       prize: "People's Choice",
//       members: [
//         { name: "David Park", role: "Game Designer" },
//         { name: "Rachel Green", role: "Community Manager" },
//         { name: "James Wilson", role: "Backend Developer" }
//       ]
//     },
//     // Add more teams as needed
//   ]
// };

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
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
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
              </>
            }
          />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sponsors" element={<Sponsorship />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/2024" element={<PastEvent year="2024" winningTeams={data2024.winningTeams} />} />
          <Route path="/2023" element={<PastEvent year="2023" winningTeams={data2023.winningTeams} />} />
          <Route path="/2022" element={<PastEvent year="2022" winningTeams={data2022.winningTeams} />} />
          <Route path="/2021" element={<PastEvent year="2021" winningTeams={data2021.winningTeams} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
