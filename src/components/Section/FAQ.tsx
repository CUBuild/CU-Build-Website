import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Logo isDark />
          <h2 className="text-4xl font-bold text-gray-800 mt-8 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about CU Build</p>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#e31a90' }}>
              What is CU Build?
            </h3>
            <p className="text-gray-600">
              CU Build is an event known as a build-a-thon, where credit union professionals can participate in building solutions for the CU industry
              in a cooperative, innovative, exciting, and competitive environment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#e31a90' }}>
              Who can participate?
            </h3>
            <p className="text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#e31a90' }}>
              What should I bring?
            </h3>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#e31a90' }}>
              What can I win?
            </h3>
            <p className="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#e31a90' }}>
              Do I need to be technical?
            </h3>
            <p className="text-gray-600">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold mb-3" style={{ color: '#e31a90' }}>
              How are teams formed?
            </h3>
            <p className="text-gray-600">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">Can't find the answer you're looking for? Please contact our support team.</p>
          <Link
            to="/contact"
            className="inline-block py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: '#e31a90' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
