"use client"

import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { Button } from './ui/button'
import { IoPeopleCircleSharp } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHeroSection, setIsHeroSection] = useState(true);
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;
                if (currentScrollY > lastScrollY) {
                    setIsVisible(false);
                    setIsOpen(false)
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(currentScrollY);

                if (currentScrollY > document.getElementById('hero')?.offsetHeight!) {
                    setIsHeroSection(false);
                } else {
                    setIsHeroSection(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={`flex items-center fixed z-[99] bg-transparent top-0 left-0 w-full ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'} ${isHeroSection ? 'bg-transparent' : '!bg-[#1b283f]'} transition-all duration-300`}>
            <div className={`wrapper flex items-center justify-between ${!isHeroSection && '!py-3'} transition-all duration-300`}>
                <span className='font-bold text-[28px] text-gray-50'><span className='text-[#00A2DF] text-[24px]'>Kana</span>Course</span>

                <div className='md:flex items-center gap-6 w-full justify-end hidden'>
                    {/* <SearchCourse /> */}
                    <span className='font-medium text-[18px] text-gray-50'>Become instructor</span>
                    <FaShoppingCart className='w-6 h-6 text-[#00A2DF]' />
                    <Button className='bg-transparent border-2 text-gray-50 border-gray-50 font-medium rounded-[12px] hover:text-slate-800 hover:bg-gray-50'>Login</Button>
                    <Button className='rounded-[12px] flex items-center gap-3 bg-gray-50 font-medium text-black hover:bg-gray-50'>
                        <IoPeopleCircleSharp className='w-5 h-5 text-black' />
                        Register
                    </Button>
                </div>

                <button className='flex flex-col gap-1 group cursor-pointer md:hidden' onClick={toggleMenu}>
                    <div className={`w-[30px] h-[4px] bg-gray-50 rounded-full transition-all duration-300 flex-shrink-0 ${isOpen ? 'rotate-45 translate-y-2 group-hover:bg-gray-400' : 'group-hover:-translate-x-1'}`} />
                    <div className={`w-[30px] h-[4px] bg-gray-50 rounded-full transition-all duration-300 flex-shrink-0 ${isOpen ? 'translate-x-full opacity-0 group-hover:bg-gray-400' : 'group-hover:translate-x-1 '}`} />
                    <div className={`w-[30px] h-[4px] bg-gray-50 rounded-full transition-all duration-300 flex-shrink-0 ${isOpen ? '-rotate-45 -translate-y-2 group-hover:bg-gray-400' : 'group-hover:-translate-x-1'}`} />
                </button>

                <div className={`absolute top-0 right-0 bg-gray-500 rounded-[12px] -translate-x-4 ${isOpen ? 'opacity-100 translate-y-[70px]' : 'opacity-100 -translate-y-full'} transition-all duration-300 ease-in-out`}>
                    <div className={`flex flex-col gap-2 p-5`}>
                        <span className='font-medium text-[18px] text-gray-50'>Become instructor</span>
                        <span className='font-medium text-[18px] text-gray-50'>Login</span>
                        <span className='font-medium text-[18px] text-gray-50'>Register</span>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
