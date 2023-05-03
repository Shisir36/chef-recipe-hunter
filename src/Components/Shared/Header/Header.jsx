import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const {user} = useContext(AuthContext)
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={handleMenuClick}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1 className="text-green-400 font-bold md:text-4xl lg:text-4xl text-2xl">
                The Chief's Pantry
              </h1>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  exact
                  activeClassName="bg-gray-900 text-white"
                  className={({isActive})=> isActive ? "text-green-600 px-3 py-2 rounded-md "  : 'text-white px-3 py-2 rounded-md hover:bg-gray-700 '}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blog"
                  activeClassName="bg-gray-900 text-white"
                  className={({isActive})=> isActive ? "text-green-600 px-3 py-2 rounded-md "  : 'text-white px-3 py-2 rounded-md hover:bg-gray-700 '}
                >
                  Blog
                </NavLink>

              </div>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/40"
              alt="user"
              className="w-8 h-8 rounded-full"
              />
                <NavLink
                  to="/login"
                  activeClassName="bg-gray-900 text-white"
                  className={({isActive})=> isActive ? "text-green-600 px-3 py-2 rounded-md "  : 'text-white px-3 py-2 rounded-md hover:bg-gray-700 '}
                >
                  Login
                </NavLink>
              </div>
              </div>
              </div>
              {/* Mobile menu, show/hide based on menu state */}
              {isMenuOpen && (
              <div className="sm:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
              <NavLink
                         to="/"
                         exact
                         activeClassName="bg-gray-900 text-white"
                         className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                       >
              Home
              </NavLink>
              <NavLink
                         to="/blog"
                         activeClassName="bg-gray-900 text-white"
                         className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                       >
              Blog
              </NavLink>
              <NavLink
                         to="/login"
                         activeClassName="bg-gray-900 text-white"
                         className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                       >
              Login
              </NavLink>
              </div>
              </div>
              )}
              </nav>
    
    );
};

export default Header;