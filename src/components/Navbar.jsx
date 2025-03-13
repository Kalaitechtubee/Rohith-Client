


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaSignInAlt,
  FaUserShield,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaFilter,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = storedCart.reduce((total, item) => total + item.quantity, 0);
    setCartItems(totalItems);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(category === "all" ? "/" : `/${category}`);
    localStorage.setItem("selectedCategory", category);
    setIsFilterOpen(false); // Close filter after selection
  };

  return (
    <nav className="fixed top-0 z-50 w-full shadow-lg bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 bg-opacity-90">
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-white md:text-3xl">
          🍰 DD Bakery
        </Link>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-6 lg:flex">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={toggleFilter}
              aria-label="Filter Products"
              className="flex items-center px-4 py-2 text-black transition bg-white rounded-full shadow-md hover:bg-gray-100"
            >
              <FaFilter className="mr-2" /> Filter
            </button>

            {isFilterOpen && (
              <div className="absolute right-0 w-48 p-3 space-y-2 bg-white rounded-lg shadow-lg top-12">
                {["all", "cakes", "donuts", "cookies", "special-items"].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 transition ${
                      selectedCategory === category ? "bg-gray-300 font-semibold" : ""
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Admin Button */}
          <Link
            to="/admin-login"
            className="flex items-center px-5 py-2 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
          >
            <FaUserShield className="mr-2" /> Admin
          </Link>

          {/* Login Button */}
          <Link
            to="/user-login"
            className="flex items-center px-5 py-2 text-white transition bg-green-500 rounded-full hover:bg-green-600"
          >
            <FaSignInAlt className="mr-2" /> Login
          </Link>

          {/* Cart Button */}
          <Link to="/cart" className="relative flex items-center">
            <button className="flex items-center px-5 py-2 text-black transition bg-white rounded-full shadow-md hover:bg-gray-100">
              <FaShoppingCart className="mr-2" size={22} />
              Cart
            </button>
            {cartItems > 0 && (
              <span className="absolute px-2 text-xs font-bold text-white bg-red-600 rounded-full -top-2 -right-2">
                {cartItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-6 text-white py-6 transition-all ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="/" onClick={toggleMenu} className="text-2xl font-bold transition hover:text-gray-300">
          Home
        </Link>

        {/* Admin Button */}
        <Link
          to="/admin-login"
          className="flex items-center px-6 py-3 text-white transition bg-blue-600 rounded-full hover:bg-blue-700"
        >
          <FaUserShield className="mr-2" /> Admin
        </Link>

        {/* Login Button */}
        <Link
          to="/user-login"
          className="flex items-center px-6 py-3 text-white transition bg-green-500 rounded-full hover:bg-green-600"
        >
          <FaSignInAlt className="mr-2" /> Login
        </Link>

        {/* Cart Button */}
        <Link to="/cart" className="relative flex items-center">
          <button className="flex items-center px-6 py-3 text-black transition bg-white rounded-full shadow-md hover:bg-gray-100">
            <FaShoppingCart className="mr-2" size={24} />
            Cart
          </button>
          {cartItems > 0 && (
            <span className="absolute px-3 text-sm font-bold text-white bg-red-600 rounded-full -top-2 -right-2">
              {cartItems}
            </span>
          )}
        </Link>

        {/* Mobile Filter Section */}
        <div className="w-3/4">
          <button
            onClick={toggleFilter}
            className="flex items-center justify-center w-full py-3 text-black transition bg-white rounded-lg shadow-md hover:bg-gray-100"
          >
            <FaFilter className="mr-2" /> Filter Products
          </button>

          {isFilterOpen && (
            <div className="p-3 mt-3 space-y-2 text-black bg-white rounded-lg shadow-lg">
              {["all", "cakes", "donuts", "cookies", "special-items"].map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full text-left px-4 py-2 rounded-lg hover:bg-gray-200 transition ${
                    selectedCategory === category ? "bg-gray-300 font-semibold" : ""
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}
        </div>

        <button onClick={toggleMenu} className="mt-4 text-lg text-gray-300">
          Close Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

