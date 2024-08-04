"use client"
import React,{FormEvent,ChangeEvent, useState} from 'react'
import { useRouter } from 'next/navigation'
import { ImSpinner9 } from "react-icons/im";

 interface IFormData {
  username:string,
  password:string,
  email:string
 }
export default function SignInForm() {
   const [formData, setFormData] = useState<IFormData>({
    username:"",
    password:"",
    email:""
   })
   const [error, setError] = useState<string>("")
   const [isLoading, setIsLoading] = useState<boolean>(false)
   const router = useRouter()

  const handlerChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {value,name} = e.target;
    if(value && name){
      setFormData((prevValue:IFormData)=>({
        ...prevValue,
        [name] :value
      }))
    }
  }

  const handlerSubmit = async(e:FormEvent<HTMLFormElement>) =>{
   e.preventDefault()
   setError("")
   if(formData.email=== "" || formData.password === "" || formData.username === "" ){
     setError("All fields required to create an account")
     return
   }
    
   try {
     setIsLoading(true)
    const res = await fetch("/api/user",{
      method:"POST",
      headers:{
       'Content-Type':"application/json"
      },
      body: JSON.stringify(formData)

    })
    const data = await res.json()
    console.log(data)
    if(res.ok){
      setIsLoading(false)
      router.push("/api/auth/signin")
    }else{
      setError(data.message)
    }
    return data

   } catch (error) {
     console.log("Something went wrong while submitting form",error)
     setError(error as string)
   }finally{
    setIsLoading(false)
   }

  }
  return (
      <div className=' min-h-screen w-full bg-black mx-auto py-15 relative md:top-10 top-20 bottom-0 text-white '>
        <div className=' container max-w-4xl md:max-w-[530px] bg-gray-800 flex items-center justify-center flex-col space-y-12 mx-auto relative top-14  mt-10 py-12 px-5 rounded-lg shadow-inner'>
            <div className=' w-full px-2 py-1'> 
               <h3 className=' text-center text-xl md:text-2xl tracking-tighter text-normal bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 text-transparent'> Welcome to Audio-next for Continue Pls <span className='text-blue-500 underline underline-offset-3 uppercase px-1 py-[2px] z-50 '> Register </span>  your Account</h3>
            </div>
            <form action="" onSubmit={handlerSubmit} className=' flex flex-col items-center justify-center gap-10 w-full'>
              <div className=' w-full pl-3 shadow-md bg-slate-800  flex items-start justify-start flex-col   '>
                <label htmlFor="username" className=' w-1/4 border border-t-0 border-r-1 border-l-1  border-spacing-5 rounded-lg md:px-5 px-[1px] text-[18px]'>Username</label>
                <input type="text"
                      placeholder='username'
                      name='username'
                      onChange={handlerChange}
                      className='w-full h-8 rounded-md pl-2 mt-[6px] text-gray-600'
                 />
              </div>
              <div className=' w-full pl-3 shadow-md bg-slate-800  flex items-start justify-start flex-col  '>
              <label htmlFor="email" className=' w-1/4 border border-t-0 border-r-1 border-l-1  border-spacing-5 rounded-lg px-5 text-[18px]' >Email</label>
                <input type="email"
                      placeholder='email'
                      name='email'
                      onChange={handlerChange}
                        className='w-full h-8 rounded-md pl-2 mt-[6px] text-gray-600'
                 />
              </div>
              <div className=' w-full pl-3 shadow-md bg-slate-800  flex items-start justify-start flex-col  '>
              <label htmlFor="password" className=' w-1/4 border border-t-0 border-r-1 border-l-1  border-spacing-5 rounded-lg md:px-5 px-[1px] text-[18px]' >Password</label>
                <input type="password"
                      placeholder='password'
                      name='password'
                      onChange={handlerChange}
                      className='w-full h-8 rounded-md pl-2 mt-[6px] text-gray-600'
                 />
              </div>
                <div className='my-3 bg-blue-700 w-full rounded-md hover:bg-blue-600 hover:rounded-lg active:bg-blue-800'>
                <button className='mx-auto h-10 w-full text-2xl py-[2px] uppercase'>
                   { isLoading? <ImSpinner9 className=' animate-spin ml-[215px]'/> : "register"}  
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
  )
}
 