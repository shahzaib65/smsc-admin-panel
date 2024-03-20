import React from 'react'
import Header from '../components/Header'
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { SiSpeedtest } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { MdOutlineSmsFailed } from "react-icons/md";
import OurChart from '../components/Charts';

const Main = () => {
  return (
    <section  className='w-4/5 grow bg-white h-screen overflow-y-auto flex flex-col justify-start items-center gap-2 p-4'>
<Header/>
 
 <div id='main-section' className='grid lg:grid-cols-1 grid-cols-1 gap-4 w-full h-screen'>
 <div id='left' className='col-span-2 p-2 gap-3 flex flex-col justify-between items-center h-full'>

  <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 w-full mb-4'>
            <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-md text-black font-semibold'>Balance</h1>
                <h1 className='text-blue-500 font-semibold'>+21.75%</h1>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-1'>
                  <h1 className='text-3xl text-black font-semibold'>10,328</h1>
                  <p className='text-slate-700'>Euro</p>
                </div>

                <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full'>
                  <FaWallet  className='w-[30px] h-[30px]' />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center bg-red-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-md text-black font-semibold'>Total Tests</h1>
                <h1 className='text-red-600 font-semibold'>+21.75%</h1>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-1'>
                  <h1 className='text-3xl text-black font-semibold'>23,328</h1>
                  <p className='text-slate-700'>Messages</p>
                </div>

                <div className='bg-red-400 hover:bg-red-500 cursor-pointer text-black p-3 rounded-full'>
                  <SiSpeedtest className='w-[30px] h-[30px]' />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-md text-black font-semibold'>Delivered</h1>
                <h1 className='text-green-600 font-semibold'>+21.75%</h1>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-1'>
                  <h1 className='text-3xl text-black font-semibold'>34,328</h1>
                  <p className='text-slate-700'>Messages</p>
                </div>

                <div className='bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full'>
                  <AiOutlineDeliveredProcedure className='w-[30px] h-[30px]' />
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center bg-slate-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[-5deg] hover:scale-105 cursor-pointer'>
              <div className='w-full flex justify-between items-center'>
                <h1 className='text-md text-black font-semibold'>Undelivered</h1>
                <h1 className='text-black font-semibold'>+21.75%</h1>
              </div>

              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col justify-center items-start gap-1'>
                  <h1 className='text-3xl text-black font-semibold'>34,328</h1>
                  <p className='text-slate-700'>Messages</p>
                </div>

                <div className='bg-slate-400 hover:bg-slate-400 cursor-pointer text-black p-3 rounded-full'>
                  <MdOutlineSmsFailed className='w-[30px] h-[30px]' />
                </div>
              </div>
            </div>
          </div>

          <OurChart />

 </div>

 </div>
   
    </section>
  )
}

export default Main
