import React from 'react'
import MusicSchoolData from "../data/music_school_data.json" 
import { StickyScroll } from './ui/sticky-scroll-reveal'
const content = MusicSchoolData.musicSchoolContent
export default function WhyWeChooseUs() {

  return (
     <div className=" ">
      <StickyScroll content={content} />
    </div>
  )
}
