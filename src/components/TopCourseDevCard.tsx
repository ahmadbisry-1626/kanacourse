import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { LiaStarSolid } from 'react-icons/lia'

type TdProps = {
    id: string;
    category: string;
    name: string;
    imgUrl: string;
    title: string;
    tags: string[];
    description: string;
    price: number;
    discount: number;
    rating: number;
}

const TopCourseDevCard = ({ td }: { td: TdProps }) => {
    return (
        <Link href={`/developer/${td.id}/${encodeURIComponent(td.title)}`} className='flex gap-3 bg-gray-50 rounded-[12px] w-[620px] md:h-[300px] mt-6 hover:shadow-md transition-all duration-300 group'>
            <div className='relative w-full md:max-w-[250px] max-w-[200px] h-full bg-[#1b283f] rounded-tl-[12px] rounded-bl-[12px] overflow-hidden'>
                <Image src={td.imgUrl} alt='' width={300} height={300} className='absolute w-full h-full object-cover group-hover:translate-x-4 transition-all duration-500' loading='lazy'/>

                <div className='w-full p-2 rounded-t-[24px] absolute bottom-0 bg-[#1b283f] flex items-center justify-center group-hover:translate-x-4 transition-all duration-500'>
                    <span className='text-gray-50 font-semibold max-md:text-[14px]'>{td.name}</span>
                </div>
            </div>

            <div className='flex flex-col justify-between gap-3 p-4 w-full'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[18px] font-semibold'>{td.title}</h1>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <span className='flex items-center justify-center p-1 px-3 text-gray-50 bg-blue-400 text-[14px] rounded-full group-hover:!bg-blue-600 transition-all duration-500 flex-shrink-0'>
                            {td.tags[0]}
                        </span>
                        <span className='flex items-center justify-center p-1 px-3 text-gray-50 bg-pink-400 text-[14px] rounded-full group-hover:!bg-pink-600 transition-all duration-500 flex-shrink-0'>
                            {td.tags[1]}
                        </span>
                    </div>
                    <p className='text-[14px] text-gray-500'>{td.description}</p>
                </div>

                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <div className='flex items-center gap-1'>
                            <FaStar className='md:w-5 md:h-5 w-3 h-3 text-yellow-300' />
                            <FaStar className='md:w-5 md:h-5 w-3 h-3 text-yellow-300' />
                            <FaStar className='md:w-5 md:h-5 w-3 h-3 text-yellow-300' />
                            <FaStar className='md:w-5 md:h-5 w-3 h-3 text-yellow-300' />
                            <FaStar className='md:w-5 md:h-5 w-3 h-3 text-yellow-300' />
                        </div>
                        <span className='max-md:text-sm'>({td.rating})</span>
                    </div>
                    <div className='flex max-md:flex-col-reverse md:items-center md:gap-2'>
                        <span className='text-[20px] font-semibold'>Rp. {td.price.toLocaleString()}</span>
                        <span className='font-semibold line-through text-[16px] text-gray-500'>Rp. {td.discount.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TopCourseDevCard
