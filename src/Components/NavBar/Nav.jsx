import React from 'react'
import winners from '/winners2.png'
import {MailOutlined, BellFilled} from '@ant-design/icons'
import  {Badge, Space, Typography} from 'antd'

const Nav = ({dropdown}) => {
  return (
       
       <>
       <nav>
            <div className=' fixed flex justify-between items-center border-2  bg-white
             w-full  px-3 sm:px-5 h-12 sm:h-16 sm:py-2.5  '>   
                  <Space>
                  <button className='flex sm:hidden' onClick={dropdown}>&#9776;</button>
                    <img src={winners}  alt="" className=' w-6 sm:w-12' />
                    <Typography.Text className='tracking-tighter leading-none text-[10px] sm:text-sm'>Living Faith Ministries </Typography.Text>
                  </Space>
                 
               <Typography.Title level={4} className='text-xs' > Admin Portal</Typography.Title>
               {/* <a href='tel:+2347038502924'>+2347038502924</a> */}
                  <div className='flex space-x-6 '> 
                       <Badge  count={10} dot >
                        <MailOutlined  style={{fontSize:13}}/>
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