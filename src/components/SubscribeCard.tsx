import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { IoSend } from 'react-icons/io5'

const SubscribeCard = () => {
    return (
        <section className='flex items-center justify-center w-full rounded-[12px] lg:mt-4 bg-[#1b283f] px-4 py-5 lg:px-10 lg:py-7 mb-10'>
            <div className='flex max-lg:flex-col lg:items-center lg:justify-between w-full max-lg:gap-4'>
                <div className='flex flex-col'>
                    <h1 className='md:text-[24px] text-[20px] text-gray-50'>Join and get amazing discount</h1>
                    <p className='md:text-[16px] text-[14px] text-gray-300'>With our responsive themes and mobile and desktop apps</p>
                </div>

                <div className='flex items-center gap-3 w-full lg:max-w-[400px]'>
                    <Input className='bg-[#3b4961] focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-none text-gray-100 placeholder:text-gray-100' placeholder='Enter your email' />
                    <Button className='md:rounded-[12px] rounded-[8px] max-md:!px-4' size={"lg"}>
                        <span className='md:block hidden'>Subsribe</span>
                        <IoSend className='w-5 h-5 block md:hidden text-gray-50'/>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default SubscribeCard
