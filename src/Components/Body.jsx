import React from 'react'
import Nav from './NavBar/Nav'
import SideMenu from './SideMenu/SideMenu'

const Body = () => {
  return (
    <div className="flex flex-col space-y-16">
      <Nav></Nav>
      <SideMenu history={history}></SideMenu>
    </div>
  )
}

export default Body