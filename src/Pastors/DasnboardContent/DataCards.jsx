import { useNavigate } from "react-router-dom";
import { MailOutlined, BellFilled } from "@ant-design/icons";
import { Statistic } from "antd";
import  {BiDonateHeart} from "react-icons/bi";
import {MdEmojiTransportation} from "react-icons/md"

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
      Linkto:"/Offerings"
    },

    { icon: <BiDonateHeart
      style={{
        color: "purple",
        backgroundColor: "rgba(0 255, 255, 0.25)",
        fontSize: 28,
        borderRadius: 14,
        padding: 2,
      }}
    />, label: <Statistic />, text:"Tithe", count: "5600",  Linkto:"/Tithes"
  },

    {
      icon: (
        <MdEmojiTransportation
          style={{
            color: "red",
            backgroundColor: "rgba(256, 0, 0, 0.25)",
            fontSize: 28,
            borderRadius: 14,
            padding: 4,
          }}
        />
      ),
      text: "Transport Offering",
      label: <Statistic/>,
      count: "7870",
      Linkto:"/Transportseed"

    },
  ];
  const navigate =  useNavigate();
  return (
    <div className="mt-4 mx-10 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0">
      {datacard.map((data) => (
        <figure
          className=" flex px-3 items-center cursor-pointer rounded-lg shadow-lg bg-slate-50  sm:w-1/4 md:w-1/3 lg:w-1/4 h-28 border-2"
          key={data.text}
          onClick={()=>{
            navigate(data.Linkto)
          }}
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
