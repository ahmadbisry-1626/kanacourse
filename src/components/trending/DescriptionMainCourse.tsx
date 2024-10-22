import { ThumbCourseProps } from '@/types'
import React from 'react'
import Review from '../Review'
import { Button } from '../ui/button'

const DescriptionMainCourse = ({trendingCourse}: {trendingCourse: ThumbCourseProps}) => {
  return (
    <section className='flex max-lg:flex-col items-start w-full lg:gap-8 gap-4'>
            <div className='flex flex-col lg:gap-6 gap-4 flex-1'>
                <div className='flex flex-col gap-2'>
                    <h1 className='md:text-[20px] text-[18px] font-semibold'>About course</h1>

                    {trendingCourse.desc.map((desc, i) => (
                        <p className='md:text-[16px] text-sm text-gray-500 leading-normal' key={i}>{desc}</p>

                    ))}

                </div>

                <Review />
            </div>

            <div className='w-full lg:max-w-[350px] bg-blue-600 p-4 rounded-[12px] flex flex-col gap-2 max-lg:mt-4'>
                <div className='px-3 py-1 flex items-center justify-center bg-[#1b283f] w-max rounded-[8px]'>
                    <span className='text-sm text-gray-50'>WEBINAR</span>
                </div>
                <span className='md:text-[18px] text-[16px] text-gray-200'>{trendingCourse.fullName}</span>
                <h1 className='md:text-[24px] text-[20px] font-semibold text-gray-50 leading-snug w-full lg:max-w-[300px]'>
                    {trendingCourse.webinar}
                </h1>
                <Button className='bg-transparent border-2 border-gray-50 md:w-max hover:bg-gray-50 hover:text-gray-800 md:mt-6 mt-3' size="lg">Learn more</Button>
            </div>
        </section>
  )
}

export default DescriptionMainCourse
