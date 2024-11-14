"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import pic from "@/app/src/p1.webp"
import { Stethoscope } from 'lucide-react';
import { GraduationCap } from 'lucide-react'
import { CircleCheck } from 'lucide-react';
import "aos/dist/aos.css";
import AOS from "aos";

const Resume = () => {

    useEffect(() => {
        AOS.init({duration:1200})
    }, [])

  return (
    <div>
      
      <div className='my-10'>

      <div>
            <div className="pt-10 px-3 md:p-10 ">
                <div className="md:flex">
                    <div className="md:w-[50%] mx-3 p-4 md:p-8 py-10 bg-[#3e96c6] rounded-xl text-gray-100 shadow-2xl" data-aos="flip-left">
                        <div className='text-3xl sm:text-5xl lg:text-4xl xl:text-7xl font-extrabold mb-[26%]'>
                            <h2>دندانپزشکی در مشهد </h2>
                        </div>
                        <div className='text-slate-100 text-xs sm:text-base md:text-lg'>
                            <p>دکتر سعید دریس فارغ التحصیل دانشگاه تهران با مدرک دکتری حرفه ای،ارائه دهنده به روزترین خدمات دندانپزشکی در مشهد می باشد.</p>
                        </div>
                    </div>
                    <div className='md:w-[50%] mx-3 mt-10 md:mt-0 shadow-2xl rounded-xl text-gray-700 ' data-aos="flip-right">
                            <div className='flex py-10 justify-around'>
                                <div className=" md:w-[50%] px-5 space-y-4 text-xs sm:text-base lg:text-lg "> 
                                    <div className="flex justify-start items-center">
                                        <Stethoscope color='#3e96c6' />
                                        <span className="px-2">23 سال تجربه و تخصص</span>
                                    </div>
                                    <div className="flex justify-start items-center">
                                        <GraduationCap color='#3e96c6'/>
                                        <span className="px-2">فارغ التحصیل دانشگاه تهران</span>
                                    </div>
                                    <div className="flex justify-start items-center">
                                        <CircleCheck color='#3e96c6'/>
                                        <span className="px-2">استفاده از مرغوب ترین متریال</span>
                                    </div>
                                </div>
                                <div>
                                    <h2 className='text-lg sm:text-2xl lg:text-4xl md:text-2xl font-extrabold py-4'>دکتر سعید دریس</h2>
                                </div> 
                            </div>
                            <figure className='flex justify-end'>
                                <Image src={pic} alt='دکتر سعید دریس دندانپزشکی مشهد'className="w-[30%] rounded-lg"/>
                                <figcaption></figcaption>
                            </figure>
                    </div>
                </div>
            </div>
      
      </div>

      </div>


    </div>
  )
}

export default Resume
