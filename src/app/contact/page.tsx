"use client";

import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaUser } from "react-icons/fa";
import { Meteors } from "@/components/ui/meteors";  
import { useRouter } from 'next/navigation';
import { ImSpinner9 } from "react-icons/im";
import { set } from 'mongoose';

interface InputTypes {
  username: string;
  email: string;
  phone: string;
}

const ContactPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<InputTypes>({
    username: "",
    email: "",
    phone: ""
  
  });
  const[message,  setMessage] = useState<string>("")
  const [error, setError] = useState<string>("");
  const[isSuccess,setIsSuccess] = useState<boolean>(false)


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData: InputTypes) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("")
    const data = {
      ...formData,
      message: message
    }
   
    if (!formData.username && !formData.email && !formData.phone) {
       setError("pls Filled all contact details")
       return
    } 
    if(!message){
       setError("message field is required")
    }
     try {
      setIsSuccess(true)
      const res =  await fetch("api/contact",{
        method:"POST",
        headers:{
         "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
      })
      const responseData = await res.json()
      if(!res.ok){
        setError(responseData.message)
      }
      if(res.ok){
        setIsSuccess(false)
        alert(responseData.message)
        router.push("/");
      }
     } catch (error) {
      setError(`${(error as Error).message}`)
     }finally{
      setIsSuccess(false)
     }
     
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen absolute px-2">
      <div className='container max-w-xl shadow-xl bg-gray-700 text-white relative top-[80px]  rounded-xl flex justify-center flex-col items-center  pt-2 pb-0'>
        <div className='mt-2 sm:mt-5 '>
          <h2 className='text-2xl sm:text-3xl font-semibold text-center'>Get In Touch</h2>
          <p className='text-normal text-xl tracking-tight mt-3'>
            Explore our <span className='text-blue-600'>Help docs</span> or Contact Us
          </p>
        </div>
        <div className="mt-5 px-3 py-2 h-auto container max-w-[465px]">
          <form onSubmit={handleSubmit} className='py-5 px-2 sm:px-1 flex flex-col space-y-[50px] sm:text-xl text-[18px]'>
            <div className='w-full h-11 rounded-md py-[1px] border border-gray-100 border-spacing-1 hover:border-gray-500 text-gray-600'>
              <label htmlFor="username"></label>
              <div className='flex flex-row justify-center items-center h-full gap-3'>
                <div className='pl-[4px] text-gray-200 text-2xl'>
                  <FaUser />
                </div>
                <input
                  type="text"
                  id="username"
                  placeholder="User Name"
                  className='w-full h-full rounded-md block px-3 py-[3px] shadow-inner'
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='w-full h-11 rounded-md py-[1px] border border-gray-100 border-spacing-1 hover:border-gray-500 text-gray-600'>
              <label htmlFor="email"></label>
              <div className='flex flex-row justify-center items-center h-full gap-3'>
                <div className='pl-[4px] text-gray-200 text-2xl'>
                  <MdEmail />
                </div>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className='w-full h-full rounded-md block px-3 py-[3px] shadow-inner'
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='w-full h-11 rounded-md pr-[1px] shadow-lg border border-gray-100 border-spacing-1 hover:border-gray-500 text-gray-600'>
              <label htmlFor="phone"></label>
              <div className='flex flex-row justify-center items-center h-full gap-3'>
                <div className='pl-[4px] text-gray-200 text-2xl'>
                  <FaPhoneSquareAlt />
                </div>
                <input
                  type="text"
                  id="phone"
                  placeholder="Number"
                  className='w-full h-full rounded-md block px-3 py-[3px] shadow-inner'
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className='w-full h-full rounded-lg text-gray-600'>
               <label htmlFor="message" className='text-white'>Message</label>
               <textarea
                 id="message"
                 placeholder="Leave us a message"
                 className='w-full h-20 text-start border-none outline-none p-0 m-0 pl-1 rounded-lg py-0 shadow-inner border border-gray-100 border-spacing-1 hover:border-gray-500'
                 onChange={(e)=>(setMessage(e.target.value))}
               ></textarea>
             </div>
             <div className='my-3 bg-blue-700 w-full rounded-md hover:bg-blue-600 hover:rounded-lg active:bg-blue-800'>
                <button className='mx-auto h-10 w-full text-2xl py-[2px] uppercase'>
                   { isSuccess? <ImSpinner9 className=' animate-spin ml-[215px]'/> : "register"}  
                </button>
              </div>
            <div className=' pl-5 w-full '>
              <p className=' text-red-700 text-xl bg-red-100 shadow-xl rounded-md pl-2'>
                { error && <span> {error} </span> }
              </p>
            </div>
          </form>
        </div>
      </div>
      <Meteors number={60} />
    </div>
  );
};

export default ContactPage;
