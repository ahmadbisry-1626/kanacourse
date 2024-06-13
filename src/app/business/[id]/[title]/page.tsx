import { TopCourseBus } from '@/constants';
import React from 'react'

type Props = {
    params: {
        id: string;
    }
}

const page = (props: Props) => {
    const { id } = props.params

    const BusCourse = TopCourseBus.find((tb) => tb.id === id)

    if(!BusCourse) {
        return <div>Course not found</div>
    }

    return (
        <div className='min-h-screen w-full flex flex-col justify-center items-center'>
            <h1 className='text-[52px] font-semibold'>{BusCourse.title}</h1>
            <h1 className='text-[52px] font-semibold'>{BusCourse.name}</h1>
        </div>
    )
}

export default page