import React from 'react'
import Link from 'next/link'
import featureData from "../data/course_data.json"
interface Courses {
  id: number,
  title:string,
  slug:string,
  description:string,
  price: number,
  instructor:string
  isFeatured:boolean,
}

export default function FeatureCourses() {
  const courseData = featureData.courses.filter((course:Courses)=>course.isFeatured === true)
       
  return (
      <div className=' py-10 flex flex-col justify-center items-center gap-4'>
           <div className=' flex flex-col items-center justify-center mx-auto  gap-3 p-1 '>
               <h4 className=' text-xl md:text-3xl text-green-400 text-center mt-2 '> FEATURED COURSE</h4>
               <h2 className=' text-3xl md:text-5xl  font-normal leading-6  tracking-tight  '> Learn with the best</h2>
           </div>
           <div className=' h-auto mx-auto w-full flex flex-col  justify-center items-center gap-5'>
               <div className=' flex flex-row justify-center flex-wrap gap-10 items-center w-full mt-3 pt-5 px-3'>
                  {
                    courseData.map((course:Courses)=>(
                      <div key={course.id} className='w-[338px] h-[230px] px-[35px] flex items-center flex-col gap-5 shadow-xl bg-gray-800 rounded-lg py-1' >
                         <div className=' flex flex-col justify-center w-[319px] h-[100px] gap-2 flex-shrink'>
                            <h2 className=' text-center text-[21px] pt-[6px]'> {course.title} </h2>
                             <p className=  " text-[15px] pl-3 w-[319px] h-[69px] ">{ course.description}</p>
                           </div>
                           <div className=' flex flex-col items-start pl-0 '>
                             <p className=' text-[17px] tracking-tight font-normal '>
                               {course.instructor}
                             </p>
                             <h1>
                               {course.price}
                             </h1>
                           </div>
                           <div>
                             <Link href= {`${course.slug}`} >
                                Read More
                             </Link>
                           </div>
                       </div>
                    ))
                  }   
                 </div>
               <div className=' mt-[38px]'>
                <Link href = {"/courses"}>
                <button className=' w-35 h-12 bg-white rounded-md p-2 text-[16px] text-gray-800 '> View All Courses</button>
                </Link>
               </div>
           </div>
      </div>
      
  )
}