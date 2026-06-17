import React from 'react'
import Image from 'next/image'
import { assets } from '../asset/assets'

const Header = () => {
    return (
        <div className='px-[5%] w-full md:py-30 xl:py-30 border-b border-b-gray-300 ' id='home'>
            <div className='hidden md:block w-full  '>
                <div className='flex justify-between '>
                    <div >
                        <h2 className=' font-bold mb-5 lg:leading-11 lg:text-[35px] lg:max-w-xl md:text-[23px] xl:text-[45px] xl:leading-14 md:max-w-2xl xl:max-w-3xl'>Hi, I'm Onakoya Modupe — a Frontend Developer building clean, fast, and user-friendly web experiences.</h2>

                        <p className='text-gray-500 lg:max-w-xl  mb-5 lg:mb-5 md:max-w-2xl  md:text-[16px] xl:max-w-3xl xl:text-md xl:max-w-xl'>I build accessible, performant interfaces with React, TypeScript, and modern tooling. I care deeply about the details that make products feel effortless to use.</p>
                        <button className='border border-gray-300 shadow-md w-fit px-6 rounded-lg py-2 flex gap-3 items-center '><a href="/Onakoya1.pdf" target="_blank" rel="noopener noreferrer">My resume</a> <Image src={assets.download_icon} alt='' className='w-5 h-5' /></button>
                    </div>

                    <div className='flex items-center'>
                        <Image src={assets.profile} alt='' className='xl:w-90 xl:h-85 xl:rounded-3xl lg:w-90 lg:h-80 rounded-2xl md:w-70 md:h-60 ' />
                    </div>
                </div>
            </div>
            <div className='w-full py-25  md:hidden'>
                <div className='lg:flex justify-between'>
                    <div className='flex flex-col justify-center mb-10'>
                        <h2 className='font-bold text-3xl  leading-10 max-w-xl  mb-5 md:max-w-3xl md:leading-12' >
                            Hi, I'm Onakoya Modupe — a frontend developer building clean, fast web experiences.
                        </h2>
                        <p className='text-gray-500 text-[15px] mb-5 max-w-xl'>I build responsive and high-performing web applications using React, TypeScript, and modern technologies, with a strong focus on creating seamless user experiences.</p>
                        <p className='border border-gray-300 shadow-md w-fit px-4 rounded-lg py-1 flex gap-3 items-center'><a href="/Onakoya1.pdf" target="_blank" rel="noopener noreferrer">My resume</a> <Image src={assets.download_icon} alt='' className='w-5 h-5' /></p>
                    </div>
                    <div className=' flex justify-center w-full'>

                        <Image src={assets.profile} alt='' className='w-75 h-75 md:w-75 md:h-85 rounded-lg' />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header