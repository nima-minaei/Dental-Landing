"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import pic from "@/app/src/IMG_0833.png"
import { FaCircleCheck } from "react-icons/fa6";
import { Stethoscope } from 'lucide-react';
import { GraduationCap } from 'lucide-react'
import { CircleCheck } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import "aos/dist/aos.css";
import AOS from "aos";
import Link from 'next/link';

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
                <div className="md:w-[50%] place-self-center mx-3 md:p-6 bg-[#3e96c6] rounded-xl text-gray-50 shadow-2xl" data-aos="flip-left">
                    <div className=" p-4 mb-3 font-extrabold text-[1.3rem] lg:text-2xl 2xl:text-4xl">
                      <h3>برترین خدمات را از کلینیک ما بخواهید</h3>
                    </div>
                    <div className="text-justify p-5 pb-12 text-sm lg:text-base 2xl:text-lg">
                      <p>ما در کلینیک دریس دنتال همواره با ارائه خدمات به روز درکنار تعرفه ها و شرایط پرداخت مناسب، به دنبال کسب رضایت مراجعین عزیزمان هستیم</p> 
                    </div>
                    <div className=" space-y-4 text-xs lg:text-sm px-5 font-extrabold ">
                      <div className="flex items-center">
                        <FaCircleCheck/>
                        <span className="px-2">جلسات مشاوره و معاینه رایگان</span>
                      </div>
                      <div className="flex items-center">
                        <FaCircleCheck/>
                        <span className="px-2">کادر مجرب و متخصص</span>
                      </div>
                      <div className="flex items-center">
                        <FaCircleCheck/>
                        <span className="px-2">مناسب ترین تعرفه های درمانی</span>
                      </div>
                      <div className="flex items-center pb-5">
                        <FaCircleCheck/>
                        <span className="px-2">امکان نوبت دهی حضوری و تلفنی</span>
                      </div>
                    </div>
                </div>
                            {/* <p>دکتر سعید دریس فارغ التحصیل دانشگاه تهران با مدرک دکتری حرفه ای،ارائه دهنده به روزترین خدمات دندانپزشکی در مشهد می باشد.</p> */}
                    <div className='md:w-[50%] mx-3 mt-10 md:mt-0 shadow-2xl rounded-xl text-gray-700' data-aos="flip-right">
                            <div className='flex py-8 justify-around'>
                                <div className=" md:w-[50%] pr-5 space-y-4 text-[0.65rem] sm:text-base lg:text-lg "> 
                                    <div className="flex justify-start items-center">
                                        <Stethoscope color='#3e96c6' size={18} />
                                        <span className="px-2">26 سال تجربه و تخصص</span>
                                    </div>
                                    <div className="flex justify-start items-center">
                                        <GraduationCap color='#3e96c6' size={18}/>
                                        <span className="px-2">فارغ التحصیل دانشگاه تهران</span>
                                    </div>
                                    <div className="flex justify-start items-center">
                                        <CircleCheck color='#3e96c6' size={18}/>
                                        <span className="px-2">استفاده از مرغوب ترین متریال</span>
                                    </div>

                                </div>
                                <div>
                                    <h2 className='text-lg sm:text-2xl lg:text-4xl md:text-2xl font-extrabold py-4 pl-1'>دکتر سعید دریس</h2>
                                </div> 
                            </div>
                            <figure className='flex justify-between'>
                                    <div className="flex items-center px-[6%] text-xs sm:text-base lg:text-lg font-extrabold">
                                        <ExternalLink color='#3e96c6'/>
                                        <span className="px-2" >
                                            برای مشاهده <Link className='hover:underline hover:decoration-[#3e96c6] hover:underline-offset-8 hover:text-[#3e96c6]' href={"https://membersearch.irimc.org/member/profile?id=75807f36-2443-4168-abed-8a4420b06576"} target="_blank">صفحه نظام پزشکی دکتر سعید دریس </Link> کلیک کنید  
                                        </span>
                                    </div>
                                <Image src={pic} alt='دکتر سعید دریس دندانپزشکی مشهد'className="w-[26%] rounded-lg"/>
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