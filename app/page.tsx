"use client"
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import img from '../public/arrowAnimation.svg';
import me from '../public/me.svg';
import skills from '../public/skillset.svg';
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row px-[20px] md:justify-between overflow-hidden">
      <main className="flex flex-col px-[20px] pl-[20px] justify-center items-center md:flex-row ">
        <div className="flex flex-row py-[20px]">
          <Image className="hidden md:show" src={img} width={40} height={40} alt="Arrow Animation" />
          <div className="flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:items-end  md:px-[40px] md:pl-[40px] ">
            <div>
              <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">HEY THERE, IT&apos;S</h1>
              <h1 className="text-center md:text-start text-[40px] text-[#00ADB5] md:text-[96px] font-bold">
                <TypeAnimation
                  sequence={[
                    'TIAN.DEV',
                    10000,
                    'A FREELANCER',
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
                  style={{ fontSize: '', display: 'inline-block' }}
                />
              </h1>
            </div>
            <div className="relative w-[250px] h-[250px]  rounded-full p-2 flex items-center justify-center">
              <div className=" absolute">
                <Image
                  className="absolute top-0  left-0 w-full h-full object-cover opacity-50"
                  src={skills}
                  alt="Background Image"
                />
                <Image className="relative w-[220px] h-[220px] object-contain rounded-full" src={me} alt="Profile Image" />
                
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
