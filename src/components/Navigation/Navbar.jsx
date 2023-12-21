import { NavLink } from 'react-router-dom';
import { HiGlobeAlt } from 'react-icons/hi';
import React from 'react';
import { navLinks } from '../../data/data';

function Navbar() {
  return (
    <nav className="p-1 fixed z-50 w-full h-16 max-w-lg -translate-x-1/2  rounded-lg bottom-4 left-1/2 backdrop-blur-md backdrop-invert-[.84]">
      <div className="flex h-full max-w-lg mx-auto p-1 border text-white font-bold rounded-lg">
        <div className="flex justify-center items-center">
          <NavLink to="/" className="p-2">
            <HiGlobeAlt className="animate-spin" />
          </NavLink>
        </div>
        <div className="flex-1 flex justify-around items-center font-incon tracking-wider uppercase">
          {navLinks.map((link) => (
            <NavLink key={link.id} to={link.path} className="p-2 text-sm">
              {link.text}
            </NavLink>
          ))}
          <NavLink to="/contact" className="p-2 border rounded-md">
            03.contacts
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
