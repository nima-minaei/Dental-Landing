import React from 'react'

import { IoLogoInstagram } from "react-icons/io5";
// import { FaFacebookF, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
// import { FaPhone } from 'react-icons/fa';
import { Phone } from 'lucide-react'
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { CircleArrowUp, MapPin } from 'lucide-react';
import Image from 'next/image';
import map from '@/app/src/map.png'




const Footer = () => {
  return (
    <>
            <footer className='bg-[url(../app/src/wavey-fingerprintr.svg)] bg-fixed w-full p-10 text-slate-200 rounded-lg pb-16' id='about-us' >
                <div className='border-b-2 border-slate-200 pb-10 mb-10'>
                    <div className='text-3xl flex cursor-pointer float-left '>
                        <Link href="#main-menu" legacyBehavior passHref>
                            <CircleArrowUp size={36} strokeWidth={2.5} />
                        </Link>
                    </div>
                </div>


                <div className='text-[0.8rem] md:text-lg 2xl:text-xl font-semibold md:flex flex-wrap lg:flex-nowrap items-start'>
                    <div className=" w-full space-y-5 max-w-sm text-xs md:text-sm mb-10">
                    <h5 className='border-b-2 border-slate-200 py-2 inline-block text-[1.3rem] md:text-2xl 2xl:text-3xl'>ارتباط با ما</h5>
                        <div className=' flex'>
                        <MapPin />
                        <span className='pr-3'>مشهد - خیابان فلسطین 19 - پلاک 76 - طبفه دوم</span>
                        </div>
                        <div className='flex items-center'>
                        <Link className='flex items-center' href={"tel:+985138437235"} target="_blank">
                            <Phone />
                                <span className='pr-3 oldstyle-nums'>05138437235 - 09155140975</span>
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <Mail />
                            <span className='pr-3'>dr.saeidderis@gmail.com</span>
                        </div>
                        <div className='flex items-center'>
                            <Link className='flex items-center' href={"https://www.instagram.com/dr.saeid.deris/profilecard/?igsh=MWlvcDQ2NHJseW9vbg=="} target="_blank">
                                <IoLogoInstagram size={26}/>
                                <span className='pr-3'>dr.saeid.deris</span>
                            </Link>
                        </div>

                    </div>
                        <div className='w-full max-w-sm mb-12'>
                            <div className='space-y-4 space-x-32 px-3 text-xs md:text-sm'>
                                <h5 className='border-b-2 border-slate-200 py-2 inline-block text-[1.3rem] md:text-2xl 2xl:text-3xl '>ساعات کاری</h5>
                                <div className='flex w-[80%] justify-between'>
                                    <span>شنبه :</span>
                                    <span>17 الی 22</span>
                                </div>
                                <div className='flex w-[80%] justify-between'>
                                    <span>یکشنبه :</span>
                                    <span>17 الی 22</span>
                                </div>
                                <div className='flex w-[80%] justify-between'>
                                    <span>دوشنبه :</span>
                                    <span>17 الی 22</span>
                                </div>
                                <div className='flex w-[80%] justify-between'>
                                    <span>سه شنبه :</span>
                                    <span>17 الی 22</span>
                                </div>
                                <div className='flex w-[80%] justify-between'>
                                    <span>چهارشنبه :</span>
                                    <span>17 الی 22</span>
                                </div>
                                <div className='flex w-[80%] justify-between'>
                                    <span>پنجشنبه :</span>
                                    <span>17 الی 22</span>
                                </div>
                                <div className='flex w-[80%] justify-between'>
                                    <span>جمعه :</span>
                                    <span>تماس بگیرید</span>
                                </div>
                            </div>
                        </div>
                        <div className='w-max-full '>
                            <div>
                                <Link href={'https://nshn.ir/91_b1J920JGQf8'} target="_blank">
                                    <Image className='rounded-xl object-cover ' src={map} alt='دکتر سعید دریس دندانپزشکی مشهد آدرس' />
                                </Link>
                                <p className='flex justify-center pt-4 text-xs md:text-sm'>برای مسیر یابی روی عکس کلیک کنید</p>
                            </div>
                        </div>

                </div>

            </footer>

            <div className='flex flex-wrap text-[0.8rem] 2xl:text-base sm:justify-between justify-center py-2 sm:px-5 text-slate-700'>
                <p>© کلیه حقوق این وبسایت متعلق به دکتر سعید دریس می باشد.</p>
                {/* <div className='flex space-x-3 mt-5 py-1 sm:m-0'>
                    <FaPhone className='mx-2' />
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaWhatsapp />
                    <IoLogoInstagram />
                </div> */}
            </div>
    </>
  )
}

export default Footer
