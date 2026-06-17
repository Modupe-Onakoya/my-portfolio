import React from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className='px-[5%] text-center xl:space-y-5 space-y-3 md:scroll-mt-30 max-sm:scrol-mt-5 mt-30' id='contact' >
            <h3 className='text-gray-500 '> GET IN TOUCH</h3>
            <h2 className='font-bold xl:text-2xl text-lg'>Let's build something great together </h2>
            <p className='xl:text-lg text-gray-500 text-sm'>I'm currently available  for freelance work and full time-roles. Have a project in mind or just want to say hello? My inbox is always open</p>

            <div className='flex justify-center'>
                <button className='w-fit  px-4 py-1 rounded-lg  border border-gray-300 '> <a href="mailto:onakoyamodupe0@gmail.com" className='flex items-center gap-3'><Image src={assets.email} alt="" className="w-5 h-5" />Say hello</a></button>

            </div>
            <div className='flex gap-5 pt-1 justify-center'>
                <a href="https://github.com/Modupe-Onakoya"
                    target="_blank"
                    rel="noopener noreferrer" className='border border-gray-300 rounded-full p-2 shadow-sm'>
                    <Image alt='' src={assets.github} className='xl:w-6 xl:h-6 w-4 h-4 ' />
                </a>
                <a href="https://www.linkedin.com/in/modupe-onakoya"
                    target="_blank"
                    rel="noopener noreferrer " className='border border-gray-300 rounded-full p-2 shadow-sm'>
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
    )
}

export default Contact