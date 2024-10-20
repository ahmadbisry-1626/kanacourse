"use client"

import { TopCourse, TopCourseBus, TopCourseDev, TopCourseMar } from '@/constants'
import React, { useState } from 'react'
import TopCourseCard from './TopCourseCard'
import TopCourseDevCard from './TopCourseDevCard'
import TopCourseBusCard from './business/TopCourseBusCard'
import TopCourseMarCard from './marketing/TopCourseMarCard'

const TopCourses = () => {
    const [isActive, setIsActive] = useState<string>('Design')

    const handleClick = (tab: string) => {
        setIsActive(tab)
    }

    return (
        <section className='wrapper flex items-center flex-col gap-4 relative mt-16'>
            <h2 className='font-semibold md:text-[32px] text-[24px]'>Browse Our Top Courses</h2>
            <div className='flex items-center justify-center md:gap-8 gap-4 text-[14px] md:text-[20px] flex-wrap'>
                <button className={`font-semibold text-gray-400 ${isActive === "Design" && '!text-[#00A2DF]'} transition-all duration-300`} onClick={() => handleClick("Design")}>Design</button>
                <button className={`font-semibold text-gray-400 ${isActive === "Developer" && '!text-[#00A2DF]'} transition-all duration-300`} onClick={() => handleClick("Developer")}>Developer</button>
                <button className={`font-semibold text-gray-400 ${isActive === "Business" && '!text-[#00A2DF]'} transition-all duration-300`} onClick={() => handleClick("Business")}>Business</button>
                <button className={`font-semibold text-gray-400 ${isActive === "Marketing" && '!text-[#00A2DF]'} transition-all duration-300`} onClick={() => handleClick("Marketing")}>Marketing</button>
            </div>

            {isActive === 'Design' && (
                <div className={`flex flex-col items-center gap-10 transition-all duration-300`}>
                    <ul className='w-full grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-10'>
                        {TopCourse.map((tc, i) => (
                            <li key={i} className='flex justify-center'>
                                <TopCourseCard tc={tc} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isActive === 'Developer' && (
                <div className={`flex flex-col items-center gap-10 transition-all duration-300`}>
                    <ul className='w-full grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-10'>
                        {TopCourseDev.map((td) => (
                            <li key={td.id} className='flex justify-center'>
                                <TopCourseDevCard td={td} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isActive === 'Business' && (
                <div className={`flex flex-col items-center gap-10 transition-all duration-300`}>
                    <ul className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-10'>
                        {TopCourseBus.map((tb) => (
                            <li className='flex justify-center' key={tb.id}>
                                <TopCourseBusCard tb={tb} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isActive === 'Marketing' && (
                <div className='flex fle-col items-center gap-10'>
                    <ul className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-10'>
                        {TopCourseMar.map((tm) => (
                            <li key={tm.id} className='flex justify-center'>
                                <TopCourseMarCard tm={tm} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </section>
    )
}

export default TopCourses
