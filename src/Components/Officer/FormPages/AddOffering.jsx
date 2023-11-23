import React from "react";
import Nav from "../../NavBar/Nav";
import SideMenu from "../OfficerSidebar";
import NavLinks from "../OfficerNavLinks";
import transition from "../../../transition";

import OfferingForm from "../PaymentForms/OfferingForm";

const AddOffering = () => {
 
  return (
    <div className="h-screen w-screen space-y-16  flex top-0">
      <Nav />
      <main className="flex flex-col  ">
      <NavLinks/>
      <SideMenu />
      <OfferingForm />
      </main>
    </div>
  );
};

export default transition(AddOffering);
