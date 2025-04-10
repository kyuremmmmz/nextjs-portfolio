'use client'
import useMail from '@/app/hooks/useMail/useMail';
import React, { useActionState } from 'react'

function ContactForm() {
    const mailHandler = useMail;
    const [state, action, pending] = useActionState(mailHandler, undefined);
  return (
      <div data-aos="fade-left">
          <form action={action}>
              <div className='flex flex-col gap-4'>
                  <div className=' flex flex-row gap-4'>
                      <div className=' flex flex-col gap-1'>
                          <label htmlFor="">Your Name</label>
                          <input name='clientName' className=' bg-[#393E46] py-[16px] px-[24px] rounded-[20px]' type="text" placeholder='Name' />
                          {state?.errors?.clientName && <p>{state.errors.clientName}</p>}
                      </div>
                      <div className=' flex flex-col gap-1'>
                          <label htmlFor="">Your Email</label>
                          <input name='clientEmail' className=' bg-[#393E46] py-[16px] px-[24px] rounded-[20px]' type="text" placeholder='Email' />
                          {state?.errors?.clientEmail && <p>{state.errors.clientEmail} </p>}
                      </div>
                  </div>
                  <div className=' flex flex-col py-2'>
                      <label htmlFor="">Your Message</label>
                      <textarea name='message' className=' bg-[#393E46] 2xl:px-[24px] 2xl:rounded-[20px] 2xl:py-[16px] w-full h-[280px] resize-none' placeholder='Message' />
                      {state?.errors?.message && <p>{state.errors.message}</p>}
                  </div>
                  <div className=' flex justify-start'>
                      <button disabled={pending} className='bg-[#00ADB5] 2xl:h-[47px] 2xl:w-[232px] 2xl:rounded-[20px] cursor-pointer hover:shadow-md duration-300 shadow-blue-400'>{pending ? 'Sending...' : 'Send Message'}</button>
                  </div>
              </div>
          </form>
    </div>
  )
}

export default ContactForm