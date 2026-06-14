import React from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const Work = () => {
    return (
        <div className='py-20'>
            <h2>My latest work</h2>
            <div className='flex'>
                <Image src={assets.work_1} className='w-20 h-20' />
                <Image src={assets.work_2} className='w-20 h-20' />
                <Image src={assets.work_3} className='w-20 h-20' />
                <Image src={assets.work_4} className='w-20 h-20' />
            </div>
        </div>
    )
}

export default Work