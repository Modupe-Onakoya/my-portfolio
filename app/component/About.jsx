import React from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='px-[5%] py-10 '>
            <div className='lg:flex lg:justify-between'>
                <div className='max-md:flex justify-center max-md:w-full'>
                    <Image src={assets.profile} alt='' className='lg:w-125 lg:h-130 lg:rounded-3xl w-75 h-75 md:w-75 md:h-85 rounded-lg ' />

                </div>
                <div className='space-y-5'>
                    <h3 className='font-bold text-2xl '>About Me</h3>
                    <p className='max-w-4xl lg:text-xl text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet cupiditate praesentium distinctio cumque, beatae inventore eligendi dignissimos tenetur, odit, minus obcaecati eos laudantium! Repellat libero beatae rem est maxime labore?</p>
                    <p className='max-w-3xl lg:text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis iure voluptates facilis non, sit eius. Natus magnam, inventore corrupti vitae molestias ad praesentium nulla, nostrum suscipit necessitatibus ullam animi.</p>
                </div>
            </div>


        </div>
    )
}

export default About