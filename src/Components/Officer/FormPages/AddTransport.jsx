import React from "react";
import Nav from "../../NavBar/Nav";
import SideMenu from "../OfficerSidebar";
import NavLinks from "../OfficerNavLinks";
import TransportForm from "../PaymentForms/Transport Form";
import transition from "../../../transition";

const AddTransport = () => {
  return (
    <div className="h-screen w-screen space-y-16  flex top-0">
      <Nav />
      <main className="flex flex-col">
      <NavLinks/>
      <SideMenu />
      <TransportForm/>
      </main>
    </div>
  );
};

export default transition(AddTransport);
