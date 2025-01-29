'use client'; // Add this line at the top of the file

import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For dropdown toggling
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile menu

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-lg">
      <nav className="container flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" id="logo" className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-black transition duration-300 transform hover:scale-105">
            Cultural India
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Explore", "About", "Contact"].map((text) => (
            <a
              key={text}
              href={`/${text.toLowerCase()}`}
              id={`${text.toLowerCase()}-link`}
              className="px-4 py-2 text-sm font-medium text-black hover:text-orange-500 hover:scale-105 transition duration-300"
            >
              {text}
            </a>
          ))}
        </div>

        {/* Search Bar (Desktop) */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            id="search-bar"
            className="px-4 py-2 rounded-full bg-white text-black border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          />
        </div>

        {/* Login/Signup and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Login/Signup Dropdown */}
          <div className="relative">
            <button
              id="login-signup-btn"
              onClick={toggleDropdown}
              className="text-white bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Login
            </button>
            {/* Dropdown Menu for Login/Signup */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-300">
                <a
                  href="/login"
                  id="login-btn"
                  className="block px-4 py-2 text-sm font-medium text-black hover:bg-orange-100 hover:scale-105 transition duration-300"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  id="signup-btn"
                  className="block px-4 py-2 text-sm font-medium text-black hover:bg-orange-100 hover:scale-105 transition duration-300"
                >
                  Signup
                </a>
              </div>
            )}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (Dropdown Menu) */}
      <div
        className={`md:hidden flex flex-col items-center bg-white p-4 space-y-4 shadow-md ${isMobileMenuOpen ? "block" : "hidden"}`}
      >
        {["Home", "Explore", "About", "Contact"].map((text) => (
          <a
            key={text}
            href={`/${text.toLowerCase()}`}
            id={`${text.toLowerCase()}-mobile-link`}
            className="px-4 py-2 text-sm font-medium text-black hover:text-orange-500 hover:scale-105 transition duration-300"
          >
            {text}
          </a>
        ))}
        <div className="w-full">
          {/* Mobile Login/Signup */}
          <button
            onClick={toggleDropdown}
            className="w-full text-white bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
          >
            Login
          </button>
          {/* Mobile Dropdown for Login/Signup */}
          {isDropdownOpen && (
            <div className="flex flex-col items-center mt-2 space-y-2">
              <a
                href="/login"
                id="mobile-login-btn"
                className="w-full text-sm font-medium text-black bg-orange-100 py-2 rounded-full hover:bg-orange-200 hover:scale-105 transition duration-300"
              >
                Login
              </a>
              <a
                href="/signup"
                id="mobile-signup-btn"
                className="w-full text-sm font-medium text-black bg-orange-100 py-2 rounded-full hover:bg-orange-200 hover:scale-105 transition duration-300"
              >
                Signup
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
