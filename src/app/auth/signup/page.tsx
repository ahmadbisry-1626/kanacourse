import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa'

const page = () => {
    return (
        <div className='wrapper flex items-center justify-center min-h-screen'>
            <div className='flex flex-col items-center gap-4 w-full sm:max-w-[400px]'>
                <h1 className='md:text-[32px] text-[24px] font-semibold'>Create an account</h1>
                <Input className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-2 border-gray-300 h-[54px] rounded-[12px]' placeholder='Email Address' />
                <Button className='bg-blue-600 text-gray-50 font-medium rounded-[12px] h-[54px] w-full'>Continue</Button>
                {/* <span className='text-gray-400'>By signing up, you agree to our Terms of Service and Privacy Policy</span> */}
                <p className='flex items-center gap-2'>
                    Already have an account?
                    <Link href="/" className='text-blue-600'> Login</Link>
                </p>
                <div className='flex items-center justify-center w-full my-2'>
                    <span className='bg-gray-300 h-[1px] w-1/2'></span>
                    <span className='text-gray-400 bg-gray-50 px-3'>OR</span>
                    <span className='bg-gray-300 h-[1px] w-1/2'></span>
                </div>
                <Button className='border-2 border-gray-300 bg-transparent hover:bg-transparent text-gray-400 font-medium rounded-[12px] h-[54px] w-full relative'>
                    <FaGoogle className='w-5 h-5 absolute left-4 text-gray-400' />
                    Continue with Google
                </Button>
                <Button className='border-2 border-gray-300 bg-transparent hover:bg-transparent text-gray-400 font-medium rounded-[12px] h-[54px] w-full relative'>
                    <FaMicrosoft className='w-5 h-5 absolute left-4 text-gray-400' />
                    Continue with Microsoft Account
                </Button>
                <Button className='border-2 border-gray-300 bg-transparent hover:bg-transparent text-gray-400 font-medium rounded-[12px] h-[54px] w-full relative'>
                    <FaApple className='w-6 h-6 absolute left-4 text-gray-400' />
                    Continue with Apple
                </Button>
                <span className='text-gray-400 mt-2'>© 2024 KanaCourse. All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default page
