import React from 'react'
import { TrendingCourseProps } from '../TrendingCourseCard'

const TrendingCourseDetail = ({ trendingCourse }: { trendingCourse: TrendingCourseProps }) => {
    return (
        <div>
            <h1 className='text-3xl'>{trendingCourse.name}</h1>
            <h2 className='text-xl'>{trendingCourse.title}</h2>
        </div>
    )
}

export default TrendingCourseDetail
