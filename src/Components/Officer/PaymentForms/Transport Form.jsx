import Typography from "antd/es/typography/Typography";
import React from "react";

const TransportForm = () => {
  return (
    <div>
      <main className="flex flex-col">
        <figure className=" ml-8 md:ml-[45rem] shadow-lg w-[80vw] md:w-[30vw] mb-20">
          <form
            action=""
            className={`flex flex-col  mx-auto mt-5 w-full py-5  px-3 space-y-3 border-2 rounded-lg border-t-4 border-t-red-500 opacity-90 shadow-2xl`}
          >
            <Typography.Title level={5} className="font-serif mx-auto">
              RECORD TRANSPORT{" "}
            </Typography.Title>
            <label htmlFor="" className=" font-sans font-semibold">
              Amount in Naira
            </label>
            <input
              type="text"
              placeholder="Amount"
              className="rounded-xl border-2 p-2 focus:outline-red-500 "
            />
            <label htmlFor="" className=" font-sans font-semibold">
              Payment Date
            </label>
            <input
              type="date"
              placeholder="Date of Payment"
              className="rounded-xl p-2 border-2  focus:outline-red-500 "
            />
            <label htmlFor="servicetype" className="font-sans font-semibold">
              Choose service type:
            </label>
            <select
              name="servictype"
              id="servicetype"
              defaultValue="Servicetype"
              className="text-black font-serif border-2 p-3 rounded-xl"
            >
              <option value="sundayservice">Sunday service</option>
              <option value="biblestudy">Weekly Service</option>
            </select>
            <label htmlFor="" className=" font-sans font-semibold">
              Officer's Name
            </label>
            <input
              type="text"
              placeholder="Input your Name here"
              className="rounded-xl p-2 border-2  focus:outline-red-500 "
            />
            <button className=" bg-gradient-to-b  from-red-600 to-red-400 w-1/4 mx-auto rounded-xl p-1 text-white">
              Save
            </button>
          </form>
        </figure>
      </main>
    </div>
  );
};

export default TransportForm;
