import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { LiaStarSolid } from 'react-icons/lia'

type TcProps = {
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

const TopCourseCard = ({ tc }: { tc: TcProps }) => {
    return (
        <Link href={`/design/${tc.id}/${encodeURIComponent(tc.title)}`} className='flex max-sm:flex-col md:gap-3 bg-gray-50 rounded-[12px] w-[620px] md:h-[350px] mt-6 hover:shadow-md transition-all duration-300 group overflow-hidden'>
            <div className='relative w-full md:max-w-[250px] h-full bg-[#1b283f] max-sm:rounded-t-[12px] md:rounded-tl-[12px] md:rounded-bl-[12px] overflow-hidden bg-transparent'>
                <Image src={tc.imgUrl} alt='' width={600} height={600} className='md:absolute rounded-tl-[12px] rounded-bl-[12px] w-full h-full object-center object-cover transition-all duration-500' sizes='100vw' loading='lazy'/>
                <div className='bg-black w-full h-full z-10 absolute top-0 left-0 opacity-0 group-hover:opacity-20 transition-all duration-300'/>

                <div className='w-full p-2 rounded-t-[16px] absolute bottom-0 bg-[#1b283f] flex items-center justify-center transition-all duration-500 z-20'>
                    <span className='text-gray-50 font-semibold max-md:text-[14px]'>{tc.name}</span>
                </div>
            </div>

            <div className='flex flex-col justify-between gap-3 p-4 w-full'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-[18px] font-semibold'>{tc.title}</h1>
                    <div className='flex items-center gap-3 flex-wrap'>
                        <span className='flex items-center justify-center p-1 px-3 text-gray-50 bg-blue-400 text-[14px] rounded-full group-hover:!bg-blue-600 transition-all duration-500 flex-shrink-0'>
                            {tc.tags[0]}
                        </span>
                        <span className='flex items-center justify-center p-1 px-3 text-gray-50 bg-pink-400 text-[14px] rounded-full group-hover:!bg-pink-600 transition-all duration-500 flex-shrink-0'>
                            {tc.tags[1]}
                        </span>
                    </div>
                    <p className='text-[14px] text-gray-500'>{tc.description}</p>
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
                        <span className='max-md:text-sm'>({tc.rating})</span>
                    </div>
                    <div className='flex items-center gap-2 flex-wrap-reverse'>
                        <span className='text-[20px] font-semibold'>Rp. {tc.price.toLocaleString()}</span>
                        <span className='font-semibold line-through text-[16px] text-gray-500'>Rp. {tc.discount.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default TopCourseCard
