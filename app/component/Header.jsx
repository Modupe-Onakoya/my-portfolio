import React from 'react'
import Image from 'next/image'
import { assets } from '../asset/assets'

const Header = () => {
    return (
        <div className='px-[5%] w-full'>
            <div className='hidden lg:block w-full py-40 md:py-40  '>
                <div className='flex justify-between '>
                    <div >
                        <h1 className='max-w-3xl text-7xl font-bold leading-20 pb-10'>Hi, im Onakoya Modupe - a frontend developer crafting clean fast web experience</h1>

                        <p className='text-gray-500 max-w-3xl text-2xl mb-3'>I build accessible, performant interfaces with React, TypeScript, and modern tooling. I care deeply about the details that make products feel effortless to use.</p>
                        <p className='border w-fit px-8 rounded-lg py-2 flex gap-3 items-center'>My resume <Image src={assets.download_icon} className='w-5 h-5' /></p>
                    </div>

                    <div className='flex items-center'>
                        <Image src={assets.profile} alt='' className='w-125 h-130 rounded-3xl ' />
                    </div>
                </div>
            </div>
            <div className='w-full py-30 md:py-30 lg:hidden'>
                <div className='lg:flex justify-between'>
                    <div className='flex flex-col justify-center mb-10'>
                        <h1 className='font-bold text-[35px] md:text-[40px] leading-12 max-w-lg  mb-6 md:text-[50px] md:max-w-2xl md:leading-14' >
                            Hi, I'm Onakoya Modupe — a frontend developer crafting clean, fast web experiences.
                        </h1>
                        <p className='text-gray-500 text-xl max-w-sm md:max-w-2xl lg:max-w-xl lg:text-2xl'>I build accessible, performant interfaces with React, TypeScript, and modern tooling. I care deeply about the details that make products feel effortless to use.</p>
                        <p className='border w-fit px-8 rounded-lg py-2 flex gap-3 items-center'>My resume <Image src={assets.download_icon} className='w-5 h-5' /></p>
                    </div>
                    <div className=' flex max-md:justify-center w-full'>

                        <Image src={assets.profile} alt='' className='w-75 h-75 md:w-75 md:h-85 rounded-lg' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header