import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
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
    <a href={`/developer/${td.id}/${encodeURIComponent(td.title)}`} className='flex gap-3 bg-gray-50 rounded-[12px] w-[620px] h-[300px] mt-6 hover:shadow-md transition-all duration-300 group'>
      <div className='relative w-full max-w-[250px] h-full bg-[#1b283f] rounded-tl-[12px] rounded-bl-[12px] overflow-hidden'>
        <Image src={td.imgUrl} alt='' width={300} height={300} className='absolute w-full h-full object-cover group-hover:translate-x-4 transition-all duration-500' />

        <div className='w-full p-2 rounded-t-[24px] absolute bottom-0 bg-[#1b283f] flex items-center justify-center'>
          <span className='text-gray-50 font-semibold'>{td.name}</span>
        </div>
      </div>

      <div className='flex flex-col justify-between gap-3 p-4 w-full'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[18px] font-semibold'>{td.title}</h1>
          <div className='flex items-center gap-3'>
            <span className='flex items-center justify-center p-1 px-3 text-gray-50 bg-blue-400 text-[14px] rounded-full group-hover:!bg-blue-600 transition-all duration-500'>
              {td.tags[0]}
            </span>
            <span className='flex items-center justify-center p-1 px-3 text-gray-50 bg-pink-400 text-[14px] rounded-full group-hover:!bg-pink-600 transition-all duration-500'>
              {td.tags[1]}
            </span>
          </div>
          <p className='text-[14px] text-gray-500'>{td.description}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <LiaStarSolid className='w-5 h-5 text-yellow-300' />
              <LiaStarSolid className='w-5 h-5 text-yellow-300' />
              <LiaStarSolid className='w-5 h-5 text-yellow-300' />
              <LiaStarSolid className='w-5 h-5 text-yellow-300' />
              <LiaStarSolid className='w-5 h-5 text-yellow-300' />
            </div>
            <span>({td.rating})</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-[20px] font-semibold'>Rp. {td.price}</span>
            <span className='font-semibold line-through text-[16px] text-gray-500'>Rp. {td.discount}</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default TopCourseDevCard