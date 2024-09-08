import { footerLinksApp, footerLinksCompany, footerLinksSkill } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <section className='flex justify-center items-center bg-[#1B1B1B] pt-10'>
            <div className='wrapper flex flex-col'>
                <div className='flex justify-between text-gray-50'>
                    <h1 className='md:text-[24px] text-[18px] font-semibold'>KanabagiCourse</h1>

                    <div className='flex flex-col gap-3'>
                        {footerLinksSkill.map((skill, idx) => (
                            <Link href={skill.link} key={idx} className='text-[16px] md:text-[18px] font-medium text-gray-400 hover:text-gray-50 transition-all duration-300'>
                                {skill.name}
                            </Link>
                        ))}
                    </div>

                    <div className='flex flex-col gap-3'>
                        {footerLinksApp.map((app, idx) => (
                            <Link href={app.link} key={idx} className='text-[16px] md:text-[18px] font-medium text-gray-400 hover:text-gray-50 transition-all duration-300'>
                                {app.name}
                            </Link>
                        ))}
                    </div>

                    <div className='flex flex-col gap-3'>
                        {footerLinksCompany.map((comp, idx) => (
                            <Link href={comp.link} key={idx} className='text-[16px] md:text-[18px] font-medium text-gray-400 hover:text-gray-50 transition-all duration-300'>
                                {comp.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <Separator className='bg-[#F9F9F9]/10 h-[0.1px] mt-10' />

                <div className='flex items-center justify-between text-gray-400 mt-5'>
                    <h2>© KanabagiCourse 2024. All Rights Reserved.</h2>

                    <div className='flex items-center gap-4'>
                        <FaInstagram className='w-7 h-7' />
                        <FaTwitter className='w-6 h-6' />
                        <FaFacebookF className='w-6 h-6' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
