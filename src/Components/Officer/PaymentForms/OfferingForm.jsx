import Typography from "antd/es/typography/Typography";
import React, { useState } from "react";
import {BiDonateHeart} from "react-icons/bi";

const OfferingForm = () => {
  const [amount, setAmount] = useState('');
  const [date, setDate] =useState ('');
  const [serviceType, setServiceType] =useState('')

  const handleSubmit=(e)=>{
    e.preventDefault(); 
    const payment = {amount, date, serviceType} 
    // console.log(payment)
    fetch('http://localhost:5000/Payments',
    {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(payment)
    }).then(()=>{
      alert ("succesfully saved")
    })
  }
  return (
    <div>
      <figure className=" mx-8 md:mx-48 shadow-lg w-[80vw] md:w-[30vw] mb-20">
      <BiDonateHeart className="
      absolute text-3xl text-slate-100 ml-40 -mt-3 bg-gradient-to-r from-red-200 to-red-500 p-1 rounded-full  border-2 border-black "/>
        
        <form onSubmit={handleSubmit}
          className={`flex flex-col relative  mx-auto mt-5 w-full   px-3 py-5 space-y-3 border-s-2 border-r-2  rounded-lg shadow-2xl`}>
          <Typography.Title level={5} className="font-serif mx-auto">
            RECORD OFFERING{" "}
          </Typography.Title>
          <label  className=" font-sans font-semibold">
            Amount in Naira
          </label>
          <input
            type="text"
            placeholder="Amount"
            required
            value={amount}
            className="rounded-xl border-2 p-2 focus:outline-red-500 "
            onChange={(e)=>setAmount(e.target.value)}
          />
          <label  className=" font-sans font-semibold">
            Payment Date
          </label>
          <input
            type="date"
            required
            placeholder="Date of Payment"
            value={date}
            onChange={(e)=>setDate(e.target.value)}

            className="rounded-xl p-2 border-2  focus:outline-red-500 " />
          <label htmlFor="servicetype" className="font-sans font-semibold">
            Choose service type:
          </label>
          <select
            required
            value={serviceType}
            onChange={(e)=>setServiceType(e.target.value)}
            className="text-black font-serif border-2 p-3 rounded-xl">
            <option value="sundayservice">Sunday service</option>
            <option value="weekly service">Weekly Service</option>
          </select>
          <label htmlFor="" className=" font-sans font-semibold">
            Officer's Name
          </label>
          <input
            type="text"
            placeholder="Input your Name here"
            className="rounded-xl p-2 border-2  focus:outline-red-500 "
          />
          <button className="bg-gradient-to-b  from-red-600 to-red-400 w-1/4 mx-auto rounded-xl p-1 text-white">Save</button>
        </form>
          </figure>
    </div>
  );
};

export default OfferingForm;
