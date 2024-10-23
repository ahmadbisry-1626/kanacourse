import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { CategoryCourse } from './CategoryCourse'
import TopicCourse from './TopicCourse'
import { Button } from './ui/button'

const HeroSection = () => {
    return (
        <div className='flex flex-col w-full items-center md:min-h-screen'>
            <div className='w-full relative h-[600px] flex items-center justify-center bg-[#1b283f]'>
                <Image src="/images/grid-png.png" alt='' height={800} width={800} className='absolute h-full object-cover opacity-20' loading='lazy' />
                <Image src="/images/grid-png.png" alt='' height={800} width={800} className='absolute h-full object-cover opacity-20 right-0' loading='lazy' />
                <Image src="/images/grid-png.png" alt='' height={800} width={800} className='absolute h-full object-cover opacity-20 left-0' loading='lazy' />
                {/* <div className='w-full h-full absolute top-0 left-0 bg-[#1B1B1B]/60 z-10' /> */}

                <div className='flex flex-col gap-3 md:items-center max-sm:text-start z-20 max-md:-mt-20 max-sm:w-full px-5'>
                    <h1 id='hero' className='max-sm:flex flex-col font-semibold md:text-[52px] text-[40px] text-gray-50 leading-tight'>
                        Learn and Grow <span className='text-blue-600'>Every Day</span>
                    </h1>
                    <p className='font-medium text-gray-200 md:text-[24px] text-[20px]'>Prepare for a future of limitless possibilities</p>
                </div>

                <div className='w-full max-w-6xl absolute -bottom-10 bg-gray-50 rounded-[24px] z-20 p-6 px-8 overflow-hidden'>
                    <div className='flex flex-col gap-3'>
                        <span className='font-semibold text-[18px]'>What do you want to learn?</span>
                        <div className='flex max-md:flex-col items-center gap-3 z-10'>
                            <Input className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0' placeholder='Find courses, skills, etc' />
                            <div className='flex items-center gap-3 max-md:w-full'>
                                <CategoryCourse />
                                <TopicCourse />
                            </div>
                            <Button className='bg-blue-600 md:block hidden'>
                                Search
                            </Button>
                        </div>
                        <Button className='bg-blue-600 block md:hidden'>
                            Search
                        </Button>

                        {/* <Image src="/images/bgcard.png" alt='' width={300} height={300} className='absolute -bottom-24 right-0 opacity-40'/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
