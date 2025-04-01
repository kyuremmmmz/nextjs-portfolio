"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import img from '../public/arrowAnimation.svg';
import me from '../public/me.svg';
import skills from '../public/skillset.svg';
import Button from "@/components/Buttons/Button";
import DownloadCv from "./hooks/DownloadCv";
export default function Home() {
  const { downLoadCv } = DownloadCv();
  return (
    <div className="flex flex-col md:flex-row px-[20px] md:justify-between overflow-hidden">
      <main className="flex flex-col px-[20px] pl-[20px] justify-center items-center md:flex-row md:gap-8">
        <div className="flex flex-row md:py-[200px] w-full ">
          <Image className="hidden md:block" src={img} width={40} height={40} alt="Arrow Animation" />
          <div className="flex flex-col-reverse justify-center items-center md:flex-row md:items-start md:gap-[500px] md:px-[40px] md:pl-[40px] w-full">
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
                  <Button componentName={"Hire me"} componentFunction={() => {
                    console.log('Test');
                  }} className={"bg-[#00ADB5] rounded-3xl w-[129px] h-[47px] text-center items-center justify-center lg:py-3 cursor-pointer"} />
                  <Button componentName={"Download CV"} componentFunction={() => {
                    downLoadCv();
                  }} className={"bg-[#393E46] rounded-3xl w-[223px] h-[47px] text-center items-center justify-center  lg:py-3 cursor-pointer hover:bg-[#00ADB5] duration-300"} />
                </div>
              </div>
            </div>
            <div className="relative w-[350px] h-[350px] rounded-full p-2 flex items-center justify-center flex-shrink-0 md:order-last">
              <div className="absolute inset-0">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                  src={skills}
                  alt="Background Image"
                />
                <Image
                  className="absolute h-[320px] w-[320px] my-10 object-contain rounded-full lg:w-[420px] lg:h-[420px] lg:my-20 lg:mr-16  z-10"
                  src={me}
                  alt="Profile Image"
                />
                
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}