import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const SimpleContact = () => {
    return (
        <section className='flex items-center py-10 wrapper'>
            <div className='p-8 bg-[#1b283f] rounded-[12px] flex justify-center items-center w-full relative overflow-hidden group'>
                <div className='flex flex-col md:items-center justify-center gap-4 z-10 relative'>
                    <h2 className='md:text-[42px] text-[28px] md:translate-y-14 md:group-hover:translate-y-0 transition-all duration-500 text-gray-50 font-semibold z-10'>Join KanaCourse now to get 35% off</h2>
                    <p className='max-w-3xl text-gray-400 md:text-[20px] text-[18px] md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-700 md:text-center'>With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will your blog the best visitors</p>
                    <Button className='w-max bg-[#00A2DF] font-medium text-[18px] md:opacity-0 md:scale-90 md:group-hover:opacity-100 md:group-hover:scale-100 transition-all duration-700' size={"lg"}>Join now</Button>
                </div>

                <Image src="/images/grid-png.png" alt='' width={620} height={620} className='absolute top-0 right-0 group-hover:translate-x-20 transition-all duration-500 hidden md:block' sizes='100vw' loading='lazy'/>
                <Image src="/images/grid-png.png" alt='' width={620} height={620} className='absolute top-0 left-0 group-hover:-translate-x-20 transition-all duration-500 hidden md:block' sizes='100vw' loading='lazy'/>
                <Image src="/images/grid-png.png" alt='' width={620} height={620} className='absolute opacity-20 top-0 left-0 md:hidden block' sizes='100vw' loading='lazy'/>
            </div>
        </section>
    )
}

export default SimpleContact
