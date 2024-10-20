import React from 'react'
import { Button } from './ui/button'

const Recommendations = () => {
    return (
        <section className='w-full flex justify-center items-center bg-[#FFEC8A] py-3'>
            <div className='wrapper flex items-center flex-col gap-3'>
                <h2 className='md:text-[20px] text-center text-[16px] font-semibold'>
                    Get personal learning recommendations based on your needs
                </h2>
                <Button className='bg-transparent rounded-[12px] border-2 border-[#1B1B1B] text-[1B1B1B] hover:text-gray-50'>Get Started</Button>
            </div>
        </section>
    )
}

export default Recommendations
