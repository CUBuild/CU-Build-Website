import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Home, About, Schedule, Register, Sponsorship, FAQ, PastEvent, Footer } from './components';
import data2021 from './utils/data/past/2021.json';
import data2022 from './utils/data/past/2022.json';
import data2023 from './utils/data/past/2023.json';
import data2024 from './utils/data/past/2024.json';

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
    // <Router basename="/CU-Build-Website/">
    <Router basename={import.meta.env.BASE_URL}>
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
          {/* TODO: create a last years specific tab once the event is over */}
          <Route path="/2021" element={<PastEvent data={data2021} />} />
          <Route path="/2022" element={<PastEvent data={data2022} />} />
          <Route path="/2023" element={<PastEvent data={data2023} />} />
          <Route path="/2024" element={<PastEvent data={data2024} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
