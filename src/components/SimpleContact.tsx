import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const SimpleContact = () => {
    return (
        <section className='flex items-center py-10 wrapper'>
            <div className='p-8 bg-[#1b283f] rounded-[12px] flex justify-center items-center w-full relative overflow-hidden group'>
                <div className='flex flex-col items-center justify-center gap-4 z-10 relative'>
                    <span className='text-[42px] translate-y-14 group-hover:translate-y-0 transition-all duration-500 text-gray-50 font-semibold z-10'>Join KanaCourse now to get 35% off</span>
                    <p className='max-w-3xl text-gray-400 text-[20px] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 text-center'>With our responsive themes and mobile and desktop apps, enjoy a seamless experience on any device so will your blog the best visitors</p>
                    <Button className='w-max bg-[#00A2DF] font-medium text-[18px] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700' size={"lg"}>Join now</Button>
                </div>

                <Image src="/images/grid-png.png" alt='' width={620} height={620} className='absolute top-0 right-0 group-hover:translate-x-20 transition-all duration-500' />
                <Image src="/images/grid-png.png" alt='' width={620} height={620} className='absolute top-0 left-0 group-hover:-translate-x-20 transition-all duration-500' />
            </div>
        </section>
    )
}

export default SimpleContact