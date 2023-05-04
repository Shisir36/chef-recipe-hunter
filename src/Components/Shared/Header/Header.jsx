import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const {user, logout} = useContext(AuthContext)
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () =>{
    logout()
    .then()
    .catch(error => console.log(error))
  }
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
               <Link to = "/">Chief's Pantry</Link>
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
              src={user? user.photoURL : "data:image/png;base64,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"}
              alt="user"
              className="w-10 h-10 rounded-full"
             title={user?.displayName} />
   {user ? (
        <div className="hidden sm:flex sm:items-center sm:ml-6">
          <button
            onClick={handleLogout}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-green-600 hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:ring ring-green-300 disabled:opacity-50"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="hidden sm:block sm:ml-6">
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
            >
              Register
            </Link>
          </div>
        </div>
      )}
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
      {user ? (
        <div className="block sm:hidden">
          <button
            onClick={handleLogout}
            className="block w-full px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-green-600 hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:ring ring-green-300 disabled:opacity-50"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="block sm:hidden">
          <div className="flex space-x-4">
            <Link
              to="/login"
              className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white px-3 py-2 rounded-md hover:bg-gray-700"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </div>
  </div>
)}

 </nav>
    
    );
};

export default Header;