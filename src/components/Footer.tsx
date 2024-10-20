import { footerLinksApp, footerLinksCompany, footerLinksSkill } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <section className='flex justify-center items-center bg-[#1B1B1B] md:pt-10 pt-5'>
            <div className='wrapper flex flex-col'>
                <div className='flex max-md:flex-col md:justify-between text-gray-50 md:gap-10 gap-5'>
                    <h1 className='text-[24px] font-semibold'>KanabagiCourse</h1>

                    <div className='flex md:gap-20 max-md:justify-between max-md:flex-wrap'>
                        <div className='flex flex-col gap-3'>
                            {footerLinksSkill.map((skill, idx) => (
                                <Link href={skill.link} key={idx} className='text-[14px] md:text-[18px] font-medium text-gray-400 hover:text-gray-50 transition-all duration-300'>
                                    {skill.name}
                                </Link>
                            ))}
                        </div>

                        <div className='flex flex-col gap-3'>
                            {footerLinksApp.map((app, idx) => (
                                <Link href={app.link} key={idx} className='text-[14px] md:text-[18px] font-medium text-gray-400 hover:text-gray-50 transition-all duration-300'>
                                    {app.name}
                                </Link>
                            ))}
                        </div>

                        <div className='flex flex-col gap-3'>
                            {footerLinksCompany.map((comp, idx) => (
                                <Link href={comp.link} key={idx} className='text-[14px] md:text-[18px] font-medium text-gray-400 hover:text-gray-50 transition-all duration-300'>
                                    {comp.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className='bg-[#F9F9F9]/10 h-[0.1px] mt-10' />

                <div className='flex items-center justify-between text-gray-400 mt-5 text-sm md:text-[16px]'>
                    <h2>© 2024 Kanabagi. All Rights Reserved.</h2>

                    <div className='flex items-center gap-4'>
                        <FaInstagram className='w-4 h-4 md:w-5 md:h-5' />
                        <FaTwitter className='w-4 h-4 md:w-5 md:h-5' />
                        <FaFacebookF className='w-4 h-4 md:w-5 md:h-5' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
