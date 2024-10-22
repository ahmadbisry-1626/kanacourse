import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { FaApple, FaGoogle, FaMicrosoft } from 'react-icons/fa'
import Image from 'next/image'
import { IoIosCloseCircle } from 'react-icons/io'

type ModalProps = {
    isModalOpen: boolean
    setIsModalOpen: (value: boolean) => void
}

const LoginModal = ({ isModalOpen, setIsModalOpen }: ModalProps) => {

    return (
        <div className={`fixed top-0 left-0 flex min-h-screen items-center justify-center w-full bg-black/60 ${isModalOpen ? 'opacity-100 z-50' : 'opacity-0 -z-10'} md:px-7 px-5`}>
            <div className='bg-gray-50 flex items-center w-full lg:max-w-6xl p-6 rounded-[16px] relative z-[52]'>
                <div className='w-full flex flex-col items-center gap-4 lg:pr-6'>
                    <h1 className='md:text-[32px] text-[24px] font-semibold'>Sign In</h1>
                    <Input className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-2 border-gray-300 h-[54px] rounded-[12px]' placeholder='Email Address' />
                    <Input className='focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 border-2 border-gray-300 h-[54px] rounded-[12px]' placeholder='Password' />
                    <Button className='bg-blue-600 text-gray-50 font-medium rounded-[12px] h-[54px] w-full'>Login</Button>
                    <p className='flex items-center gap-2'>
                        Don't have an account?
                        <Link href="/auth/signup" className='text-blue-600' onClick={() => setIsModalOpen(false)}> Register</Link>
                    </p>
                    <div className='flex items-center justify-center w-full my-2'>
                        <span className='bg-gray-300 h-[1px] w-1/2'></span>
                        <span className='text-gray-400 bg-gray-50 px-3'>OR</span>
                        <span className='bg-gray-300 h-[1px] w-1/2'></span>
                    </div>
                    <Button className='border-2 border-gray-300 bg-transparent hover:bg-transparent text-gray-400 font-medium rounded-[12px] h-[54px] w-full relative'>
                        <FaGoogle className='w-5 h-5 absolute left-4 text-gray-400' />
                        Google
                    </Button>
                    <Button className='border-2 border-gray-300 bg-transparent hover:bg-transparent text-gray-400 font-medium rounded-[12px] h-[54px] w-full relative'>
                        <FaMicrosoft className='w-5 h-5 absolute left-4 text-gray-400' />
                        Microsoft Account
                    </Button>
                    <Button className='border-2 border-gray-300 bg-transparent hover:bg-transparent text-gray-400 font-medium rounded-[12px] h-[54px] w-full relative'>
                        <FaApple className='w-6 h-6 absolute left-4 text-gray-400' />
                        Apple
                    </Button>
                </div>

                <Image src="/images/login-img.jpg" alt='login image' width={560} height={560} className='flex-shrink-0 rounded-[16px] lg:block hidden' sizes='100vw' priority />

                <IoIosCloseCircle className='w-8 h-8 absolute top-3 right-3 text-blue-600 cursor-pointer' onClick={() => setIsModalOpen(false)} />
            </div>
        </div>
    )
}

export default LoginModal
