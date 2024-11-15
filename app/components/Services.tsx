import Image from 'next/image'
import React from 'react'
import denervation from '@/app/src/nerv.jpg'
import prosthesis from '@/app/src/denture.jpg'
import wisdom from '@/app/src/toothsurgery.png'
import bliching from '@/app/src/blichh.jpg'


const Services = () => {
  return (
    <div>
      
      <div className='my-20 w-[65%] lg:w-[90%] m-auto' id='services'>
        <div className='p-1 xs:p-16 lg:p-5 lg:flex'>
            <div className='lg:flex w-full text-base lg:text-sm rounded-lg shadow-2xl lg:mx-3 mb-9 lg:mb-0'
            data-aos="zoom-in-right"
            >
                <Image 
                src={wisdom} alt='دکتر سعید دریس جراحی دندان عقل' 
                className='w-full object-cover lg:w-[38vh] xl:w-[44vh] rounded-lg'
                width={400}
                height={300} 
                />
                <div className='place-self-center p-5'>
                    <h2 className='mb-7 text-2xl lg:text-3xl font-extrabold text-[#3e96c6] '>جراحی دندان عقل </h2>
                    <p className='text-justify'>دندان عقل که چهارمین دندان دائمی و سومین دندان آسیاب است، به دلیل وجود نداشتن فضای کافی در لثه ها منجر به درد و عفونت و دیگر مشکلات در دهان شده و نیاز به جراحی پیدا میکند.</p>
                </div>
            </div>
            <div className='lg:flex w-full text-base lg:text-sm rounded-lg shadow-2xl lg:mx-3 mb-9 lg:mb-0'
            data-aos="zoom-in-left"
            >
                <Image 
                src={bliching} alt='دکتر سعید دریس بلیچینگ' 
                className='w-full object-cover lg:w-[38vh] xl:w-[44vh] rounded-lg'
                width={400}
                height={300} 
                />
                <div className='place-self-center p-5'>
                    <h2 className='mb-7 text-2xl lg:text-3xl font-extrabold text-[#3e96c6] '>جرم گیری و بلیچینگ </h2>
                    <p className='text-justify'>در روش بلیچینگ به واسطه مواد شیمیایی که بخش اصلی آن از پراکسیدهیدروژن تشکیل شده است باعث اکسید شدن رنگ دانه های رسوب کرده در مینای دندان میشود و به مرور با عبور کردن از مینای دندان به عاج دندان نیز نفوذ کرده و آن را روشن میکند.</p>
               </div>
            </div>
           
        </div>
        <div className='p-1 xs:p-16 lg:p-5 lg:flex'>
        <div className='lg:flex w-full text-base lg:text-smrounded-lg shadow-2xl lg:mx-3 mb-9 lg:mb-0'
        data-aos="zoom-in-right"
        >
                <Image 
                src={prosthesis} alt='دکتر سعید دریس پروتز دندان' 
                className='w-full object-cover lg:w-[38vh] xl:w-[44vh] rounded-lg'
                width={400}
                height={300} 
                />
                <div className='place-self-center p-5'>
                    <h2 className='mb-5 text-2xl lg:text-3xl font-extrabold text-[#3e96c6] '>پروتز دندان (ثابت و متحرک) </h2>
                    <p className='text-justify'>مهم ترین روش جایگزین برای یک یا چند دندان از دست رفته است که می تواند از نوع ثابت(روکش،بریج،ایمپلنت و...) و یا از نوع متحرک(دندان مصنوعی)باشد.</p>
              </div>
            </div>
            <div className='lg:flex w-full text-base lg:text-sm rounded-lg shadow-2xl lg:mx-3 mb-9 lg:mb-0'
            data-aos="zoom-in-left"
            >
                <Image 
                src={denervation} alt='دکتر سعید دریس عصب کشی' 
                className='w-full object-cover lg:w-[38vh] xl:w-[44vh] rounded-lg'
                width={400}
                height={300} 
                />
                <div className='place-self-center p-5'>
                    <h2 className='mb-7 text-2xl lg:text-3xl font-extrabold text-[#3e96c6] '>درمان ریشه(عصب کشی) </h2>
                    <p className='text-justify'>درمان ریشه عموما برای دندان هایی که پوسیدگی وصیع آنها به عصب رسیده انجام می شود که شامل حذف بافت پوسیده و عفونی و خارج کردن عصب می باشد که در ادامه با تمیز کردن و فرم دهی فضای داخلی دندان و درنهایت با پرکردن و مهر و موم سازی آن خاتمه می یابد.</p>
                </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Services
