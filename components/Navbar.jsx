import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-700 py-4 font-playfair-display shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-white text-2xl font-semibold" style={{ textShadow: '0 0 5px rgba(255,255,255,0.3)' }}>
            VanishVox
          </div>
      </div>
    </nav>
  );
};

export default Navbar