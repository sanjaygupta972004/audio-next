"use client"
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaUser } from "react-icons/fa";
import { Meteors } from "@/components/ui/meteors";


export default function page() {
  return (
       <div className="flex items-center justify-center w-full min-h-screen  absolute  px-2">
          <div className=' container max-w-xl shadow-xl bg-gray-700 text-white  relative top-[9px] rounded-lg flex justify-center flex-col items-center gap-3 py-5'>
                 <div className=' mt-2 sm:mt-4 pt-3'>
                     <h2 className=' text-2xl sm:text-3xl font-semibold text-center'> Get In Touch</h2>
                     <p className='text-normal text-xl tracking-tight mt-3 '> Explore our <span className='text-blue-600'> Help docs </span> or Contact Us</p>
                 </div>
                 <div className = "mt-5 px-3 py-2 h-auto container max-w-[465px] ">  
                    <form className=' py-5 px-2 sm:px-1 flex flex-col space-y-[59px] sm:text-xl text-[18px]'>
                          <div className=' w-full h-11 rounded-md py-[1px] border border-gray-100 border-spacing-1 hover:border-gray-500 text-gray-600  '>
                              <label htmlFor="username"> </label>
                               <div className=' flex flex-row justify-center items-center h-full  gap-3'>
                                <div className='pl-[4px] text-gray-200 text-2xl'>
                                  {<FaUser/>}
                                </div >
                                  <input type="text"  id="username" placeholder= "User Name" className='w-full h-full rounded-md block px-3 py-[3px] shadow-inner '/>
                               </div>
                          </div>
                          <div className=' w-full h-11 rounded-md py-[1px] border border-gray-100 border-spacing-1 hover:border-gray-500 text-gray-600'>
                             <label htmlFor="email"></label>
                             <div className=' flex flex-row justify-center items-center h-full  gap-3'>
                                <div className='pl-[4px] text-gray-200 text-2xl'>
                                  {<MdEmail/>}
                                </div >
                                  <input type="email"  id="email" placeholder= "Email" className='w-full h-full rounded-md block px-3 py-[3px] shadow-inner '/>
                               </div>
                          </div>
                          <div className='w-full h-11 rounded-md pr-[1px]  shadow-lg border border-gray-100 border-spacing-1 hover:border-gray-500 text-gray-600 '>
                              <label htmlFor="phone"></label>
                              <div className=' flex flex-row justify-center items-center h-full  gap-3'>
                                <div className='pl-[4px] text-gray-200 text-2xl'>
                                  {<FaPhoneSquareAlt/>}
                                </div >
                                  <input type="text"  id="phone" placeholder= "Number" className='w-full h-full rounded-md block px-3 py-[3px] shadow-inner '/>
                               </div>
                          </div>
                    </form>
                 </div>
                 <div className=' my-3 bg-blue-700 w-1/2 rounded-md hover:bg-blue-600 hover:rounded-lg  active:bg-blue-800'>
                    <button className=' mx-auto h-10 w-full  text-2xl py-[2px] '>
                      Send
                    </button>
                 </div>
          </div>
          <Meteors number={60}/>
       </div>
  )
}
