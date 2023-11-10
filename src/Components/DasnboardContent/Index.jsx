import React from 'react'
import Body from '../Body'
import DataCards from './DataCards'
import Recent from './Recent'
import { Space } from 'antd'
const Index = () => {
  return (
    <>
      <div className=' space-x-44 '>
           
         <Body/>
         <p className='mt-20 text-md font-semibold tracking-wide text-slate-700'>Church's Revenue Dashboard</p>

          <DataCards/>
           <Space>
           <Recent/>
           </Space>
         
       </div>
      
    
    </>
  )
}

export default Index