import React from 'react'
import { assets, workData } from '../asset/assets'
import Image from 'next/image'


const Work = () => {
    return (
        <div id='work' className='px-[5%] mt-30 w-full scroll-mt-30' >
            <h2 className='text-gray-500 xl:text-xl '>My Portfolio</h2>
            <h2 className='font-bold mb-3 xl:text-2xl mb-7'>My latest work</h2>

            <div className='xl:flex gap-6 md:grid md:grid-cols-2 max-sm:space-y-2'>
                {workData.map(({ title, description, bgImage }, index) => (
                    // <div
                    //     className='aspect-square  bg-no-reapeat bg-cover bg-center rounded-lg relative cursor-pointer w-64 group'
                    //     key={index} style={{ backgroundImage: `url(${bgImage})` }}>
                    //     <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center  jsutify-between duratio-500 group-hover:bottom-7'>
                    //         <div>
                    //             <h2>{title}</h2>
                    //             <p>{description}</p>
                    //         </div>

                    //     </div>

                    // </div>
                    <div className='border rounded-lg border-gray-300 space-y-3'>
                        <Image alt='' src={bgImage} width={500} height={50} className='rounded-lg h-h w-[100%]' />
                        <div className='px-5 py-5'>
                            <h2 className='font-bold text-lg py-2 '>{title}</h2>
                            <p className='text-gray-500 xl:text-[18px] text-sm'>{description}</p>
                        </div>

                    </div>



                ))}
            </div>
        </div>
    )
}

export default Work