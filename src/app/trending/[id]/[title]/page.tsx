import Description from '@/components/Description'
import SubscribeCard from '@/components/SubscribeCard'
import ThumbnailVideo from '@/components/ThumbnailVideo'
import DescriptionMainCourse from '@/components/trending/DescriptionMainCourse'
import TrendingMainCourse from '@/components/trending/TrendingMainCourse'
import { TrendingCourseItem, trendingCourseThumbnail } from '@/constants'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = (props: Props) => {
    const { id } = props.params

    const course = TrendingCourseItem.find((tc) => tc.id === id)
    const trendingCourse = trendingCourseThumbnail.find((thumb) => thumb.id === id)

    if (!course && !trendingCourse) {
        return <div>Not found</div>
    }

    return (
        <>
            {course && (
                <div className='flex w-full min-h-screen flex-col md:pt-24 wrapper pt-24 md:gap-8 gap-6'>
                    <ThumbnailVideo course={course} />
                    <Description course={course} />
                    <SubscribeCard />
                </div>
            )}
            {trendingCourse && (
                <div className='flex w-full min-h-screen flex-col md:pt-24 pt-24 wrapper md:gap-8 gap-6'>
                    <TrendingMainCourse trendingCourse={trendingCourse}/>
                    <DescriptionMainCourse trendingCourse={trendingCourse}/>
                    <SubscribeCard />
                </div>
            )}
        </>
    )
}

export default page
