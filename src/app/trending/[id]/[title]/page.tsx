import TrendingCourseDetail from '@/components/trending/TrendingCourseDetail'
import TrendingCourseThumbnailDetail from '@/components/trending/TrendingCourseThumbnailDetail'
import { TrendingCourseItem, trendingCourseThumbnail } from '@/constants'
import React from 'react'

type Props = {
    params: {
        id: string
    }
}

const page = (props: Props) => {
    const { id } = props.params

    const trendingCourse = TrendingCourseItem.find((tc) => tc.id === id)
    const trendingThumb = trendingCourseThumbnail.find((thumb) => thumb.id === id)

    if (!trendingCourse && !trendingThumb) {
        return <div>Not found</div>
    }

    return (
        <div className='min-h-screen flex flex-col justify-center items-center w-full'>
            {trendingCourse && (
                <TrendingCourseDetail trendingCourse={trendingCourse} />
            )}
            {trendingThumb && (
                <TrendingCourseThumbnailDetail trendingThumbnail={trendingThumb} />
            )}
        </div>
    )
}

export default page
