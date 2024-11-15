'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Sheet ,SheetTrigger, SheetContent, SheetHeader, SheetDescription,} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import logo from '@/app/src/logo.png'
import Link from 'next/link'


const scrollToHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}
const sideBarToggler = document.querySelector(".default")
const sideBar = document.querySelector(".mini")
sideBarToggler?.addEventListener("click", () => {
  sideBar?.classList.toggle("mini")
})

export default function NavBar(){


  const [open, setOpen] = useState<boolean>(false) 
    return (
    <>
    <div className='fixed backdrop-blur-3xl bg-black/15 text-slate-900 rounded-b-lg w-full z-10' id='main-menu'>
      <div className='relative over flex px-6 md:px-14 py-1'>
        <div className='default sm:hidden flex w-full items-center'>
          <Sheet open={open} onOpenChange={setOpen}>
            
            <SheetTrigger><Menu/></SheetTrigger>
            <SheetContent className='w-full bg-[url(../app/src/pattern-randomized.svg)] text-slate-900'>
              <SheetHeader className=' mini pt-16 space-y-6 font-bold text-zinc-900'>
                <SheetDescription onClick={() => {
                  setOpen(false)
                  scrollToHash("main-menu")}}>صفحه اصلی</SheetDescription>
                <SheetDescription onClick={() => {
                  setOpen(false)
                  scrollToHash("introduce")}}> درباره ما</SheetDescription>
                <SheetDescription onClick={() => {
                  setOpen(false)
                  scrollToHash("services")}}>خدمات</SheetDescription>
                <SheetDescription onClick={() => {
                  setOpen(false)
                  scrollToHash("about-us")}}>تماس با ما</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

          <nav className='hidden sm:flex w-full items-center '>
          <Link href="#main-menu" legacyBehavior passHref>
              <h1 className='text-[0.58rem] md:text-xl 2xl:text-xl font-extrabold inline-flex items-center hover:cursor-pointer rounded-md mx-2 sm:px-3 w-max text-sm '>
                صفحه اصلی
              </h1>
          </Link>
            <div onClick={() => {scrollToHash("introduce")}}>
              <h1 className='text-[0.58rem] md:text-xl 2xl:text-xl font-extrabold inline-flex items-center hover:cursor-pointer rounded-md mx-2 sm:px-3 w-max text-sm '>
              درباره ما
              </h1>
            </div>
            <div onClick={() => {scrollToHash("services")}}>
              <h1 className='text-[0.58rem] md:text-xl 2xl:text-xl font-extrabold inline-flex items-center hover:cursor-pointer rounded-md mx-2 sm:px-3 w-max text-sm '>
                خدمات
              </h1>
            </div>
            <div onClick={() => {scrollToHash("about-us")}}>
              <h1 className='text-[0.58rem] md:text-xl 2xl:text-xl font-extrabold inline-flex items-center hover:cursor-pointer rounded-md mx-2 sm:px-3 w-max text-sm '>
                تماس با ما
              </h1>
            </div>
          </nav>
          <div className='w-max left-0'>
          <div>
              <Image src={logo} alt='logo' className='float-left object-cover w-[6vh] md:w-[9vh] items-center'/>
            </div>
          </div>
      </div>

    </div>

  </>
)
}
