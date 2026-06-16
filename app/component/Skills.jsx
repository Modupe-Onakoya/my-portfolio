import React from 'react'

const Skills = () => {
    return (
        <div className='px-[5%] space-y-2'>
            <h3 className='text-gray-500 xl:text-xl '>Tech Stack & Tools</h3>
            <h2 className='font-bold mb-3 xl:text-2xl mb-7'>Technologies i work with</h2>
            <ul className='flex flex-wrap gap-2 pointer-events-none'>
                <li className="w-fit px-4 py-1 rounded-lg border border-gray-300 hover:-translate-y-2 duration-200 transition-transform">Html</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300'>Css3</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300'>js</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300'>tailswind</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300'>react</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300'>next js</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300'>TypeScript</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-300'>Git and Github</li>

            </ul>
        </div>
    )
}

export default Skills