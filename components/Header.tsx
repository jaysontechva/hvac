import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="bg-brand-blue text-white text-xs py-2 px-4 text-center md:flex md:justify-between md:items-center">
        <span>Serving New York & Surrounding Areas</span>
        <div className="flex gap-4 justify-center mt-1 md:mt-0">
          <a href="tel:+639282300210" className="hover:text-brand-gray font-bold">📞 +639282300210</a>
          <a href="mailto:jaysonramosp@gmail.com" className="hover:text-brand-gray">✉️ jaysonramosp@gmail.com</a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-black text-brand-blue flex items-center gap-1 tracking-tighter">
          Jayson<span className="text-brand-red">R</span>
          <span className="text-sm font-normal text-gray-500 ml-1 mt-2">HVAC</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-bold uppercase tracking-wide transition-colors ${isActive(link.path) ? 'text-brand-red' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/landing">
            <Button variant="primary" className="py-2 px-4 text-sm">
              Get Quote
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-brand-blue focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-lg font-medium ${isActive(link.path) ? 'text-brand-red' : 'text-gray-800'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/landing" onClick={() => setIsOpen(false)}>
              <Button fullWidth>Get Quote</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};