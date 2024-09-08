import React from 'react'

interface TrendingThumbProps {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
    imgUrl: string;
}

const TrendingCourseThumbnailDetail = ({ trendingThumbnail }: { trendingThumbnail: TrendingThumbProps }) => {
    return (
        <div>
            <h1 className='text-3xl'>{trendingThumbnail.firstName}</h1>
            <h2 className='text-xl'>{trendingThumbnail.title}</h2>
        </div>
    )
}

export default TrendingCourseThumbnailDetail
