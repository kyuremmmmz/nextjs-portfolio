"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import img from '../public/arrowAnimation.svg';
import me from '../public/me.svg';
import skills from '../public/skillset.svg';
import Button from "@/components/Buttons/Button";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row px-[20px] md:justify-between overflow-hidden">
      <main className="flex flex-col px-[20px] pl-[20px] justify-center items-center md:flex-row md:gap-8">
        <div className="flex flex-row md:py-[200px] w-full ">
          <Image className="hidden md:block" src={img} width={40} height={40} alt="Arrow Animation" />
          <div className="flex flex-col-reverse justify-center items-center md:flex-row md:items-start md:gap-[500px] md:px-[40px] md:pl-[40px] w-full">
            <div className="flex flex-col flex-grow">
              <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">HEY THERE, IT&apos;S</h1>
              <div className="w-full md:w-[700px] min-h-[96px]">
                <h1 className="text-center md:text-start text-[40px] text-[#00ADB5] md:text-[96px] font-bold">
                  <TypeAnimation
                    sequence={[
                      'TIAN.DEV',
                      10000,
                      'FREELANCER',
                      10000,
                      'A SOFTWARE DEVELOPER',
                      10000,
                      'AN INFO TECH STUDENT',
                      5000,
                      ''
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
                  />
                </h1>
              </div>
              <Button componentName={"Hire me"} componentFunction={() => { console.log('Test');
              }}/>
            </div>
            <div className="relative w-[350px] h-[350px] rounded-full p-2 flex items-center justify-center flex-shrink-0 md:order-last">
              <div className="absolute inset-0">
                <Image
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
                  src={skills}
                  alt="Background Image"
                />
                <Image
                  className="absolute w-[420px] h-[420px] object-contain rounded-full my-20 mr-16  z-10"
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