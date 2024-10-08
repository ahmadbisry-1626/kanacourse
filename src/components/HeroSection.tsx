import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { CategoryCourse } from './CategoryCourse'
import TopicCourse from './TopicCourse'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className='flex flex-col w-full items-center min-h-screen'>
            <div className='w-full relative h-[600px] flex items-center justify-center bg-[#1b283f]'>
                <Image src="/images/grid-png.png" alt='' height={800} width={800} className='absolute h-full object-cover opacity-20' />
                <Image src="/images/grid-png.png" alt='' height={800} width={800} className='absolute h-full object-cover opacity-20 right-0' />
                <Image src="/images/grid-png.png" alt='' height={800} width={800} className='absolute h-full object-cover opacity-20 left-0' />
                {/* <div className='w-full h-full absolute top-0 left-0 bg-[#1B1B1B]/60 z-10' /> */}

                <div className='flex items-center flex-col z-20'>
                    <h1 id='hero' className='font-semibold text-[52px] text-gray-50'>Learn and Grow <span className='text-[#00A2DF]'>Every Day</span></h1>
                    <p className='font-medium text-gray-200 text-[24px]'>Prepare for a future of limitless possibilities</p>
                </div>

                <div className='w-full max-w-6xl absolute -bottom-10 bg-gray-50 rounded-[24px] z-20 p-6 px-8 overflow-hidden'>
                    <div className='flex flex-col gap-3'>
                        <span className='font-semibold text-[20px]'>What do you want to learn?</span>
                        <div className='flex items-center gap-3 z-10'>
                            <Input className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0' placeholder='Find courses, skills, etc' />
                            <CategoryCourse />
                            <TopicCourse />
                            <Button className='bg-[#00A2DF]'>
                                Search
                            </Button>
                        </div>

                        {/* <Image src="/images/bgcard.png" alt='' width={300} height={300} className='absolute -bottom-24 right-0 opacity-40'/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection