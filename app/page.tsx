"use client";
import About from "@/components/Sections/About";
import GetIntouch from "@/components/Sections/GetIntouch";
import HomeSection from "@/components/Sections/Home";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Testimonials from "@/components/Sections/Testimonials";
import 'aos/dist/aos.css';
export default function Home() {
  return (
    <div className="flex flex-col lg:flex-col lg:justify-between overflow-hidden ">
      <main className="flex flex-col  justify-center items-center py-5 lg:items-start lg:justify-end lg:flex-col md:gap-8 ">
        <div id="home" className="flex flex-row pb-[50px] lg:py-[200px] lg:px-[0px] xl:px-[55px] xl:py-[100px] xl:pb-[220px] 2xl:px-64">
          <HomeSection/>
        </div>
        <div className=" w-full border-b-2 border-white ">
          {/* SECTION BORDER */}
        </div>
        <About />
        <div className=" w-full border-b-2 border-white ">
          {/* SECTION BORDER */}
        </div>
      </main>
      <Skills />
      <div className=" w-full border-b-2 border-white ">
        {/* SECTION BORDER */}
      </div>
      <Projects />
      <div className=" w-full border-b-2 border-white ">
        {/* SECTION BORDER */}
      </div>
      <Testimonials />
      <div className=" w-full border-b-2 border-white ">
        {/* SECTION BORDER */}
      </div>
      <GetIntouch/>
    </div>
  );
}