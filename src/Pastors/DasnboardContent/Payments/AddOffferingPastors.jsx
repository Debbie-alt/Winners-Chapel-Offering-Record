import React from 'react'
import Body from '../../../Components/Body'
import getOrders from '../../../API/ApiIndex'
import { useState, useEffect} from 'react'
import { Table } from 'antd'
import OfferingForm from '../../../Components/Officer/PaymentForms/OfferingForm'
import transition from '../../../transition'

const PastorsOffering = () => {
  const [Loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getOrders().then((res) => {
      setLoading(false);
      setDataSource(res.products.splice(0, 5));

    
    });
  }, []);
  return (
    <div>
      <Body/>
      <main className='w-full h-full  mx-10 md:mx-44 space-y-5 mt-20 '>
          <h1  className='font-semibold font-serif sm:mx-10  text-lg md:text-md text-red-500 -mx-5'>RECENT  <span  className="text-black"> OFFERINGS RECORDS</span></h1>
        <section className='flex' >
        <Table
        size={70} 
        className="w-[50px]  sm:w-[500px] border-2 table "
        columns={[
          { title: "Amount", dataIndex: "stock" },
          { title: "Date", dataIndex: "price" },
          { title: "Service Type", dataIndex: "discountPercentage" },
          { title: "Officer's Name", dataIndex: "discountPercentage" },

        ]} 
        loading={Loading}
        dataSource={dataSource}
        pagination={false}     
      ></Table>
          
          
                  </section>
      </main>
    </div>
  )
}

export default transition(PastorsOffering);
;

