'use client'

import * as React from "react"
import Image from "next/image"
import award from '@/app/src/award-svg.svg'
import pic from '@/app/src/image1.jpg'

export function CarouselSection() {

  return (
    <>
    <div id='introduce'>
      <div className="flex justify-center">
        <div className="sm:mx-11 py-10 px-5 w-[80vh] md:w-[150vh] flex justify-center">
              <div className="bg-zinc-50 rounded-xl md:flex shadow-2xl "  
              data-aos="fade-up" 
              data-aos-anchor-placement="center-bottom"
              >
                  <Image 
                  width={800}
                  height={800}
                  className="rounded-xl object-cover object-center w-full md:w-1/2" src={pic} alt='دکتر سعید دریس دندانپزشکی مشهد'/>
                        <div className="md:w-[50%] place-self-center mx-3 p-4 md:p-8 text-gray-700 ">
                        <div className='text-xl lg:text-3xl font-extrabold mb-[15%] '>
                            <h2>دندان پزشک نمونه سازمان تامین اجتماعی</h2>
                        </div>
                        <div className=" space-y-2 text-xs lg:text-sm font-extrabold ">
                        <div className="flex items-center">
                            <Image className='w-[5vh]' src={award} alt=''/>
                            <span className="px-2">دندان پزشک نمونه کشور سازمان تامین اجتماعی در سال 1403</span>
                        </div>
                        <div className="flex items-center">
                            <Image className='w-[5vh]' src={award} alt=''/>
                            <span className="px-2">دندان پزشک برتر استان خراسان رضوی در سال 86</span>
                        </div>
                        <div className="flex items-center">
                            <Image className='w-[5vh]' src={award} alt=''/>
                            <span className="px-2">دندان پزشک برتر استان خراسان رضوی در سال 90</span>
                        </div>
                        <div className="flex items-center pb-5">
                            <Image className='w-[5vh]' src={award} alt=''/>
                            <span className="px-2">دندان پزشک نمونه در راستای خدمت رسانی به محرومین و مستضعفین</span>
                        </div>
                        </div>
                    </div> 
                
              </div>
          <div />
        </div> 

      </div>
    </div>
    
    </>
  )
}
