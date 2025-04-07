import useSheets from '@/app/hooks/useSheets/useSheets';
import React from 'react';
import Header from '../Header/Header';



export default  function Testimonials() {
    const { testimonials, loading } = useSheets();
    if (loading) {
        return (
            <div>Loading...</div>
        );
    }
    return (
        <div className=' flex flex-col py-10 px-[10px] lg:px-60 md:px-[200px] items-center justify-center lg:flex-col lg:items-center lg:justify-center lg:py-16'>
            <Header title={"Clients"} title2={'Responses'} />
            <div className=' grid grid-cols-1 gap-6 py-10 lg:grid-cols-3 lg:px-4 lg:items-center  lg:gap-11 lg:justify-center'>
                {testimonials.map((project, index) => (
                              <div key={index} className=' bg-[#1a202c] overflow-hidden cursor-pointer lg:p-10 hover:shadow-lg duration-300 shadow-blue-400 h-full w-full rounded-3xl'>
                                  <div className='flex flex-col gap-2 lg:gap-8'>
                                      <div className='flex flex-col gap-2 lg:gap-8'>
                                          <div className=' w-full h-full overflow-hidden'>
                                          </div>
                                          <div className='flex flex-col gap-2 lg:gap-2 lg:px-10 px-3'>
                                              <h1 className="lg:text-start text-[16px] md:text-start lg:text-[20px] md:text-[20px] font-bold">{project[1]}</h1>
                                              <p className="lg:text-start md:text-start text-[14px] md:text-[16px] break-words whitespace-normal">{project[2]}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))}
                </div>
        </div>
    );
}
