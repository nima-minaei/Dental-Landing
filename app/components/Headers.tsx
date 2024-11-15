
import Image from 'next/image'
import React from 'react'
import pic from "@/app/src/IMG_0751.jpg"

const Header = () => {
  return (
    <>
        <div className='relative z-0 w-full' id='main-menu'>
            <div className='absolute bottom-[20%] py-4 px-5 sm:p-6 rounded-e-3xl md:m-auto backdrop-blur-md bg-black/15 w-[45%] shadow-xl'>
              <div className='relative place-self-center text-[0.5rem] sm:text-[0.75rem] md:text-lg lg:px-1 2xl:py-10 text-gray-100 '>
                <h1 className='text-center mb-4 2xl:mb-8 font-extrabold text-[0.85rem] sm:text-2xl md:text-4xl '>کلینک دندانپزشکی دریس دنتال</h1>
                <p className='text-center'>زیبایی لبخند خود را از ما بخواهید</p>
              </div>
            </div>
            {/* <div className='absolute bottom-5 left-5 text-[0.5rem] sm:text-[1rem] w-[20%] md:w-[11%] bg-slate-50 rounded-xl'>
              <div className=' flex p-3'>
                <div className='rounded-xl'>
                  <Image src={pic} alt='' className='rounded-md' />
                  <p className='text-center py-3'>دکتر سعید دریس</p>
                </div>
              </div>
            </div> */}
            <figure className='w-full'
                              style={{
                                width: '100%',
                                objectFit: "cover"
                                }}>
              <Image src={pic} alt='دکتر سعید دریس دندانپزشکی مشهد' width={2000} height={1000} className='object-cover h-[35dvh] sm:h-[48dvh] md:h-[70dvh] lg:h-[97dvh] object-left-top ' />
              <figcaption></figcaption>
            </figure>
        </div>
    
    </> 
  )
}

export default Header
