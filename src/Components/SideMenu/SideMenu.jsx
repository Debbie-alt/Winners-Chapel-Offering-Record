import React from "react";
import { NavLink } from "react-router-dom";
import { UserAddOutlined , FundOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Space } from "antd";
import {MdEmojiTransportation} from "react-icons/md"
import {BiDonateHeart} from "react-icons/bi"
import {AiTwotoneMail} from "react-icons/ai"

const SideMenu = ({Display}) => {
  const history = useNavigate();
  const menu = [
    { Linkto: "/Index", label: "Dashboard", icon: <FundOutlined /> },
    { Linkto: "/Offerings", label: "Offerings",  icon:<BiDonateHeart/>},
    { Linkto: "/Tithes", label: "Tithes", icon: <AiTwotoneMail/> },
    { Linkto: "/app", label: "Add Officer", icon: <UserAddOutlined />},
    { Linkto: "/TransportSeed", label: "Add Transport", icon: <MdEmojiTransportation />},
    { Linkto: "/capp", label: "Online Payers", icon: <UserAddOutlined />},

];

return (
    <>
      <section
        className={`fixed  ${Display} translate-y-1  transition-all ease-in-out origin-left sm:flex flex-col px-10 md:px-7
        bg-white border-r-2 border-r-slate-200 z-40 text-sm text-slate-600  py-8 sm:py-5 space-y-6 h-screen `}
        key={menu.label}>
        {menu.map((menus) => (
         <Space direction="horizontal">
              {menus.icon}
          <NavLink aria-disabled={true}
            to={menus.Linkto}
            activeclassname="active"
            className="rounded-lg text-md sm:text-sm  hover:opacity-80"
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
