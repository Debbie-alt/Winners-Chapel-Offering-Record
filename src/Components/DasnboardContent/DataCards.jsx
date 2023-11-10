import React from "react";
import { MailOutlined, BellFilled } from "@ant-design/icons";
import { Statistic } from "antd";
import {BiDonateHeart} from 'react-icons/bi'

const DataCards = () => {
  const datacard = [
    {
      icon: (
        <MailOutlined
          style={{
            color: "red",
            backgroundColor: "rgba(256, 0, 0, 0.25)",
            fontSize: 16,
            borderRadius: 14,
            padding: 6,
          }}
        />
      ),
      label: <Statistic />,
      text: "Offering",
      count: "3043",
    },

    { icon: <BiDonateHeart
      style={{
        color: "purple",
        backgroundColor: "rgba(256, 0, 0, 0.25)",
        fontSize: 16,
        borderRadius: 14,
        padding: 6,
      }}
    />, label: <Statistic />, text:"Tithe", count: "5600" },

    {
      icon: (
        <BellFilled
          style={{
            color: "white",
            backgroundColor: "rgb(11, 201, 11)",
            fontSize: 16,
            borderRadius: 14,
            padding: 6,
          }}
        />
      ),
      text: "Transport Offering",
      label: <Statistic/>,
      count: "7870",
    },
  ];

  return (
    <div className="mt-4 flex space-x-5">
      {datacard.map((data) => (
        <figure
          className=" flex px-3 items-center rounded-lg shadow-lg bg-slate-50 w-1/5 h-28 border-2"
          key={data.icon}
        >
          <div className="flex space-x-6">
            <div className={`h-7 opacity:60 px-2 rounded-full `}>
              {data.icon}
            </div>
            <Statistic title={data.text} value={data.count} level={4} />
          </div>
        </figure>
      ))}
    </div>
  );
};

export default DataCards;
