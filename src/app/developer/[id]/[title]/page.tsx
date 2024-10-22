import Description from '@/components/Description';
import SubscribeCard from '@/components/SubscribeCard';
import ThumbnailVideo from '@/components/ThumbnailVideo';
import { TopCourseDev } from '@/constants';
import React from 'react'

type DevProps = {
    params: {
        id: string;
    }
}

const page = (props: DevProps) => {
    const { id } = props.params

    const course = TopCourseDev.find((dev) => dev.id === id)

    if (!course) {
        return <div>Course not found</div>
    }

    return (
        <div className='flex w-full min-h-screen flex-col md:pt-24 pt-24 wrapper gap-8'>
            <ThumbnailVideo course={course} />
            <Description course={course} />
            <SubscribeCard />
        </div>
    )
}

export default page
