'use client'
import useAOS from '@/app/hooks/useAOS/useAOS'
import React from 'react'
import Me from '../Svgs/Me';
import Bulb from '../Svgs/Bulb';
import Music from '../Svgs/Music';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function About() {
    useAOS();
    return (
        <section id="about" className="flex flex-col py-10  items-center lg:px-[20px] lg:flex-row lg:gap-16 lg:justify-center lg:py-32 lg:w-full 2xl:px-60 2xl:gap-16">
            <div data-aos="fade-right" className="flex flex-col px-[20px] lg:px-[25px] 2xl:px-[200px]">
                <div className="flex flex-row gap-2 lg:gap-8">
                    <div className="flex flex-col gap-2 lg:gap-8">
                        <Music/>
                        <div className='flex flex-row gap-2 lg:gap-8'>
                            <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">About</h1>
                            <h1 className="text-center md:text-start text-[40px] text-[#00ADB5] md:text-[96px] font-bold">me</h1>
                            <Bulb />
                        </div>
                    </div>
                </div>
                <p className="inline-block w-full md:max-w-2xl md:line-clamp-7 overflow-hidden text-ellipsis">
                    Hi, I’m Christian David Jasmin, a passionate web developer specializing in crafting high-quality websites. I work with powerful JavaScript frameworks like Next.js, React.js, and Express.js, alongside native coding, to bring ideas to life. With 1 year and 4 months of freelancing experience, I’ve had the privilege of helping clients build fast, responsive, and professional websites tailored to their unique needs.
                </p>
                <div className='flex flex-row justify-start py-[10px] gap-4 lg:py-[25px] lg:gap-2 lg:justify-start'>
                    <FontAwesomeIcon icon={faGithub} className='' />
                    <FontAwesomeIcon icon={faLinkedin} className='' />
                    <FontAwesomeIcon icon={faInstagram} className='' />
                    <FontAwesomeIcon icon={faFacebook} className='' />
                    <FontAwesomeIcon icon={faGoogle} className='' />
                </div>
            </div>
            <div>
                <Me/>
            </div>
        </section>
    );
}

export default About