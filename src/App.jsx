import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Header from "./Component/Header/Header";
import Tabs from "./Component/MainTabs/Tabs";
import Card from "./Component/Card/Card";

const App = () => {
  return (
    <div className="relative">
        <div className="absolute lg:block hidden top-1/3 right-0">
        <div className="flex h-32">
          <div style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}} className="flex items-center justify-between cursor-pointer">
            <p className="-rotate-90 w-14 mt-6 bg-slate-100 z-50 whitespace-nowrap text-xl font-semibold">Feedback</p>
          </div>
        </div>
        </div>
      <div className="border-b border-gray-300">
        <Navbar />
      </div>
      <div className="shadow-lg">
        <Header />
      </div>
      <div className="container mx-auto px-3">
        <Tabs />
        <hr />
      </div>
      <div className="container mx-auto px-3 pb-14">
        <Card />
      </div>
     
      <div className="absolute lg:block hidden right-3 bottom-1/4">
        <div className="relative cursor-pointer mx-auto h-fit w-fit rounded-md bg-[#353F4E] text-white px-3 py-2">
          <span>Getting Started</span>
          <span className="px-2 py-1 text-xs bg-red-600 absolute rounded-full -top-2.5 -right-2.5">
            3
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
