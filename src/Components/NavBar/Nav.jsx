import React from 'react'
import winners from '/winners2.png'
import { HiOutlineBellAlert } from "react-icons/hi2";
import {MailOutlined, BellFilled} from '@ant-design/icons'
import  {Badge, Space, Typography} from 'antd'

const Nav = () => {
  return (
       <>
       <nav>
            <div className=' fixed flex   justify-between items-center border-2  bg-white w-full px-5 py-2.5  '>   
                  <Space>
                    <img src={winners}  alt="" className='w-12' />
                    <Typography.Text className='tracking-tighter leading-none text-sm'>Living Faith Ministries </Typography.Text>
                  </Space>
                 
               <Typography.Title level={4} > Funmi's Portal</Typography.Title>
               {/* <Typography.Link href='tel:+2347038502924'>+2347038502924</Typography.Link> */}
                  <div className='flex space-x-6 '> 
                       <Badge  count={10} dot >
                        <MailOutlined  style={{fontSize:18}}/>
                        </Badge>
                  <Badge count={9} className='w-5'>
                    <BellFilled className=" text-sm md:text-xl hover:text-3xl  font-bold "  />
                  </Badge>
                  </div>

            </div>
       </nav>
       
       
       </>
  )
}

export default Nav;