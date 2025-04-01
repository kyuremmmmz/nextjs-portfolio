import React from 'react'

function About() {
  return (
      <section id='#about' className='flex flex-col py-10'>
          <div className=' flex flex-col px-60 '>
              <div className='flex flex-row gap-2 lg:gap-8'>
                  <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">About</h1>
                  <h1 className="text-center md:text-start text-[40px] text-[#00ADB5] md:text-[96px] font-bold">me</h1>
              </div>
              <p className="inline-block w-full md:max-w-2xl md:line-clamp-7 overflow-hidden text-ellipsis">
                  I specialize in building high-quality websites using Javascript
                  Framework like next js, react js, and express js and native coding.
                  As a freelancer for 1 year and 4 months, I’ve helped clients create
                  fast, responsive, and professional websites tailored to their
                  needs.
              </p>
          </div>
    </section>
  )
}

export default About
