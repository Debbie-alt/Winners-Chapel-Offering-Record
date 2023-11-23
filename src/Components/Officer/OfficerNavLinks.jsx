import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <div className=" h-full p-2 space-x-8  md:mx-44 w-screen justify-center ">
        <main className=" w-full md:w-3/4 ounded-md  mt-3 flex space-x-10 bg-white border-2 opacity-90 h-14   sm:h-9  items-center shadow-xl  ">
          <NavLink to="/OfferingForm"
            style={{ fontWeight: 600 }}
            className="object-cover rounded-md text-center h-full w-1/3 p-2 text-xs  sm:text-sm" >
            Add Offering
          </NavLink>
          <NavLink
            to="/TitheForm"
            style={{ fontWeight: 600 }}
            className="text-black rounded-md  text-center h-full p-2 w-1/3 text-sm">
            Add Tithe
          </NavLink>
          <NavLink
            to="/TransportForm"
            style={{ fontWeight: 600 }}
            className="text-black rounded-md text-center h-full w-1/3 p-2 text-xs sm:text-sm "
          >
            Add Transport seed
          </NavLink>
        </main>
      </div>
    </div>
  );
};

export default NavLinks;
