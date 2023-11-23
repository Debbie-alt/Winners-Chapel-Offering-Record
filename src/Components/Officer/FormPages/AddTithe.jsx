import React from "react";
import Nav from "../../NavBar/Nav";
import SideMenu from "../OfficerSidebar";
import NavLinks from "../OfficerNavLinks";
import TitheForm from "../PaymentForms/TitheForm";
import transition from "../../../transition";

const AddTithe = () => {
  return (
    <div className="h-screen w-screen space-y-16  flex top-0">
      <Nav />
      <main className="flex flex-col">
      <NavLinks/>
      <SideMenu />
      <TitheForm/>
      </main>
    </div>
  );
};

export default transition(AddTithe);
