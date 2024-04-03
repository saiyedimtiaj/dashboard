import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import logo from "../../assets/Capture2-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHelpHovered, setIsHelpHovered] = useState(false);
  const [isAccountHovered, setIsAccountHovered] = useState(false);

  return (
    <nav className="container mx-auto">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center pl-3">
          <img className="h-8 w-auto" src={logo} alt="Workflow" />
        </div>
        <div className="flex items-center pr-3">
          <div className="hidden sm:ml-6 sm:flex items-center">
            <li className="px-3 py-2 cursor-pointer list-none text-black text-sm font-medium">
              Home
            </li>
            <li className="px-3 py-2 cursor-pointer text-black list-none text-sm font-medium">
              Availabity
            </li>
            <li className="px-3 py-2 cursor-pointer text-black list-none text-sm font-medium">
              Integrations
            </li>
            <li
              onMouseEnter={() => setIsHelpHovered(true)}
              onMouseLeave={() => setIsHelpHovered(false)}
              className="px-3 py-2 flex items-center gap-2 cursor-pointer text-black list-none text-sm font-medium relative"
            >
              <span>Help</span>{" "}
              <span>
                <FaCaretDown />
              </span>
              {/* Nested dropdown menu for Help */}
              {isHelpHovered && (
                <ul className="absolute right-0 top-8 text-gray-700 pt-1 w-36 bg-white rounded-md shadow-lg">
                  <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200">
                    FAQ
                  </li>
                  <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200">
                    Contact Us
                  </li>
                  <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200">
                    Support
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => setIsAccountHovered(true)}
              onMouseLeave={() => setIsAccountHovered(false)}
              className="px-3  py-2 cursor-pointer text-black list-none text-sm font-medium relative"
            >
              <div className="flex items-center gap-1">
                <span className="bg-[#CCCCCC] px-[14px] border-4 border-[#AFAFAF] py-1 text-xl font-semibold rounded-full">
                  J
                </span>
                <span>Account</span>{" "}
                <span>
                  <FaCaretDown />
                </span>
              </div>
              {/* Nested dropdown menu for Account */}
              {isAccountHovered && (
                <ul className="absolute right-0 top-12 text-gray-700 pt-1 w-36 bg-white rounded-md shadow-lg">
                  <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200">
                    Profile
                  </li>
                  <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200">
                    Settings
                  </li>
                  <li className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-200">
                    Logout
                  </li>
                </ul>
              )}
            </li>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black sm:hidden"
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Transition effect */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden shadow-xl rounded-b-md transition-all duration-300`}
      >
        {/* Mobile navigation links */}
        <div className="px-2 pt-2 pb-3 space-y-1">
          <li className="px-3 py-2 cursor-pointer list-none text-black block text-sm font-medium">
            Home
          </li>
          <li className="px-3 py-2 cursor-pointer text-black list-none block text-sm font-medium">
            Availabity
          </li>
          <li className="px-3 py-2 cursor-pointer text-black list-none block text-sm font-medium">
            Integrations
          </li>
          <li
            onClick={() => {
              setIsHelpHovered(!isHelpHovered);
              setIsAccountHovered(false);
            }}
            className="px-3 py-2 cursor-pointer text-black list-none block text-sm font-medium relative"
          >
            <p className="flex items-center gap-2">
              <span>Help</span>{" "}
              <span>
                <FaCaretDown />
              </span>
            </p>
            {/* Nested dropdown menu for mobile - Help */}
            {isHelpHovered && (
              <ul className="ml-4">
                <li className="py-2 text-sm cursor-pointer hover:bg-gray-200">
                  FAQ
                </li>
                <li className="py-2 text-sm cursor-pointer hover:bg-gray-200">
                  Contact Us
                </li>
                <li className="py-2 text-sm cursor-pointer hover:bg-gray-200">
                  Support
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={() => {
              setIsAccountHovered(!isAccountHovered);
              setIsHelpHovered(false);
            }}
            className="px-3  py-2 cursor-pointer text-black list-none block text-sm font-medium relative"
          >
            <div className="flex items-center gap-1">
              <span className="bg-[#CCCCCC] px-[12px] border-4 border-[#AFAFAF] py-1 font-semibold rounded-full">
                J
              </span>
              <span>Account</span>{" "}
              <span>
                <FaCaretDown />
              </span>
            </div>
            {/* Nested dropdown menu for mobile - Account */}
            {isAccountHovered && (
              <ul className="ml-4">
                <li className="py-2 text-sm cursor-pointer hover:bg-gray-200">
                  Profile
                </li>
                <li className="py-2 text-sm cursor-pointer hover:bg-gray-200">
                  Settings
                </li>
                <li className="py-2 text-sm cursor-pointer hover:bg-gray-200">
                  Logout
                </li>
              </ul>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
