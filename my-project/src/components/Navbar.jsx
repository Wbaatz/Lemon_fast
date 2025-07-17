import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='mx-5'>
      <nav className="flex items-center justify-between p-4  bg-white ">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://placehold.co/40x40/FFD700/000?text=LL"
            alt="Little Lemon Logo"
            className="h-10 mr-2 rounded-full"
          />
          <span className="text-xl font-bold text-yellow-600">LITTLE LEMON</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-semibold">
          <Link to="/" className="hover:text-yellow-600">Home</Link>
          <Link to="/About" className="hover:text-yellow-600">About</Link>
          <Link to="/Menu" className="hover:text-yellow-600">Menu</Link>
          <Link to="/Reservations" className="hover:text-yellow-600">Reservations</Link>
          <Link to="/Order" className="hover:text-yellow-600">Order Online</Link>
          <Link to="/Login" className="hover:text-yellow-600">Login</Link>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-2 text-gray-700 font-semibold">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-600">Home</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-600">About</Link>
          <Link to="/Menu" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-600">Menu</Link>
          <Link to="/Reservations" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-600">Reservations</Link>
          <Link to="/Order" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-600">Order Online</Link>
          <Link to="/Login" onClick={() => setMenuOpen(false)} className="block hover:text-yellow-600">Login</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
