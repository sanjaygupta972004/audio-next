import HeroSection from "@/components/HeroSection";
import FeatureCourses from "@/components/FeatureCourses";
import WhyWeChooseUs from "@/components/WhyWeChooseUs";
import MusicSchoolTestimonial from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <main className=" min-h-screen bg-black/95 antialiased flex items-center ">
        <HeroSection/>
      </main>
      <div className=" bg-gray-900 py-12">
         <FeatureCourses/>
      </div>
      <div>
        <WhyWeChooseUs/>
      </div>
      <div className=" w-full bg-black bg-grid-black/[0.3]">
          <MusicSchoolTestimonial/>
      </div>
      <div>
         <UpcomingWebinars/>                                       
      </div>
      <div>
          <Footer/>
        </div>
     </>
  );
}
