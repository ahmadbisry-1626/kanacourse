import Description from '@/components/Description';
import SubscribeCard from '@/components/SubscribeCard';
import ThumbnailVideo from '@/components/ThumbnailVideo';
import { TopCourseBus } from '@/constants';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params: {
        id: string;
    }
}

const page = (props: Props) => {
    const { id } = props.params

    const course = TopCourseBus.find((tb) => tb.id === id)

    if(!course) {
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
