// Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <header className="bg-white shadow-md mb-2">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <Link to="/dashboard" className="text-xl font-bold text-gray-800">
          MOMENTUM
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/dashboard"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/residences"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Residences
          </Link>
          <Link
            to="/documents"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            Documents
          </Link>
        </div>

        {/* User Info and Logout (Desktop) */}
        <div className="hidden md:flex items-center">
          <span className="text-gray-600 mr-4">User</span>
          <button
            onClick={onLogout}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Logout
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-gray-800 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Side Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Side drawer */}
          <div className="absolute inset-0 flex justify-end">
            <div className="bg-white w-64 h-full p-4">
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-800 focus:outline-none mb-4"
              >
                {/* Close Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={handleMenuItemClick}
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/residences"
                  onClick={handleMenuItemClick}
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Residences
                </Link>
                <Link
                  to="/documents"
                  onClick={handleMenuItemClick}
                  className="text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  Documents
                </Link>
                {/* User Info and Logout */}
                <div className="mt-6">
                  <span className="text-gray-600 mr-4">User</span>
                  <button
                    onClick={() => {
                      handleMenuItemClick();
                      onLogout();
                    }}
                    className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
