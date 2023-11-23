import { Space, Typography, Image } from "antd";
import { HiOutlineMail } from "react-icons/hi";
import { GiPadlock } from "react-icons/gi";
import Lottie from "lottie-react";
import img from '/winners2.png'
import animationData from '../../../src/Lottie/donation.json';
import { useState } from "react";
import transition from "../../transition";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
     const history = useNavigate();
      const [iterations, setIterations] = useState(0);

      const handleAnimationLooped = () => {
        setIterations((prevIterations) => prevIterations + 1);
      };
  
   
  return (
    <>
     <Space className=" mx-16 lg:mx-20 mt-2 flex">
      {/* <Image></Image> */}
      <img src={img} width={45} alt="" />
      <Typography.Text className="tracking-tighter text-md">Living Faith Church, aka Winners Chapel, Ikorodu</Typography.Text>
     </Space>
      <main className="w-screen h-screen border-t-2 border-t-neutral-300 mt-2  flex ">
           
        <section className=" flex flex-col md:items-start items-center px-10 lg:px-16 -mt-5 justify-center w-screen h-screen">
          <Space className="flex ">
            <Typography.Title
              style={{ color: "red", marginLeft: "22px" }}
              className="font-serif">
              Welcome
            </Typography.Title>
            <Typography.Title className="font-serif"> Back!</Typography.Title>
          </Space>
          <Space className=" mx-auto md:mx-0 w-screen md:w-[35vw] p-2  h-">
            <form action="" className="space-y-5">
              <figure className="w-[65vw] md:w-[35vw] ">
                <HiOutlineMail className="absolute text-lg  mt-4 mx-4" />
                <input
                  className="w-full relative border-2  focus:outline-none focus:border-red-200 bg-transparent  px-12 border-gray-300 rounded-full p-3 border-solid "
                  placeholder="Enter Your Email/Phone number"
                />
              </figure>

              <figure className="w-[65vw] md:w-[35vw]">
                <GiPadlock className="absolute  text-lg mt-4 mx-4" />
                <input
                  className="w-full relative border-2  focus:outline-none focus:border-red-200 bg-transparent  px-12 border-gray-300 rounded-full p-3 border-solid "
                  placeholder="Enter Your Password"
                />
              </figure>

              <Space className="flex mx-3  text-slate-500">
                <input type="checkbox" className="checked:bg-red-400" />{" "}
                Remember Me
              </Space>
              <button className="w-full border-2 font-serif bg-red-600 opacity-90 hover:opacity-70 text-white border-gray-300 rounded-full p-3 border-solid" onClick={(e)=>{
                e.preventDefault()
               history("/OfferingForm"); }}>
                Sign In
              </button>
            </form>
          </Space>
        </section>

        <figure className="w-full -mt-5">
        <Lottie
          animationData={animationData}
          className="w-full h-screen hidden md:flex mr-10"
          loop={iterations < 1}
          onComplete={handleAnimationLooped}
        />
        </figure>
      </main>
    </>
  );
};

export default transition(LoginPage);
