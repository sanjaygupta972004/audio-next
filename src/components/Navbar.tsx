"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default  function Navbar({ className }: { className?: string }) {
        const[active, setActive] = useState<string| null>(null)
        const {data:session,status} = useSession()
  return (
        <div  className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)} >
                <Menu setActive={setActive}>
                    <Link href={"/"} className=" text-[16px] hover:underline peer-hover:underline-offset-1 hover:opacity-90 ">
                      <MenuItem   setActive={setActive} active={active} item="Home" >
                      </MenuItem>
                    </Link>

                  <div className=" text-[16px] hover:underline peer-hover:underline-offset-1 hover:opacity-90 ">
                  <MenuItem  setActive={ setActive} active={active} item = "Our Courses"  >
                      <div className="flex flex-col space-y-4 text-sm ">
                       <HoveredLink href="/courses">All Courses</HoveredLink>
                       <HoveredLink href="/basic-music-theory">Basic Music Theory</HoveredLink>
                       <HoveredLink href="/advance-composition">Advance Composition</HoveredLink>
                       <HoveredLink href="/song-writing">Song Writing</HoveredLink>
                       <HoveredLink href="/music-production">Music Production</HoveredLink>
                      </div>
                    </MenuItem>
                  </div>
                    <Link href={"contact"} className=" text-[16px] hover:underline peer-hover:underline-offset-1 hover:opacity-90 ">
                    <MenuItem setActive={setActive} active={active} item = "Contact Us"/>
                    </Link>
                    <Link href={"register"} className=" text-[16px] hover:underline peer-hover:underline-offset-1 hover:opacity-90 ">
                    <MenuItem setActive={setActive} active={active} item = "Register"/>
                    </Link>
                    {
                      session ? (
                         <Link href={"api/auth/signout?callbackUrl=/"} className="text-[16px] hover:underline peer-hover:underline-offset-1 hover:opacity-90" >
                            <MenuItem setActive={setActive} active={active} item = "Sign Out"/>
                         </Link> 
                      ):(
                          <Link href={"api/auth/signin"} className="text-[16px] hover:underline peer-hover:underline-offset-1 hover:opacity-90">
                             <MenuItem setActive={setActive} active={active} item = "Sign In"/>
                          </Link>
                      )
                    }
                </Menu>
        </div>
  )
}
