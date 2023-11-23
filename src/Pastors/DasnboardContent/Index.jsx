import React, { useEffect, useState } from "react";
import Body from "../../Components/Body";
import DataCards from "./DataCards";
import Recent from "./Recent";
import { getRevenue } from "../../API/ApiIndex";
import { Space , Card} from "antd";
import transition from "../../transition";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Index = () => {
  return (
    <>
      <div className=" sm:space-x-44 ">
        <Body />
        <p className="mt-20 text-lg md:text-md text-center md:text-left font-semibold tracking-wide text-slate-700">
          Church's Revenue Dashboard
        </p>
        <DataCards />
        <Space className=" flex flex-col lg:flex-row">
          <Recent />
          <Graph />
        </Space>
      </div>
    </>
  );
};
const Graph = () => {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });
  useEffect((res) => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });
      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue",
            data: data,
            backgroundColor: "red",
          },
        ],
      };
      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "CHURCH REVENUE DATA",
      },
    },
  };
  return (
    <>
    <Card style={{width:500,  height:250, marginBottom:20 }} className="shadow-lg border-2 mt-8  mx-24">
     <Bar options={options} data={revenueData} style={{height:600}}  />
     </Card>
    </>
  )
};

export default transition(Index);
