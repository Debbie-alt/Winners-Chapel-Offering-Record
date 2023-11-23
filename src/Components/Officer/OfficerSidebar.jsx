import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Space } from "antd";
import {MdEmojiTransportation} from "react-icons/md";
import {BiDonateHeart} from "react-icons/bi"
import {AiTwotoneMail} from "react-icons/ai"


const SideMenu = () => {
 
  const history = useNavigate();
  const menu = [
    { Linkto: "/OfferingForm", label: "Offerings",  icon:<BiDonateHeart/>},
    { Linkto: "/TitheForm", label: "Tithes", icon: <AiTwotoneMail/> },
    { Linkto: "/TransportForm", label: "TransportSeed", icon: <MdEmojiTransportation/> },
  ];
  return (
    <>
      <section
        className="hidden md:flex flex-col px-8
        bg-white border-r-2 border-r-slate-200 text-sm text-slate-600 py-5 space-y-6 h-screen fixed"
        key={menu.label}>
        {menu.map((menus) => (
         <Space direction="horizontal">
              {menus.icon}
          <NavLink aria-disabled={true}
            to={menus.Linkto}
            activeclassname="active"
            className="rounded-lg  hover:opacity-80"
            onClick={() => {
              history(menus.Linkto);
               }}>
            {menus.label}
          </NavLink>
          </Space>
        ))}
      </section>
    </>
  );
};

export default SideMenu;
