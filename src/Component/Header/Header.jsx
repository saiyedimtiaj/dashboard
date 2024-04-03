import React from "react";
import { FaPlus } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="flex justify-between py-5 items-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-end">
          <h1 className="md:text-3xl text-xl font-semibold">Admin Management</h1>
          <p className="text-gray-500 text-sm md:text-base">1/1 seats occupied</p>
        </div>
        <button className="flex text-xs md:text-base border-2 border-purple-600 px-2 md:px-4 rounded-full py-1.5 md:py-3 gap-1 md:gap-2 items-center">
          <span>
            <FaPlus />
          </span>
          <span className="font-medium">New User</span>
        </button>
      </div>
      <div className="flex items-center gap-5">
        <button className="font-medium text-lg pb-4 border-b-[3px] border-purple-600">
          All People
        </button>
        <button className="font-medium text-lg pb-4">Groups</button>
        <button className="font-medium flex items-center gap-2 text-lg pb-4">
          <span>Managed Events</span>
          <span className="text-sm px-2 py-1 text-white bg-purple-600 rounded-md" >BETA</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
