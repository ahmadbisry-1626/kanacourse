import Description from '@/components/Description'
import SubscribeCard from '@/components/SubscribeCard'
import ThumbnailVideo from '@/components/ThumbnailVideo'
import { TopCourse } from '@/constants'
import { notFound } from 'next/navigation'
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
        return notFound()
    }


    return (
        <div className='flex w-full min-h-screen flex-col md:pt-24 pt-24 wrapper md:gap-8 gap-6'>
            <ThumbnailVideo course={course} />
            <Description course={course} />
            <SubscribeCard />
        </div>
    )
}

export default page
