import React from 'react'
import Music from '../Svgs/Music'
import Bulb from '../Svgs/Bulb'
import { ProjectsKo } from '@/types/Projects'

function Projects() {
    const projects = ProjectsKo;
  return (
      <section id="about" className="flex flex-col py-10 px-24 items-center justify-center lg:flex-col lg:items-center lg:justify-center lg:py-16">
          <div data-aos="fade-right" className="flex flex-col px-[20px]">
              <div className="flex flex-col gap-2 lg:gap-8">
                  <div className="flex flex-col gap-2 lg:gap-8">
                      <Music />
                      <div className='flex flex-row gap-2 lg:gap-8 lg:pb-20'>
                          <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">My</h1>
                          <h1 className="text-center md:text-start text-[40px] text-[#00ADB5] md:text-[96px] font-bold">Projects</h1>
                          <Bulb />
                      </div>
                  </div>
              </div>
          </div>
          <div className=' grid grid-cols-1 lg:grid-cols-2 lg:px-4 lg:items-center lg:justify-center lg:gap-11 lg:justify-center'>
              {projects.map((project, index) => (
                  <div  key={index} className=''>

                  </div>
              ))}
              <div></div>
              <div></div>
              <div>Teach Tech</div>
              <div>Travel Go V1</div>
              <div></div>
              <div></div>
              <div>Travel Go Mobile V2</div>
              <div>Traditions Wellness Spa - School Project</div>
              <div></div>
              <div></div>
              <div>Edu Portal</div>
              <div></div>
              <div></div>
              <div>Game Information Management System</div>
              <div></div>
              <div></div>
              <div>Dog Collar</div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </section>
  )
}

export default Projects
