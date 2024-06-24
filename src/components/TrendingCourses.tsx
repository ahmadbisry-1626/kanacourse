import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const TrendingCourses = () => {
    return (
        <section className='wrapper flex flex-col items-center gap-10'>
            <h1 className='text-[32px] font-semibold'>Trending Courses</h1>
            <div className='flex max-lg:flex-col gap-6 w-full'>
                <Link href="/" className='flex items-center w-full group'>
                    <div className='w-full h-[800px] rounded-[12px] relative overflow-hidden flex items-end'>
                        <Image src="/images/MainCourse.jpg" alt='' width={3000} height={3000} className='absolute top-0 w-full h-full object-cover group-hover:scale-105 group-hover:translate-x-4 transition-all duration-500' />

                        <div className='flex flex-col gap-2 p-6'>
                            <div className='flex flex-col z-10 group-hover:scale-90 transition-all group-hover:-translate-x-4 duration-500'>
                                <span className='font-bold text-[100px] text-gray-50 uppercase'>Angelina</span>
                                <span className='font-bold text-[100px] -translate-y-14 text-gray-50 uppercase'>Lee</span>
                            </div>

                            <h1 className='font-semibold text-gray-50 text-[32px] max-w-md z-30'>
                                Masterclass in Design Thinking, Innovation & Creativity
                            </h1>
                        </div>

                        <div className='bg-gradient-to-t from-slate-900/80 w-full h-1/4 absolute z-20 translate-y-full group-hover:translate-y-0 transition-all duration-500' />
                    </div>
                </Link>
                <div className='flex w-full flex-col gap-2'>
                    <div className='w-full h-[140px] bg-gray-200'></div>
                    <div className='w-full h-[140px] bg-gray-200'></div>
                </div>
            </div>
        </section>
    )
}

export default TrendingCourses