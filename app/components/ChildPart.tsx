import React from 'react'

const ChildPart = () => {
  return (
    <article>
      <div className='w-[80%] md:w-[75%] bg-[url(../app/src/pattern-randomized.svg)] m-auto ring-offset-2 ring rounded-3xl' 
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-duration="500">
        <div className='flex w-full'>
          <svg className='w-[7vh] mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3E96C6"><path d="M11 8V5c-5 0-7 3-7 6v8h7v-7H7c0-4 2-4 4-4ZM20 8V5c-5 0-7 3-7 6v8h7v-7h-4c0-4 2-4 4-4Z"></path></svg>
          <h2 className='py-9 w-full text-4xl md:text-5xl text-[#3e96c6] font-extrabold '>دندان پزشکی کودکان</h2>
        </div>
          <p className='p-10 md:px-20 text-sm md:text-xl leading-7 text-justify'>  
              بهداشت دهان و دندان برای تمامی افراد حیاتی است اما این موضوع در سنین خردسالی از اهمیت خاصی برخوردار می شود. تغذیه اصولی و سالم خردسالان از بدو تولد تا مراحل رشد و تکامل دندان ها امری حیاتی است. شیر مادر نوزادان را قوی کرده و عمل بلع و مکیدن موجب تقویت و رشد استخوان های صورت و فک می شود.
              در کلینیک ما، علاوه بر ارائه روش های تخصصی دندانپزشکی کودکان، اتاق و محیط مخصوص بازی برای آنها نیز فراهم شده است تا کودک دلبند شما تجربه ای به یادماندنی داشته باشد.
          </p>
        </div>
    </article>
  )
}

export default ChildPart
