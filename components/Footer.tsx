import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white pt-12">
      <div className="container mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-black mb-4">Jayson<span className="text-brand-red">R</span></h3>
          <p className="text-gray-300 text-sm mb-4">
            Leading the way in residential and commercial HVAC solutions. Quality service you can trust, prices you can afford.
          </p>
          <div className="flex gap-4">
            {/* Social Mockups */}
            <a href="https://linkedin.com" className="bg-white/10 p-2 rounded hover:bg-brand-red transition">LI</a>
            <a href="#" className="bg-white/10 p-2 rounded hover:bg-brand-red transition">FB</a>
            <a href="#" className="bg-white/10 p-2 rounded hover:bg-brand-red transition">IG</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-brand-red">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/services" className="hover:text-white">AC Installation</Link></li>
            <li><Link to="/services" className="hover:text-white">Heater Repair</Link></li>
            <li><Link to="/services" className="hover:text-white">Duct Cleaning</Link></li>
            <li><Link to="/services" className="hover:text-white">Commercial HVAC</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-brand-red">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing Packages</Link></li>
            <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-4 text-brand-red">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span>📍</span> New York, USA
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span> <a href="tel:+639282300210">+639282300210</a>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span> <a href="mailto:jaysonramosp@gmail.com">jaysonramosp@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-black/20 py-4 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} JaysonR HVAC. All Rights Reserved.
      </div>
    </footer>
  );
};