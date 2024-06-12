import Image from 'next/image'
import React from 'react'
import SearchCourse from './SearchCourse'
import { FaShoppingCart } from 'react-icons/fa'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <nav className='flex items-center fixed z-[99] top-0 left-0 w-full'>
            <div className='wrapper flex items-center justify-between'>
                <span className='font-bold text-[28px] text-gray-50'><span className='text-[#00A2DF] text-[24px]'>Kana</span>Course</span>
                
                <div className='flex items-center gap-6 w-full justify-end'>
                    {/* <SearchCourse /> */}
                    <span className='font-medium text-[18px] text-gray-50'>Become instructor</span>
                    <FaShoppingCart className='w-6 h-6 text-[#00A2DF]' />
                    <Button className='bg-transparent border-2 text-gray-50 border-gray-50 font-medium rounded-[12px] hover:text-slate-800 hover:bg-gray-50'>Login</Button>
                    <Button className='rounded-[12px]'>Register</Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar