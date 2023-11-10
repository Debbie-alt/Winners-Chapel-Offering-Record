import { Table } from 'antd'
import Typography from 'antd/es/typography/Typography'
import React, { useEffect, useState } from 'react'

const Recent = () => {
  const [Loading, setLoading]= useState(true)
  useEffect(()=>
  {
    
   fetch('https://dummyjson.com/products/1')
   .then(res => res.json())
   .then(json => console.log(json))
            
  })

  return (
    <>
    <p className="font-semibold mt-5 text-slate-600 ">Recent Payments</p>
    <Table size={70} className='w-1/3 border-2 table '
       columns={[{title:"Offering", dataIndex:"&#9776 300",

      },
        { title:"Tithes", dataIndex:"&#9776 600", },
        {title:"Transport Offering", dataIndex:"&#9776 550",  }, ]}>
        
    </Table>


    {Loading && (
        <div>
          <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-t-red-500 bg-slate-200 border-solid animate-spin  rounded-full border-primary border-8 h-20  w-20"></div>
          </div>
        </div>
      )}
   
    
    </>
  )
}


export default Recent;