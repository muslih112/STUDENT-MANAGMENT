"use client";

import Logout from "./logout";
const Sidebar = () => {
  return (
    <div className="sidebar text-center shadow-2xl z-50 p-5 w-50 h-155">
      <a className="student bg-white cursor-pointer text-black rounded-xl items-center justify-center flex w-full h-10 text-x1 mb-8">
        STUDENT
      </a>
      <a className="staff items-center text-black rounded-xl cursor-pointer justify-center flex w-full h-10  text-x1">
        STAFF
      </a>
      <Logout />
    </div>
  );
};

export default Sidebar;
