import React from 'react'
import Contact from '../Svgs/Contact'
import ContactForm from '../Form/ContactForm'
import HeaderColumn from '../Header/HeaderColumn'


function GetIntouch() {
  return (
    <section id="contact" className="flex flex-col py-10  items-center lg:px-[20px] lg:flex-row lg:justify-start lg:py-32 lg:w-full 2xl:px-[96px] ">
      <div className=' flex flex-col xl:flex-row gap-10'>
        <div className=' xl:px-[50px] 2xl:px-42'>
          <HeaderColumn title={'Got a project in'} title2={'mind?'} />
          <div className=' flex justify-center'>
            <Contact />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center'>
          <ContactForm/>
        </div>
      </div>
    </section>
  )
}

export default GetIntouch