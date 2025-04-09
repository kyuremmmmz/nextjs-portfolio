import React from 'react'

function ContactForm() {
  return (
    <div data-aos="fade-left">
          <div className='flex flex-col gap-4'>
              <div className=' flex flex-row gap-4'>
                  <div className=' flex flex-col gap-1'>
                      <label htmlFor="">Your Name</label>
                      <input name='name' className=' bg-[#393E46] py-[16px] px-[24px] rounded-[20px]' type="text" placeholder='Name' />
                  </div>
                  <div className=' flex flex-col gap-1'>
                      <label htmlFor="">Your Email</label>
                      <input name='email' className=' bg-[#393E46] py-[16px] px-[24px] rounded-[20px]' type="text" placeholder='Email' />
                  </div>
              </div>
              <div className=' flex flex-col py-2'>
                  <label htmlFor="">Your Message</label>
                  <textarea name='message' className=' bg-[#393E46] 2xl:px-[24px] 2xl:rounded-[20px] 2xl:py-[16px] w-full h-[280px] resize-none' placeholder='Message'/>
              </div>
              <div className=' flex justify-start'>
                  <button className='bg-[#00ADB5] 2xl:h-[47px] 2xl:w-[232px] 2xl:rounded-[20px] cursor-pointer hover:shadow-md duration-300 shadow-blue-400'>Send Message</button>
              </div>
        </div>
    </div>
  )
}

export default ContactForm