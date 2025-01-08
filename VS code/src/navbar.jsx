import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyLogo</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#services" className="hover:text-teal-400">Services</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
