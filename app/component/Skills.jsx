import React from 'react'

const Skills = () => {
    return (
        <div className='px-[5%] '>
            <h3 className='font-bold hover:text-blue-300 transition duration-200'>Tech Stack & Tools</h3>
            <h2 className='font-bold mb-3'>Tecnologies i work with</h2>
            <ul className='flex flex-wrap gap-2 pointer-events-none'>
                <li className="w-fit px-4 py-1 rounded-lg border border-gray-500 hover:-translate-y-2 duration-200 transition-transform">Html</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-500'>Css3</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-500'>js</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-500'>tailswind</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-500'>react</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-500'>next js</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-500'>TypeScript</li>
                <li className='w-fit px-4 py-1 rounded-lg border border-gray-500'>Git and Github</li>

            </ul>
        </div>
    )
}

export default Skills