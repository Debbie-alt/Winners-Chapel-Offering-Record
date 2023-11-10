import React from "react";
import { NavLink } from "react-router-dom";
import { DashboardOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SideMenu = () => {
  // const [active, setActive] = useState('')
  
  const history = useNavigate();
  const menu = [
    { Linkto: "/Index", label: "Dashboard", icon: <DashboardOutlined /> },
    { Linkto: "/Offerings", label: "Offerings" },
    { Linkto: "/Tithes", label: "Tithes", icon: null },
    { Linkto: "/app", label: "Add Officer", icon: null },
  ];
  return (
    <>
      <section
        className="flex flex-col px-8
        bg-white border-r-2 border-r-slate-200 text-sm text-slate-600 py-5 space-y-6 h-screen fixed"
        key={menu.Linkto}
      >
        {menu.map((menus) => (
          <NavLink
            to={menus.Linkto}
            activeclassname="active"
            className="rounded-lg hover:opacity-80"
            onClick={() => {
              history(menus.Linkto);
            }}
          >
            {/* {menus.icon} */}
            {menus.label}
          </NavLink>
        ))}
      </section>
    </>
  );
};

export default SideMenu;
