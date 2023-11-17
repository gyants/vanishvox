import React from 'react'

const VBox =
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clip-rule="evenodd" d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM22.1777 8.03395V7.61719C21.9697 7.63108 21.727 7.64497 21.4496 7.65886C21.186 7.67275 20.9017 7.6797 20.5966 7.6797C20.1666 7.6797 19.7435 7.67275 19.3274 7.65886C18.9113 7.64497 18.4675 7.63108 17.9959 7.61719V8.03395C18.5646 8.04784 19.0015 8.18676 19.3066 8.4507C19.6118 8.71465 19.7574 9.1453 19.7435 9.74266C19.7297 10.34 19.5355 11.1596 19.161 12.2015L16.6013 19.1125L12.9403 9.78433C12.7461 9.29811 12.6629 8.93692 12.6906 8.70076C12.7184 8.4507 12.8571 8.284 13.1067 8.20065C13.3564 8.10341 13.7032 8.04784 14.147 8.03395V7.61719C13.8002 7.63108 13.3425 7.64497 12.7739 7.65886C12.2191 7.67275 11.6227 7.6797 10.9846 7.6797C10.416 7.6797 9.84729 7.67275 9.27862 7.65886C8.72382 7.64497 8.23837 7.63108 7.82227 7.61719V8.03395C8.03032 8.04784 8.25224 8.15203 8.48803 8.34651C8.72382 8.52711 8.9388 8.86746 9.13298 9.36757L14.4383 22.4121C14.5492 22.3982 14.6671 22.3913 14.792 22.3913H15.1456H15.5201C15.645 22.3913 15.7629 22.3982 15.8738 22.4121L20.2637 10.5137C20.5549 9.72182 20.867 9.13835 21.1999 8.76327C21.5466 8.38819 21.8726 8.14508 22.1777 8.03395Z" fill="white"/>
    </svg>


const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0 bg-purple-700 py-4 font-playfair-display shadow-lg font-playfairDisplay">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex justify-center text-white text-2xl font-semibold" style={{ textShadow: '0 0 5px rgba(255,255,255,0.3)' }}>
        VanishVox
          </div>
      </div>
    </nav>
  );
};

export default Navbar