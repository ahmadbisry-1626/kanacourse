"use client"

import React, { useState } from 'react'

const TopCourses = () => {
    const [isActive, setIsActive] = useState<string>('Developer')

    const handleClick = (tab: string) => {
        setIsActive(tab)
    }

    return (
        <section className='wrapper flex items-center flex-col gap-4'>
            <h2 className='font-semibold text-[32px]'>Browse Our Top Courses</h2>
            <div className='flex items-center gap-8 text-[20px]'>
                <button className={`font-medium text-gray-400 ${isActive === "Developer" && '!text-slate-800'} transition-all duration-300`} onClick={() => handleClick("Developer")}>Developer</button>
                <button className={`font-medium text-gray-400 ${isActive === "Design" && '!text-slate-800'} transition-all duration-300`} onClick={() => handleClick("Design")}>Design</button>
                <button className={`font-medium text-gray-400 ${isActive === "Business" && '!text-slate-800'} transition-all duration-300`} onClick={() => handleClick("Business")}>Business</button>
                <button className={`font-medium text-gray-400 ${isActive === "Marketing" && '!text-slate-800'} transition-all duration-300`} onClick={() => handleClick("Marketing")}>Marketing</button>
            </div>

            {isActive === "Developer" && (
                <h1>Yahaaaaaaaaaa</h1>
            )}
        </section>
    )
}

export default TopCourses