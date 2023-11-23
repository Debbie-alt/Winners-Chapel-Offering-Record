import React from "react"
import Nav from "../NavBar/Nav"
import SideMenu from "./OfficerSidebar"
import NavLinks from "./OfficerNavLinks"

const OfficerPage = () => {
  
return (
    <div className="flex space-y-16 bg-gray-200 w-screen h-screen">
     <Nav/>
     <SideMenu/>   
      <div className="flex flex-col ">
      <NavLinks />
      </div>
        
    </div>
  )
}

export default OfficerPage;