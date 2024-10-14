import React, { useEffect, useState } from "react";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaComputer } from "react-icons/fa6";
import { FaThumbsUp } from "react-icons/fa";

import { IoIosPeople } from "react-icons/io";

const CountsStores = () => {
  const[count1,setCount1]=useState(250000);
  const[count2,setCount2]=useState(350);
  const[count3,setCount3]=useState(250);
  const[count4,setCount4]=useState(50);
  
 useEffect(()=>{
 const timer= setTimeout(()=>{
   setCount1(count1+13)
  },2000)
 const timer1= setTimeout(()=>{
  setCount2(count2+1)
  },2000)
 const timer2= setTimeout(()=>{
  setCount3(count3+1)
  },5000)

  return ()=>clearInterval(timer,timer1,timer2)
 },[count1,count2,count3])


  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-slate-200 p-24 rounded-lg shadow-lg w-full h-auto space-y-8 md:space-y-0 md:space-x-8">
      {/* Experience Section */}
      <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-48">
        <div className="text-5xl text-blue-600 mb-4">
          <PiBagSimpleFill />
        </div>
        <div className="text-2xl font-bold">
          {
            count1
          }
        </div>
        <div className="text-2xl font-semibold">Visitors</div>
        <p className="text-sm text-gray-500 mt-2">
          We at NBA Tech Solutions have great experience in resolving our
          client's needs.
        </p>
      </div>

      {/* IT Solutions Section */}
      <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-48">
        <div className="text-5xl text-green-600 mb-4">
          <FaComputer />
        </div>
        <div className="text-2xl font-bold">
        {
          count2
        }
        </div>
        
        <div className="text-lg font-semibold">IT Problems Solved</div>
        <p className="text-sm text-gray-500 mt-2">
          We at NBA Tech Solutions have developed various software solutions.
        </p>
      </div>

      {/* Satisfied Clients Section */}
      <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-48">
        <div className="text-5xl text-yellow-500 mb-4">
          <FaThumbsUp />
        </div>
          <div className="text-2xl font-bold">
            {
              count3
            }
          </div>
        <div className="text-lg font-semibold">Satisfied Clients</div>
        <p className="text-sm text-gray-500 mt-2">
          Our clients have given us great reviews for satisfying their needs.
        </p>
      </div>

      {/* Pro Team Members Section */}
      <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg w-48">
        <div className="text-5xl text-red-600 mb-4">
          <IoIosPeople />
        </div>
        <div className="text-2xl font-bold">
          {
            count4
          }
        </div>
        <div className="text-lg font-semibold">Pro Team Members</div>
        <p className="text-sm text-gray-500 mt-2">
          Our team members work tirelessly to fulfill client needs.
        </p>
      </div>
    </div>
  );
};

export default CountsStores;
