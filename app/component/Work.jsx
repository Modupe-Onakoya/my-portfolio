import React from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const Work = () => {
    return (
        <div className='py-20 px-[5%]'>
            <h2 className='font-bold '>My latest work</h2>
            <div className='flex flex-col items-center lg:flex-row gap-6'>
                <Image src={assets.work_1} className='w-50 h-50' />
                <Image src={assets.work_2} className='w-50 h-50' />
                <Image src={assets.work_3} className='w-50 h-50' />
                <Image src={assets.work_4} className='w-50 h-50' />
            </div>
        </div>
    )
}

export default Work