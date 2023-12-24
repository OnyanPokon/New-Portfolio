import { NavLink } from 'react-router-dom';
import { HiGlobeAlt } from 'react-icons/hi';
import { React } from 'react';
import { navLinks } from '../../data/data';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="p-1 fixed z-50 w-full h-16 md:max-w-lg max-w-xs -translate-x-1/2  rounded-lg bottom-4 left-1/2 bg-black">
      <div className="flex h-full md:max-w-lg max-w-xs mx-auto p-1 border text-white rounded-lg">
        <div className="flex justify-center items-center">
          <NavLink to="/" className="p-2">
            <HiGlobeAlt className="animate-spin" />
          </NavLink>
        </div>
        <div className="flex-1 flex justify-around items-center font-incon tracking-wider uppercase ">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              className="p-2 text-xs md:text-sm rounded-md"
              onClick={() => scrollToSection(link.path.slice(1))}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
