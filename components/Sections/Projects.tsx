import React from 'react'
import { ProjectsKo } from '@/types/Projects'
import Image from 'next/image';
import Header from '../Header/Header';

function Projects() {
    const projects = ProjectsKo;
  return (
      <section id="about" className="flex flex-col py-10 px-24 items-center justify-center lg:flex-col lg:items-center lg:justify-center lg:py-16">
          <Header title="My" title2="Projects"/>
          <div className=' grid grid-cols-1 lg:grid-cols-2 lg:px-4 lg:items-center  lg:gap-11 lg:justify-center'>
              {projects.map((project, index) => (
                  <div key={index} className=' bg-[#1a202c]   overflow-hidden h-full w-full rounded-3xl'>
                      <div className='flex flex-col gap-2 lg:gap-8'>
                          <div className='flex flex-col gap-2 lg:gap-8'>
                              <div className=' w-full h-full'>
                                  <Image src={project.image}  width={900} height={900} alt={''}/>
                              </div>
                              <div className='flex flex-col gap-2 lg:gap-8 px-10'>
                                  <h1 className="text-center md:text-start text-[20px] md:text-[20px] font-bold">{project.title}</h1>
                                  <p className="text-center md:text-start text-[16px] md:text-[16px] break-words whitespace-normal">{project.description}</p>
                              </div>
                              <div className='flex flex-row flex-wrap gap-2 lg:gap-8 px-10'>
                                  {project.technologies.map((tech, index) => (
                                      <div key={index} className='text-center text-[12px] md:text-[16px] font-bold'>{tech}</div>
                                  ))}
                              </div>
                              <div className=' flex flex-row px-10 pb-10 justify-end'>
                                  <button className='cursor-pointer bg-[#393E46] py-3 px-3 rounded-2xl hover:bg-[#00ADB5] duration-300'>View Project</button>
                              </div>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </section>
  )
}

export default Projects
