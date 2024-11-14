import Image from 'next/image'
import React from 'react'
import sergon from '@/app/src/c1.webp'

const CardSection = () => {
  return (
    <div>
      <div className='bg-[#2a64bb] p-3 rounded-lg relative mb-64'>
        <div>
            <div className='md:w-[50%] p-3 md:p-5 md:pb-48 rounded-l-full '>
                <h1 className='text-[0.8rem] md:text-4xl font-extrabold text-slate-50'>فضای اختصاصی برای کودکان</h1>
            </div>

        </div>
        <div className='absolute top-[30%] right-[40%] '>
            <div className='flex flex-wrap justify-center rounded-2xl'>
                  <figure className=' w-[30vh] md:w-[38vh] p-5 '>
                        <Image  
                        className='rounded-xl cursor-pointer shadow-xl'
                        data-aos='fade-up'
                        src={sergon} alt=''
                        />
                        <figcaption></figcaption>
                  </figure>
                  <figure className=' w-[30vh] md:w-[38vh] p-5 '>
                        <Image  
                        className='rounded-xl cursor-pointer shadow-xl'
                        data-aos='fade-up'
                        src={sergon} alt=''
                        />
                        <figcaption></figcaption>
                  </figure>
                  <figure className=' w-[30vh] md:w-[38vh] p-5 '>
                        <Image  
                        className='rounded-xl cursor-pointer shadow-xl'
                        data-aos='fade-up'
                        src={sergon} alt=''
                        />
                        <figcaption></figcaption>
                  </figure>

            </div>

        </div>
      </div>
    </div>
  )
}

export default CardSection
