import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa6';

export interface TrendingCourseProps {
    id: string;
    name: string;
    imgUrl: string;
    title: string;
    tags: string[];
    desc: string;
    price: number;
    discount: number;
    rating: number;
}

const TrendingCourseCard = ({ cardItem }: { cardItem: TrendingCourseProps }) => {
    return (
        <Link href={`/trending/${cardItem.id}/${encodeURIComponent(cardItem.title)}`} key={cardItem.id} className='flex gap-3 bg-gray-50 rounded-[12px] lg:w-[450px] max-lg:w-full xl:w-[620px] h-[300px] hover:shadow-md transition-all duration-300 group'>
            <div className='relative w-full max-w-[250px] h-full bg-[#1b283f] rounded-tl-[12px] rounded-bl-[12px] overflow-hidden'>
                <Image src={cardItem.imgUrl} alt='' width={300} height={300} className='absolute w-full h-full object-cover group-hover:translate-x-4 transition-all duration-500' />

                <div className='w-full p-2 rounded-t-[24px] absolute bottom-0 bg-[#1b283f] flex items-center justify-center group-hover:translate-x-4 transition-all duration-500'>
                    <span className='text-gray-50 font-semibold'>{cardItem.name}</span>
                </div>
            </div>

            <div className='flex flex-col justify-between gap-3 p-4 w-full'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[18px] font-semibold'>{cardItem.title}</h1>
                    <div className='flex items-center gap-3 max-lg:flex-wrap'>
                        <span className='flex items-center justify-center p-1 px-3 text-gray-50 bg-blue-400 text-[14px] rounded-full group-hover:!bg-blue-600 transition-all duration-500 flex-shrink-0'>
                            {cardItem.tags[0]}
                        </span>
                        <span className='flex items-center justify-center p-1 px-3 text-gray-50 bg-pink-400 text-[14px] rounded-full group-hover:!bg-pink-600 transition-all duration-500 flex-shrink-0'>
                            {cardItem.tags[1]}
                        </span>
                    </div>
                    <p className='text-[14px] text-gray-500'>{cardItem.desc}</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <FaStar className='w-5 h-5 text-yellow-300' />
                            <FaStar className='w-5 h-5 text-yellow-300' />
                            <FaStar className='w-5 h-5 text-yellow-300' />
                            <FaStar className='w-5 h-5 text-yellow-300' />
                            <FaStar className='w-5 h-5 text-yellow-300' />
                        </div>
                        <span>({cardItem.rating})</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span className='xl:text-[20px] text-[18px] font-semibold'>Rp. {cardItem.price.toLocaleString()}</span>
                        <span className='font-semibold line-through xl:text-[16px] text-[14px] text-gray-500'>Rp. {cardItem.discount.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TrendingCourseCard
