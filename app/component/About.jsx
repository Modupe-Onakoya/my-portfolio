import React from 'react'
import { assets } from '../asset/assets'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='px-[5%] py-30 scroll-mt-20 w-full'>
            <div className='md:flex md:gap-10 '>
                <div className='max-md:flex justify-center max-md:w-full'>
                    <Image src={assets.profile} alt='' className='xl:w-95 xl:h-95 xl:rounded-3xl w-75 h-75 md:w-75 md:h-60 rounded-lg max-sm:mb-5 lg:w-90 lg:h-80 ' />

                </div>
                <div className='space-y-5 md:space-y-5'>
                    <h3 className='font-bold text-2xl '>About Me</h3>
                    <p className='max-w-4xl xl:text-[19px] text-gray-500 text-[15px] md:text-[15px] md:max-w-2xl lg:text-[17px] xl:max-w-5xl'>I’m a Microbiology graduate with a long-standing passion for technology and how it can be used to solve real-world problems. I enjoy turning ideas into functional digital experiences and constantly improving my skills in modern web technologies. My goal is to scale up as a developer, deepen my understanding of software engineering, and contribute to building products that are both impactful and easy to use.  </p>
                    <p className='max-w-4xl xl:text-[19px] text-gray-500 text-[15px] md:text-[15px] md:max-w-2xl lg:text-[17px] xl:max-w-5xl'>I’m a Microbiology graduate with a long-standing passion for technology and how it can be used to solve real-world problems. I enjoy turning ideas into functional digital experiences and constantly improving my skills in modern web technologies. My goal is to scale up as a developer, deepen my understanding of software engineering, and contribute to building products that are both impactful and easy to use.  </p>

                    <div className='xl:flex gap-5'>
                        <a href="">
                            <Image alt='' src={assets.github} className='w-8 h-8' />

                        </a>
                        <a href="">
                            <Image alt='' src={assets.linkedin} className='w-8 h-8' />
                        </a>
                        <a href="">
                            <Image alt='' src={assets.email} className='w-8 h-8' />

                        </a>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default About