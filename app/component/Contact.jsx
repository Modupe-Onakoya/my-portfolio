import React from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className='px-[5%] text-center space-y-5' id='contact' >
            <h3 className='text-gray-500'> GET IN TOUCH</h3>
            <h2 className='font-bold text-2xl'>Let's build something great together </h2>
            <p className='text-xl text-gray-500 '>I'm currently available  for freelance work and full time-roles. Have a project in mind or just want to say hello? My inbox is always open</p>


            <button className='w-fit  px-4 py-1 rounded-lg'> <Image src={assets.email} alt="" className="w-5 h-5" />Say hello</button>
        </div>
    )
}

export default Contact