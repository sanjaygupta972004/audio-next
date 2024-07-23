"use client"
 import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
        {
          quote:
            'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
          name: 'Alex Johnson',
          title: 'Guitar Student',
        },
        {
          quote:
            "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
          name: 'Samantha Lee',
          title: 'Piano Student',
        },
        {
          quote:
            "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
          name: 'Michael Chen',
          title: 'Vocal Student',
        },
        {
          quote:
            'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
          name: 'Emily Taylor',
          title: 'Violin Student',
        },
        {
          quote:
            'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
          name: 'Chris Morales',
          title: 'Music Production Student',
        },
 ];

export default function MusicSchoolTestimonial(){
   return(
        <div className=" w-full h-auto mx-auto flex justify-center flex-col items-center py-5 gap-5 lg:gap-6">
                <div className=" mt-8 pt-5 md:pt-10 ">
                       <h2 className=" text-4xl md:text-5xl text-center tracking-tight font-normal ">
                         Hear Our Harmony : Voices of Success
                       </h2>
                </div>
                <div className=" h-[35rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden bottom-3"> 
                <InfiniteMovingCards
                   items={musicSchoolTestimonials}
                   direction="right"
                   speed="slow"
                 />
          </div>
        </div>
 )
}