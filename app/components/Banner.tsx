import Image from "next/image"
import implant from '@/app/src/dental-implant.png'
import laminet from '@/app/src/tooth-whitening.png'
import composite from '@/app/src/bridges.png'
import pair from '@/app/src/bonding.png'


const Banner = () => {

  return (
    <div>
        <section className='bottom-[1%] my-16 flex bg-[url(../app/src/wavey-fingerprint.svg)] bg-fixed w-full m-auto md:p-3 md:px-44 items-center text-center bg-repeat text-slate-50 rounded-lg '>
            <div className='md:flex text-[0.9rem] md:text-lg 2xl:text-xl font-bold justify-around w-full' >
                <div className='p-5 space-y-2 pb-3' data-aos="zoom-in">
                    <Image src={implant} alt="دکتر سعید دریس ایمپلنت" className="block m-auto"/>
                    <h2 className='text-2xl md:text-3xl 2xl:text-5xl py-5'>ایمپلنت</h2>
                    <span>به روزترین روش کاشت دندان</span>
                </div>
                <div className='p-5 space-y-2' data-aos="zoom-in">
                    <Image src={composite} alt="دکتر سعید دریس کامپوزیت" className="block m-auto" />
                    <h2 className='text-2xl md:text-3xl 2xl:text-5xl py-5' >کامپوزیت</h2>
                    <span>پیاده سازی در کوتاه ترین زمان ممکن</span>
                </div>
            </div>
            <div className='md:flex text-[0.9rem] md:text-lg 2xl:text-xl font-bold justify-around w-full'>
                <div className='p-5 space-y-2 pb-3' data-aos="zoom-in">
                    <Image src={laminet} alt="دکتر سعید دریس لمینت" className="block m-auto" />
                    <h2 className='text-2xl md:text-3xl 2xl:text-5xl py-5' >لمینت</h2>
                    <span>استفاده از بهترین برندهای روز دنیا</span>
                </div>
                <div className='p-5 space-y-2' data-aos="zoom-in">
                    <Image src={pair} alt="دکتر سعید ترمیم دندان" className="block m-auto" />
                    <h2 className='text-2xl md:text-3xl 2xl:text-5xl py-5' >ترمیم</h2>
                    <span>بازسازی هرگونه دندان آسیب دیده</span>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner
