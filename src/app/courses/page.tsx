"use client"
import React from 'react'
import Image from 'next/image'

import CourseData from "@/data/course_data.json"
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'


interface Courses {
   id: number,
   title:string,
   slug:string,
   description:string,
   price:number,
   instructor:string,
   isFeatured:boolean,
   image:string
}

 export default function CoursePage() {
   const courses = CourseData.courses;
   const { data: session, status } = useSession({
    required:true,
    onUnauthenticated() {
      redirect("/api/auth/signin?callbackUrl=/courses")
    },
   })
     
  return (
    
     <div className=' py-10 mx-auto min-h-screen w-full flex items-center flex-col justify-center gap-2 text-white relative top-20 ' >
       <div className= " relative top-10 ">
            <h3 className=' text-center text-2xl sm:text-3xl uppercase tracking-tight '>
              total {courses.length} Courses is available 
            </h3>
       </div>
       <div className=' grid gri-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center mt-12 gap-10'>
           {
            courses.map((course:Courses)=>(
              <div key={course.id} className="relative flex flex-col mt-10 text-gray-100 bg-gray-800 shadow-md bg-clip-border rounded-xl w-96">
              <div
                className="relative h-56 mx-2 mt-2  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image 
                   src={`${course.image}`}
                   alt= {`${course.title}`}
                   fill= {true}
                  >
                  </Image>
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {course.title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {course.description}
                </p>
                 <div className='flex mx-2 justify-between mt-1'>
                  <p className=' text-balance text-[17px] leading-4 pt-2 underline bg-gradient-to-r from-slate-400 to-gray-200 text-transparent bg-clip-text'> Instructor</p>
                   <h4 className=' block text-[18px] antialiased  '>
                  { course.instructor}
                   </h4>
                 </div>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button">
                  $ {course.price}
                </button>
              </div>
            </div>  
            ))
           }
       </div>
     </div>
   
  )

}
