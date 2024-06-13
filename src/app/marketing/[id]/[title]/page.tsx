import { TopCourseMar } from '@/constants'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = (props: Props) => {
    const { id } = props.params

    const MarCourse = TopCourseMar.find((tm) => tm.id === id)

    if(!MarCourse) {
        return <div>Course not found</div>
    }

    return (
        <div className='flex flex-col min-h-screen items-center justify-center'>
            <h1 className='text-[52px] font-semibold'>{MarCourse.title}</h1>
            <h1 className='text-[52px] font-semibold'>{MarCourse.name}</h1>
        </div>
    )
}

export default page