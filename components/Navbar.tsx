import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gbh-black text-white border-b-4 border-gbh-red shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src="/images/logo-gbh-3d.svg" alt="GBH" className="h-10 w-auto" />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tighter leading-none">GBH DOOR</span>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">Systèmes industriels</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-gbh-red ${
                    isActive ? 'text-gbh-red' : 'text-gray-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink 
              to="/contact"
              className="bg-gbh-red hover:bg-red-700 text-white px-5 py-2 rounded-sm font-semibold text-sm uppercase transition-colors"
            >
              Devis
            </NavLink>
          </div>

          {/* Mobile Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gbh-dark border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium rounded-md ${
                    isActive ? 'bg-gbh-black text-gbh-red' : 'text-gray-300 hover:text-white hover:bg-gbh-black'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;