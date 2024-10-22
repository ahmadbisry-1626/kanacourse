import { CourseProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { FaHeart, FaPlay, FaStar } from 'react-icons/fa6'
import { Button } from './ui/button'
import { MdOutlineLiveTv } from 'react-icons/md'
import { HiMiniDevicePhoneMobile, HiOutlineSpeakerWave } from 'react-icons/hi2'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { IoBookmarksOutline } from 'react-icons/io5'

const ThumbnailVideo = ({ course }: { course: CourseProps }) => {
    return (
        <section className='flex flex-col w-full gap-4'>
            <div className='flex flex-col' id='hero'>
                <h1 className='md:text-[32px] text-[24px] font-semibold'>{course.title}</h1>
                <div className='flex items-center gap-2'>
                    <span className='text-pink-600 md:text-[18px] text-[16px] font-medium'>{course.name}</span>
                    <div className='flex items-center gap-2'>
                        <FaStar className='md:w-5 md:h-5 w-3 h-3 text-yellow-300' />
                        <span className='md:text-[16px] text-sm'>{course.rating}</span>
                        <p className='md:text-[16px] text-sm text-gray-400'>({course.totalRating.toLocaleString()} ratings)</p>
                    </div>
                </div>
            </div>

            <div className='flex max-lg:flex-col items-start lg:gap-8 gap-4'>
                <div className='w-full md:h-[500px] h-[300px] max-sm:h-[200px] rounded-[12px] relative overflow-hidden group'>
                    <Image src={course.thumbUrl} alt={course.title} width={1000} height={1000} className='absolute w-full h-full top-0 object-cover object-top md:block hidden group-hover:scale-105 transition-all duration-500' loading='lazy' sizes='100vw' />
                    <Image src={course.thumbUrlMobile} alt={course.title} width={1000} height={1000} className='absolute w-full h-full top-0 object-cover object-top md:hidden block' loading='lazy' sizes='100vw' />

                    <div className='w-full h-full absolute top-0 flex items-center justify-center group-hover:bg-black/30 transition-all duration-500'>
                        <FaPlay className='md:size-32 size-20 text-blue-600 cursor-pointer hover:scale-95 transition-all duration-300' />
                    </div>
                </div>
                <div className='flex flex-col gap-2 w-full lg:max-w-[350px]'>
                    <div className='flex max-lg:items-center lg:flex-col flex-row max-lg:gap-3 gap-1 flex-wrap'>
                        <div className='flex items-center gap-2 flex-wrap-reverse'>
                            <span className='md:text-[28px] text-[24px] font-semibold'>
                                Rp. {course.price.toLocaleString()}
                            </span>
                            <span className='font-semibold line-through md:text-[20px] text-[18px] text-gray-500'>
                                Rp. {course.discount.toLocaleString()}
                            </span>
                        </div>
                        <div className='bg-pink-600 px-3 py-1 rounded-[4px] w-max flex-shrink-0'>
                            <span className='text-gray-50 font-medium text-sm'>{course.discPercent} OFF</span>
                        </div>
                    </div>
                    <div className='lg:mt-3 mt-2 w-full flex flex-col gap-3'>
                        <Button className='bg-blue-600 rounded-[8px] w-full md:text-[18px] text-[16px]' size="lg">Buy</Button>
                        <Button className='flex items-center gap-3 bg-transparent border border-gray-400 rounded-[8px] w-full text-gray-400 md:text-[18px] text-[16px]' size="lg">
                            <FaHeart className='w-5 h-5 text-gray-400' />
                            Wishtlist
                        </Button>
                    </div>
                    <div className='flex flex-col gap-2 lg:mt-4 mt-3'>
                        <div className='grid sm:grid-cols-2 lg:grid-cols-1 gap-5'>
                            <div className='flex items-center gap-4'>
                                <IoBookmarksOutline className='md:w-6 md:h-6 w-5 h-5 text-gray-500' />
                                <span className='md:text-[18px] text-[16px] text-gray-500'>{course.section} Sections</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <BsBook className='md:w-6 md:h-6 w-5 h-5 text-gray-500' />
                                <span className='md:text-[18px] text-[16px] text-gray-500'>{course.lecture} Lectures</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MdOutlineLiveTv className='md:w-6 md:h-6 w-5 h-5 text-gray-500' />
                                <span className='md:text-[18px] text-[16px] text-gray-500'>{course.duration}</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <HiOutlineSpeakerWave className='md:w-6 md:h-6 w-5 h-5 text-gray-500' />
                                <span className='md:text-[18px] text-[16px] text-gray-500'>{course.language}</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <HiMiniDevicePhoneMobile className='md:w-6 md:h-6 w-5 h-5 text-gray-500' />
                                <span className='md:text-[18px] text-[16px] text-gray-500'>{course.access}</span>
                            </div>
                            <div className='flex items-center gap-4'>
                                <AiOutlineSafetyCertificate className='md:w-6 md:h-6 w-5 h-5 text-gray-500' />
                                <span className='md:text-[18px] text-[16px] text-gray-500'>{course.certificate}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThumbnailVideo
