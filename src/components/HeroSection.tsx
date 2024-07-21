import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

export default function HeroSection() {
  return (
    <div className=' h-auto md:h-[160px] w-full rounded-md flex justify-center items-center flex-col 
     relative mx-auto bottom-12 md:bottom-11 gap-5 lg:gap-6 '>
       <Spotlight className=' w-[2px] h-fit right-5'
       fill='white' />
     <div className=' p-4 relative z-20  w-full text-center'>
       <h1 className=' mt-15 lg:mt-6 md:mt-0 text-3xl md:text-6xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500   ' >
         Master the  art of Music
       </h1>
       <Spotlight className=' w-[10px] h-auto right-10 top-2 md:top-3'
       fill='white' />
       <p className='mt-6 font-normal text-base  max-w-lg mx-auto text-neutral-400 text-[17px] md:text-xl '>
        Dive into our comprehensive music course and transform your musical journey today, whether you.re a  beginner or looking to refine your skills, join us to unlock your true potential..
       </p>
     </div>
        <div className=' mt-4'>
          <Link href = {"/courses"}>
            <Button
             borderRadius="1.75rem"
             className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
             Explore Courses
            </Button>
          </Link>
        </div>
     
    </div>
  )
}
