import { Table } from "antd";
import Typography from "antd/es/typography/Typography";
import React, { useEffect, useState } from "react";
import getOrders from "../../API/ApiIndex";

const Recent = () => {
  const [Loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getOrders().then((res) => {
      setLoading(false);
      setDataSource(res.products.splice(0, 5));

    
    });
  }, []);

  return (
    <>
      <p className="font-semibold mt-5 text-slate-600 text-center">Recent Payments</p>
      <Table
        size={40}
        className="  md:w-[50vw] lg:w-1/3 border-2 table "
        columns={[
          { title: "Offering", dataIndex: "stock" },
          { title: "Tithe", dataIndex: "price" },
          { title: "Transport", dataIndex: "discountPercentage" },
        ]}
        loading={Loading}
        dataSource={dataSource}
        pagination={false}
      
      ></Table>
    </>
  );
};

export default Recent;
