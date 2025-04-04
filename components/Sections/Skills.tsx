import React from 'react'
import Music from '../Svgs/Music'
import Bulb from '../Svgs/Bulb'
import SkillsBadge from '../Badge/Skills'

function Skills() {
  return (
    <section id="about" className="flex flex-col py-10 px-24 items-center justify-center lg:flex-col lg:items-center lg:justify-center lg:py-16">
            <div data-aos="fade-right" className="flex flex-col px-[20px] lg:px-60">
                <div className="flex flex-row gap-2 lg:gap-8">
                    <div className="flex flex-col gap-2 lg:gap-8">
                        <Music/>
                        <div className='flex flex-row gap-2 lg:gap-8 text-center'>
                            <h1 className="text-center md:text-start text-[40px] md:text-[96px] font-bold">My</h1>
                            <h1 className="text-center md:text-start text-[40px] text-[#00ADB5] md:text-[96px] font-bold">Skills</h1>
                            <Bulb />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SkillsBadge/>
            </div>
        </section>
  )
}

export default Skills
