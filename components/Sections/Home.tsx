'use client'
import React from 'react'
import { TypeAnimation } from "react-type-animation";
import Button from "@/components/Buttons/Button";
import DownloadCv from '@/app/hooks/DownloadCv';
import Me1 from '../Svgs/Me1';

function HomeSection() {
    const { downLoadCv } = DownloadCv();
    return (
        <div className="flex flex-col-reverse justify-center items-center md:flex-row md:items-start md:gap-[210px] md:px-[40px] md:pl-[40px] xl:gap-[100px] 2xl:gap-[210px]  w-full">
            <div data-aos="fade-right" data-aos-duration="4000" className="flex flex-col flex-grow">
                <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">HEY THERE, IT&apos;S</h1>
                <div className="w-full md:w-[700px] min-h-[96px]">
                    <h1 className="text-center md:text-start text-[30px] text-[#00ADB5] lg:text-[96px] font-bold">
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
            <div data-aos="fade-left" className="relative w-[450px] h-[450px] rounded-full p-2 flex items-center justify-center flex-shrink-0 md:order-last sm:items-center sm:justify-center">
                <div className="absolute inset-0 mt-10 xl:mx-10 flex items-center justify-center">
                    <Me1/>
                </div>
            </div>
        </div>
    )
    }

export default HomeSection
