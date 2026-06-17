import React from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='px-[5%] py-30 md:scroll-mt-20 w-full'>
            <div className='md:flex md:gap-10 '>
                <div className='max-md:flex justify-center max-md:w-full'>
                    <Image src={assets.profile} alt='' className='xl:w-75 xl:h-75 xl:rounded-3xl md:w-85 md:h-85 w-75 h-75 md:w-75 md:h-60 rounded-lg max-sm:mb-5 lg:w-90 lg:h-80 ' />

                </div>
                <div className='space-y-5 xl:space-y-5'>
                    <h3 className='font-bold text-2xl '>About Me</h3>
                    <p className='max-w-4xl xl:text-[19px] text-gray-500 text-[15px] md:text-[15px] md:max-w-2xl lg:text-[17px] xl:max-w-5xl'>I’m a frontend developer passionate about building clean, responsive, and user-friendly web experiences. I enjoy turning ideas into functional digital products and creating interfaces that are both visually appealing and easy to use.  </p>
                    <p className='max-w-4xl xl:text-[19px] text-gray-500 text-[15px] md:text-[15px] md:max-w-2xl lg:text-[17px] xl:max-w-5xl'> My focus is on modern web technologies such as React, Next.js, and TypeScript. I’m committed to continuous learning, improving my skills through real-world projects, and growing into a well-rounded software engineer capable of building impactful solutions. </p>

                    <div className='flex gap-5 xl:pt-6 sm:pt-2 '>
                        <a href="https://github.com/Modupe-Onakoya"
                            target="_blank"
                            rel="noopener noreferrer" className='border border-gray-300 rounded-full p-2 shadow-sm'>
                            <Image alt='' src={assets.github} className='xl:w-6 xl:h-6 w-4 h-4' />
                        </a>
                        <a href="https://www.linkedin.com/in/modupe-onakoya"
                            target="_blank"
                            rel="noopener noreferrer" className='border border-gray-300 rounded-full p-2 shadow-sm'>
                            <Image alt='' src={assets.linkedin} className='xl:w-6 xl:h-6 w-4 h-4' />
                        </a>
                        <a href="mailto:onakoyamodupe0@gmail.com" className='border border-gray-300 rounded-full p-2 shadow-sm'>
                            <Image alt='' src={assets.email} className='xl:w-6 xl:h-6 w-4 h-4' />

                        </a>
                        <a href="https://twitter.com/@dhuks__"
                            target="_blank"
                            rel="noopener noreferrer" className='border border-gray-300 rounded-full p-2 shadow-sm'>
                            <Image alt='' src={assets.twitter} className='xl:w-6 xl:h-6 w-4 h-4' />

                        </a>
                    </div>

                </div>
            </div>


        </div >
    )
}

export default About