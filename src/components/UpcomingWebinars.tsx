"use client"
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";
import { title } from "process";


const featuredWebinars = [
  {
    title: 'Understanding Music Theory',
    description:
      'Dive deep into the fundamentals of music theory and enhance your musical skills.',
    slug: 'understanding-music-theory',
    isFeatured: true,
  },
  {
    title: 'The Art of Songwriting',
    description:
      'Learn the craft of songwriting from experienced musicians and songwriters.',
    slug: 'the-art-of-songwriting',
    isFeatured: true,
  },
  {
    title: 'Mastering Your Instrument',
    description:
      'Advanced techniques to master your musical instrument of choice.',
    slug: 'mastering-your-instrument',
    isFeatured: true,
  },
  {
    title: 'Music Production Essentials',
    description:
      'Get started with music production with this comprehensive overview.',
    slug: 'music-production-essentials',
    isFeatured: true,
  },
  // Added two more webinars
  {
    title: 'Live Performance Techniques',
    description:
      'Enhance your live performance skills with expert tips and strategies.',
    slug: 'live-performance-techniques',
    isFeatured: true,
  },
  {
    title: 'Digital Music Marketing',
    description:
      'Learn how to promote your music effectively in the digital age.',
    slug: 'digital-music-marketing',
    isFeatured: true,
  },
];

export default function UpcomingWebinars() {
  return (
    <div className=' py-10 bg-gray-900 flex flex-col justify-center items-center '>
       <div className=' text-center'>
       <h4 className=' text-2xl md:text-4xl text-green-400 text-center mt-1 uppercase '> FEATURED webinar</h4>
       <p className="mt-4 text-3xl leading-8 font-normal tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
     </div>
       <div className=" mt-8 max-w-7xl mx-auto px-8">
         <HoverEffect
           items={featuredWebinars.map((webinar)=>({
            title:webinar.title,
            description:webinar.description,
            link:webinar.slug
           }))
          }
           />
       </div>
       <div className=" mt-9">
       <Link href = {"/webinars"}>
                <button className=' w-35 h-12 bg-white rounded-md p-2 text-[16px] text-gray-800 '> View All Webinars</button>
         </Link>
       </div>
    </div>
  )
}
