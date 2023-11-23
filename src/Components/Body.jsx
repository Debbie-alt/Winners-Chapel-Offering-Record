import React from 'react'
import Nav from './NavBar/Nav'
import SideMenu from './SideMenu/SideMenu'
import { useState } from 'react'

const Body = () => {

  const [Display, setDisplay]=useState('hidden')
  const [IsOpen, setIsOpen]=useState(false)

  const dropdown=()=>{
    !IsOpen?setDisplay('flex') : setDisplay("hidden");
    IsOpen ? setIsOpen(false): setIsOpen(true);
    
  }
  return (
    <div className="flex flex-col space-y-12  md:space-y-16">
      <Nav dropdown={dropdown}></Nav>
      <SideMenu Display={Display}></SideMenu>

    </div>
  )
}

export default Body