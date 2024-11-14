'use client'

import * as React from "react"
import Image from "next/image"
import { FaCircleCheck } from "react-icons/fa6";
import pic from '@/app/src/c2.png'

export function CarouselSection() {

  return (
    <>
      <div className="flex justify-center" >
        <div className="sm:mx-11 py-10 px-5 w-[80vh] md:w-[150vh] flex justify-center">
              <div className="bg-zinc-50 rounded-xl md:flex shadow-2xl "  
              data-aos="fade-up" 
              data-aos-anchor-placement="center-bottom"
              >
                  <Image 
                  width={800}
                  height={800}
                  className="rounded-xl object-cover object-center w-full md:w-1/2" src={pic} alt='دکتر سعید دریس دندانپزشکی مشهد'/>
                <div className=" place-self-center md:w-[50%] py-10">
                    <div className=" p-5 mb-3 font-extrabold text-[1.3rem] lg:text-2xl 2xl:text-4xl text-[#3e96c6]">
                      <h3>برترین خدمات را از کلینیک ما بخواهید</h3>
                    </div>
                    <div className="text-justify p-5 pb-10 text-sm lg:text-base 2xl:text-lg">
                      <p>ما در کلینیک دریس دنتال همواره با ارائه خدمات به روز درکنار تعرفه ها و شرایط پرداخت مناسب، به دنبال کسب رضایت مراجعین عزیزمان هستیم</p> 
                    </div>
                    <div className=" space-y-4 text-xs lg:text-sm px-5 font-extrabold ">
                      <div className="flex items-center">
                        <FaCircleCheck color='#3e96c6'/>
                        <span className="px-2">جلسات مشاوره و معاینه رایگان</span>
                      </div>
                      <div className="flex items-center">
                        <FaCircleCheck color='#3e96c6'/>
                        <span className="px-2">کادر مجرب و متخصص</span>
                      </div>
                      <div className="flex items-center">
                        <FaCircleCheck color='#3e96c6'/>
                        <span className="px-2">مناسب ترین تعرفه های درمانی</span>
                      </div>
                      <div className="flex items-center pb-5">
                        <FaCircleCheck color='#3e96c6'/>
                        <span className="px-2">امکان نوبت دهی حضوری و تلفنی</span>
                      </div>
                    </div>
                </div>
                
              </div>
          <div />
        </div> 

      </div>
    
    </>
  )
}
