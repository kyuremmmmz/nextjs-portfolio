'use client'
import React from 'react'
import { ProjectsKo } from '@/types/Projects'
import Image from 'next/image';
import Header from '../Header/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/navigation';

export default function Projects() {
    const projects = ProjectsKo;
    const router = useRouter();
  return (
      <section id="about" className="flex flex-col py-10 px-[10px] lg:px-60 md:px-[200px] items-center justify-center lg:flex-col lg:items-center lg:justify-center lg:py-16">
          <Header title="My" title2="Projects"/>
          <div className=' grid grid-cols-1 gap-6 py-10 lg:grid-cols-2 lg:px-4 lg:items-center  lg:gap-11 lg:justify-center'>
              {projects.map((project, index) => (
                  <div onClick={() => {
                      router.push(project.github);
                  }} key={index} className=' bg-[#1a202c] overflow-hidden  cursor-pointer hover:shadow-lg duration-300 shadow-blue-400 h-full w-full rounded-3xl'>
                      <div className='flex flex-col gap-2 lg:gap-8'>
                          <div className='flex flex-col gap-2 lg:gap-8'>
                              <div className=' w-full h-full overflow-hidden'>
                                  <Image src={project.image} className='w-full h-[150px] lg:h-[400px]'  width={0} height={0} alt={''}/>
                              </div>
                              <div className='flex flex-col gap-2 lg:gap-2 lg:px-10 px-3'>
                                  <h1 className="lg:text-start text-[16px] md:text-start lg:text-[20px] md:text-[20px] font-bold">{project.title}</h1>
                                  <p className="lg:text-start md:text-start text-[14px] md:text-[16px] break-words whitespace-normal">{project.description}</p>
                              </div>
                              <div className='flex flex-row flex-wrap gap-2 lg:gap-8 lg:px-10 pb-10 px-3'>
                                  {project.technologies.map((tech, index) => (
                                      <div key={index} className='flex flex-row gap-2 text-center items-center text-[12px] md:text-[16px] font-bold'><FontAwesomeIcon icon={tech.icon} className="text-gray-400" />
                                          <span>{tech.name}</span>
                                      </div>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </section>
  )
}

