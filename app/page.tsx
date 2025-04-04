"use client";
import About from "@/components/AboutSection/About";
import HomeSection from "@/components/HomeSection/Home";
import 'aos/dist/aos.css';
export default function Home() {
  return (
    <div className="flex flex-col lg:flex-col lg:justify-between overflow-hidden ">
      <main className="flex flex-col  justify-center items-center lg:items-start lg:justify-end lg:flex-col md:gap-8 ">
        <div className="flex flex-row pb-[50px] lg:py-[200px] px-50">
          <HomeSection/>
        </div>
        <div className=" w-full border-b-2 border-white ">
          {/* SECTION BORDER */}
        </div>
        <About/>
      </main>
    </div>
  );
}