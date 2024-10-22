"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import LoginModal from './LoginModal'

const Review = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <>
            <div className='flex flex-col gap-3'>
                <h1 className='md:text-[20px] text-[18px] font-semibold'>
                    What people say about this course
                </h1>
                <div className='flex flex-col items-center gap-4 relative'>
                    <div className='w-full h-full absolute top-0 bg-gradient-to-t from-gray-100/50' />

                    <div className='flex items-start gap-4'>
                        <Image src="/images/ava-1.jpeg" alt='avatara-user' width={50} height={50} className='flex-shrink-0 rounded-full' sizes='100vw' />
                        <div className='flex flex-col'>
                            <span className='text-sm text-gray-400'>Today</span>
                            <h3 className='md:text-[18px] text-[16px] text-pink-600 font-medium'>Kim Yoo-jung</h3>
                            <p className='md:text-[16px] text-sm text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam mollitia libero voluptas! Laborum, consequuntur culpa iure odit facere impedit.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <Image src="/images/ava-2.jpg" alt='avatara-user' width={50} height={50} className='flex-shrink-0 rounded-full' sizes='100vw' />
                        <div className='flex flex-col'>
                            <span className='text-sm text-gray-400'>2 weeks ago</span>
                            <h3 className='md:text-[18px] text-[16px] text-pink-600 font-medium'>Kim Ji-eun</h3>
                            <p className='md:text-[16px] text-sm text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam mollitia libero voluptas! Laborum, consequuntur culpa iure odit facere impedit.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <Image src="/images/ava-3.jpg" alt='avatara-user' width={50} height={50} className='flex-shrink-0 rounded-full' sizes='100vw' />
                        <div className='flex flex-col'>
                            <span className='text-sm text-gray-400'>a month ago</span>
                            <h3 className='md:text-[18px] text-[16px] text-pink-600 font-medium'>Shin Ye-eun</h3>
                            <p className='md:text-[16px] text-sm text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam mollitia libero voluptas! Laborum, consequuntur culpa iure odit facere impedit.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-start gap-4'>
                        <Image src="/images/ambatukam.jpg" alt='avatara-user' width={50} height={50} className='flex-shrink-0 rounded-full' sizes='100vw' />
                        <div className='flex flex-col'>
                            <span className='text-sm text-gray-400'>2 months ago</span>
                            <h3 className='md:text-[18px] text-[16px] text-pink-600 font-medium'>Pak Ambar</h3>
                            <p className='md:text-[16px] text-sm text-gray-500'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta aperiam mollitia libero voluptas! Laborum, consequuntur culpa iure odit facere impedit.
                            </p>
                        </div>
                    </div>

                    <Button className='z-10 mt-3 rounded-[12px]' size="lg" onClick={() => setIsModalOpen(true)}>
                        Login to see more reviews
                    </Button>
                </div>
            </div>

            {/* LOGIN MODAL */}
            <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}

export default Review
