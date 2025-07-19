import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
import { faqData } from '../../utils/data/faq';
import { colors } from '../../utils/data/colors';

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
          {Object.entries(faqData).map(([key, value]) => (
            <div key={key} className="bg-white p-6 rounded-xl shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-bold mb-3" style={{ color: colors.pink }}>
                {value.question}
              </h3>
              <p className="text-gray-600">{value.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-8">Can't find the answer you're looking for? Please contact our support team.</p>
          <Link
            to="/contact"
            className="inline-block py-4 px-8 rounded-xl font-bold text-white text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: colors.pink }}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
