import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { TrendingCourseItem, trendingCourseThumbnail } from '@/constants'
import TrendingCourseCard from './TrendingCourseCard'

const TrendingCourses = () => {
    return (
        <section className='wrapper flex flex-col items-center gap-10 pb-20'>
            <h1 className='text-[24px] md:text-[32px] font-semibold'>Trending Courses</h1>
            <div className='flex items-stretch max-lg:flex-col xl:gap-6 lg:gap-0 gap-6 w-full'>
                {trendingCourseThumbnail.map((thumbnail) => (
                    <Link href={`/trending/${thumbnail.id}/${encodeURIComponent(thumbnail.title)}`}
                        className='flex items-center w-full group' key={thumbnail.id}>

                        <div className='w-full rounded-[12px] relative overflow-hidden flex items-end lg:h-full md:h-[800px] h-[600px]'>

                            <Image src={thumbnail.imgUrl} alt='' width={3000} height={3000}
                                className='absolute top-0 w-full h-full object-cover object-top md:group-hover:scale-105 md:group-hover:translate-x-4 transition-all duration-500'
                                loading='lazy' sizes='100vw' />

                            <div className='flex flex-col gap-2 p-6'>
                                <div className='flex flex-col z-10 md:group-hover:scale-90 transition-all md:group-hover:-translate-x-4 duration-500 max-lg:-translate-y-10'>
                                    <span className='font-bold xl:text-[100px] md:text-[80px] text-[52px] text-gray-50 uppercase'>{thumbnail.firstName}</span>
                                    <span className='font-bold xl:text-[100px] md:text-[80px] text-[52px] -translate-y-4 text-gray-50 uppercase'>{thumbnail.lastName}</span>
                                </div>

                                <h1 className='font-semibold text-gray-50 md:text-[32px] text-[24px] max-w-md z-30'>
                                    {thumbnail.title}
                                </h1>
                            </div>

                            <div className='bg-gradient-to-t from-slate-900/80 w-full h-1/4 absolute z-20 translate-y-full group-hover:translate-y-0 transition-all duration-500' />
                        </div>
                    </Link>
                ))}

                <div className='flex items-center w-full flex-col gap-6'>
                    {TrendingCourseItem.map((cardItem) => (
                        <TrendingCourseCard cardItem={cardItem} key={cardItem.id} />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default TrendingCourses
