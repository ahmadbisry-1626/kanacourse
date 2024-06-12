import React from 'react'
import { Input } from './ui/input'
import { BsSearch } from 'react-icons/bs'
import { Separator } from './ui/separator'

const SearchCourse = () => {
    return (
        <div className='flex items-center flex-col w-full max-w-xs focus-within:max-w-md rounded-[12px] group transition-all duration-300'>
            <div className='flex items-center w-full'>
                <Input className='focus-visible:ring-0 focus-visible:ring-transparent bg-transparent focus-visible:ring-offset-0 border-none placeholder:text-[18px] !px-0 placeholder:text-gray-200' placeholder='Search course' />
                <div className='px-2 py-2'>
                    <BsSearch className='w-5 h-5 text-gray-200 group-focus-within:text-[#00A2DF] transition duration-300' />
                </div>
            </div>

            <Separator className='bg-gray-50 group-focus-within:bg-[#00A2DF] transition duration-300' />
        </div>
    )
}

export default SearchCourse