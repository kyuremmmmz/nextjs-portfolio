"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import me from '../public/me.svg';
import skills from '../public/skillset.svg';
import Button from "@/components/Buttons/Button";
import DownloadCv from "./hooks/DownloadCv";
import About from "@/components/AboutSection/About";

export default function Home() {
  const { downLoadCv } = DownloadCv();

  return (
    <div className="flex flex-col md:flex-row px-[20px] md:justify-between overflow-hidden ">
      <main className="flex flex-col px-[20px] pl-[20px] justify-center items-center lg:items-start lg:justify-end lg:flex-col md:gap-8 ">
        <div className="flex flex-row md:py-[200px] px-50 w-full border-b-2">
          <div className="flex flex-col-reverse justify-center items-center md:flex-row md:items-start md:gap-[100px] md:px-[40px] md:pl-[40px] w-full">
            <div className="flex flex-col flex-grow">
              <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">HEY THERE, IT&apos;S</h1>
              <div className="w-full md:w-[700px] min-h-[96px]">
                <h1 className="text-center md:text-start text-[30px] text-[#00ADB5] md:text-[96px] font-bold">
                  <TypeAnimation
                    sequence={[
                      'TIAN.DEV',
                      10000,
                      ''
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline' }}
                  />
                </h1>
                <div className="flex flex-row py-3 lg:gap-8">
                  <Button
                    componentName={"Hire me"}
                    componentFunction={() => {
                      console.log('Test');
                    }}
                    className={"bg-[#00ADB5] rounded-3xl w-[129px] h-[47px] text-center items-center justify-center lg:py-3 cursor-pointer"}
                  />
                  <Button
                    componentName={"Download CV"}
                    componentFunction={() => {
                      downLoadCv();
                    }}
                    className={"bg-[#393E46] rounded-3xl w-[223px] h-[47px] text-center items-center justify-center lg:py-3 cursor-pointer hover:bg-[#00ADB5] duration-300"}
                  />
                </div>
              </div>
            </div>
            <div className="relative w-[450px] h-[450px] rounded-full p-2 flex items-center justify-center flex-shrink-0 md:order-last sm:items-center sm:justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[520px] lg:h-[520px] object-cover opacity-50 sm:w-[420px] sm:h-[420px]"
                  src={skills}
                  alt="Background Image"
                />
                <Image
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:h-[720px] lg:w-[720px] object-contain rounded-full sm:w-[420px] sm:h-[420px] z-10"
                  src={me}
                  alt="Profile Image"
                />
              </div>
            </div>
          </div>
        </div>
        <About/>
      </main>
    </div>
  );
}