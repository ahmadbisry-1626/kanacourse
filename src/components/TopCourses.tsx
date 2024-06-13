"use client"

import { TopCourse, TopCourseDev } from '@/constants'
import React, { useState } from 'react'
import TopCourseCard from './TopCourseCard'
import TopCourseDevCard from './TopCourseDevCard'

const TopCourses = () => {
    const [isActive, setIsActive] = useState<string>('Design')

    const handleClick = (tab: string) => {
        setIsActive(tab)
    }

    return (
        <section className='wrapper flex items-center flex-col gap-4 relative'>
            <h2 className='font-semibold text-[32px]'>Browse Our Top Courses</h2>
            <div className='flex items-center gap-8 text-[20px]'>
                <button className={`font-semibold text-gray-400 ${isActive === "Design" && '!text-slate-800'} transition-all duration-300`} onClick={() => handleClick("Design")}>Design</button>
                <button className={`font-semibold text-gray-400 ${isActive === "Developer" && '!text-slate-800'} transition-all duration-300`} onClick={() => handleClick("Developer")}>Developer</button>
                <button className={`font-semibold text-gray-400 ${isActive === "Business" && '!text-slate-800'} transition-all duration-300`} onClick={() => handleClick("Business")}>Business</button>
                <button className={`font-semibold text-gray-400 ${isActive === "Marketing" && '!text-slate-800'} transition-all duration-300`} onClick={() => handleClick("Marketing")}>Marketing</button>
            </div>

            <div className={`flex flex-col items-center gap-10 ${isActive === 'Design' ? 'opacity-100 translate-x-0 z-20' : '-translate-x-4 opacity-0 z-10'} transition-all duration-300`}>
                <ul className='w-full grid grid-cols-1  gap-5 lg:grid-cols-2 xl:gap-10'>
                    {TopCourse.map((tc, i) => (
                        <li key={i} className='flex justify-center'>
                            <TopCourseCard tc={tc} />
                        </li>
                    ))}
                </ul>
            </div>

            <div className={`flex flex-col items-center gap-10 ${isActive === 'Developer' ? 'opacity-100 translate-x-0 z-20' : '-translate-x-4 opacity-0 z-10'} transition-all duration-300 absolute top-[130px]`}>
                <ul className='w-full grid grid-cols-1  gap-5 lg:grid-cols-2 xl:gap-10'>
                    {TopCourseDev.map((td) => (
                        <li key={td.id} className='flex justify-center'>
                            <TopCourseDevCard td={td}/>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default TopCourses