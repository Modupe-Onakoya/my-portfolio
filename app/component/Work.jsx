import React from 'react'
import { assets, workData } from '../asset/assets'
import Image from 'next/image'


const Work = () => {
    return (
        <div id='portfolio' className='px-[5%] py-30   w-full scroll-mt-20'>
            <h4>My Portfolio</h4>
            <h2 className='font-bold'>My latest work</h2>

            <div className='flex gap-6 flex-col md:flex-row'>
                {workData.map(({ title, description, bgImage }, index) => (
                    <div
                        className='aspect-square  bg-no-reapeat bg-cover bg-center rounded-lg relative cursor-pointer w-64 group'
                        key={index} style={{ backgroundImage: `url(${bgImage})` }}>
                        <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center  jsutify-between duratio-500 group-hover:bottom-7'>
                            <div>
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>

                        </div>

                    </div>



                ))}
            </div>
        </div>
    )
}

export default Work