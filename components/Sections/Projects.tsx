import React from 'react'
import { ProjectsKo } from '@/types/Projects'
import Image from 'next/image';
import Header from '../Header/Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Projects() {
    const projects = ProjectsKo;
  return (
      <section id="about" className="flex flex-col py-10 px-60 items-center justify-center lg:flex-col lg:items-center lg:justify-center lg:py-16">
          <Header title="My" title2="Projects"/>
          <div className=' grid grid-cols-1 lg:grid-cols-2 lg:px-4 lg:items-center  lg:gap-11 lg:justify-center'>
              {projects.map((project, index) => (
                  <div key={index} className=' bg-[#1a202c]   overflow-hidden h-full w-full rounded-3xl'>
                      <div className='flex flex-col gap-2 lg:gap-8'>
                          <div className='flex flex-col gap-2 lg:gap-8'>
                              <div className=' w-full h-full overflow-hidden'>
                                  <Image src={project.image} className='w-full h-[400px]'  width={0} height={0} alt={''}/>
                              </div>
                              <div className='flex flex-col gap-2 lg:gap-8 px-10'>
                                  <h1 className="text-center md:text-start text-[20px] md:text-[20px] font-bold">{project.title}</h1>
                                  <p className="text-center md:text-start text-[16px] md:text-[16px] break-words whitespace-normal">{project.description}</p>
                              </div>
                              <div className='flex flex-row flex-wrap gap-2 lg:gap-8 pb-10 px-10'>
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

export default Projects
