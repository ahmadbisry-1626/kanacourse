import { TopCourse } from '@/constants'
import React from 'react'

type CourseProps = {
    params: {
        id: string
    }
}

const page = (props: CourseProps) => {
    const { id } = props.params
    const course = TopCourse.find((course) => course.id === id)

    if (!course) {
        return <div>Couse not found</div>
    }


    return (
        <div className='flex items-center justify-center w-full min-h-screen flex-col'>
            <h1 className='text-[52px] font-semibold'>{course.name}</h1>
            <h1 className='text-[52px] font-semibold'>{course.title}</h1>
        </div>
    )
}

export default page