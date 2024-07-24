import React from 'react'
import Link from 'next/link'


export default function Footer() {
  return (
     <footer className=' bg-black text-gray-300 py-10 '>
         <div className=' max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 px-4 gap-10 mt-5 '>
         <div>
          <h2 className="text-white text-xl font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-sm">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg sm:text-2xl font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/courses"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/sanjaygupta972004"
              className="hover:text-white transition-colors duration-300"
            >
              Github
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg sm:text-2xl font-semibold mb-4 ">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: audio-next@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
         </div>
         <p className="text-center text-xl pt-8">© 2024 Music School. All rights reserved.</p>
     </footer>
  )
}
