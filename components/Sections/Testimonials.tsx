"use client"; // Mark as Client Component due to useState and useSheets

import useSheets from '@/app/hooks/useSheets/useSheets';
import React, { useState } from 'react';
import Header from '../Header/Header';
import Button from '../Buttons/Button';

export default function Testimonials() {
    const { testimonials, loading } = useSheets();
    const [expanded, setExpanded] = useState<number[]>([]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const toggleReadMore = (index: number) => {
        setExpanded((prev) =>
            prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
    };

    return (
        <div className="flex flex-col py-10 px-[10px] lg:px-60 md:px-[200px] items-center justify-center lg:flex-col lg:items-center lg:justify-center lg:py-16">
            <Header title="Clients" title2="Responses" />
            <div className="grid grid-cols-1 gap-6 py-10 lg:grid-cols-3 lg:px-4 lg:items-center lg:gap-11 lg:justify-center">
                {testimonials.slice(0,6).map((project, index) => {
                    const text = project[2];
                    const isLongText = text.split('\n').length > 4 || text.length > 150;
                    const isExpanded = expanded.includes(index);

                    return (
                        <div
                            key={index}
                            className="bg-[#1a202c] overflow-hidden cursor-pointer lg:p-10 hover:shadow-lg duration-300 shadow-blue-400 h-full w-full rounded-3xl"
                        >
                            <div className="flex flex-col gap-2 lg:gap-8">
                                <div className="flex flex-col gap-2 lg:gap-8">
                                    <div className="w-full h-full overflow-hidden"></div>
                                    <div className="flex flex-col gap-2 lg:gap-2 lg:px-10 px-3">
                                        <h1 className="lg:text-start text-[16px] md:text-start lg:text-[20px] md:text-[20px] font-bold">
                                            {project[1]}
                                        </h1>
                                        <p
                                            className="lg:text-start md:text-start text-[14px] md:text-[16px] break-words whitespace-normal"
                                            style={{
                                                display: '-webkit-box',
                                                WebkitBoxOrient: 'vertical',
                                                WebkitLineClamp: isExpanded ? 'unset' : 4, 
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {text}
                                        </p>
                                        {isLongText && (
                                            <button
                                                onClick={() => toggleReadMore(index)}
                                                className="text-blue-400 hover:underline text-[14px] md:text-[16px] mt-2"
                                            >
                                                {isExpanded ? 'Read Less' : 'Read More'}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {testimonials.length == 6 ? (
                <div className=' text-center bg-'>
                    <Button componentName={'View more'} className={'bg-[#393E46] rounded-2xl w-[223px] h-[47px] text-center items-center justify-center lg:py-3 cursor-pointer hover:bg-[#00ADB5] duration-300'}/>
                </div>
            ) : ''}
        </div>
    );
}