import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  "Sports",
  "Travel",
  "Business",
  "Technology",
  "Entertainment",
  "Health",
  "Culture",
];

const Header = ({ setCategory, setSearchQuery }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = () => {
    setSearchQuery(searchInput);
    navigate(`/${searchInput}`);
  };

  return (
    <header className="bg-primary text-white px-2 md:px-6 py-3 md:py-5 flex justify-between items-center w-full sticky top-0 left-0 z-50 shadow-2xl">
      <Link to="/" className="text-xl md:text-3xl font-bold">
        NEWS
      </Link>
      <nav className="hidden md:flex space-x-4">
        {navItems.map((item, index) => {
          const isActive = location.pathname === `/${item.toLowerCase()}`;
          return (
            <button
              key={index}
              onClick={() => {
                setCategory(item);
                navigate(`/${item.toLowerCase()}`);
              }}
              className={`text-lg  uppercase relative ${
                isActive ? "font-semibold  " : "hover:underline underline-offset-8"
              }`}
            >
              {item}
              {isActive && (
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-white" />
              )}
            </button>
          );
        })}
      </nav>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          name="search"
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="p-1 rounded-sm w-[120px] md:w-3/4 text-black border border-white"
        />
        <FaSearch className="cursor-pointer" onClick={handleSearch} />
        <FaBars
          className="cursor-pointer md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        />
      </div>
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-red-600 flex flex-col items-center justify-center md:hidden transition-transform transform translate-x-0 overflow-y-auto">
          <FaTimes
            className="text-5xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav className="flex flex-col space-y-1 mt-4">
            {navItems.map((item, index) => {
              const isActive = location.pathname === `/${item.toLowerCase()}`;
              return (
                <button
                  key={index}
                  onClick={() => {
                    setCategory(item);
                    setIsMobileMenuOpen(false);
                    navigate(`/${item.toLowerCase()}`);
                  }}
                  className={`text-2xl my-6 ${
                    isActive ? "font-semibold " : "hover:underline"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
