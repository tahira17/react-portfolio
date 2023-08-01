import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-500'>
            About
          </p> 
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Tahira Nawaz, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I'm a Frontend engineer currently working with TeReSol , Islamabad since March, 2022 working on a web-based banking system, completing 14 use cases with Vue.js. Collaborating on design, implementing performant and accessible frontend functionality (HTML, CSS, JavaScript), and ensuring seamless integration with bank systems. Thorough testing guarantees reliability and security. Effective communication and issue resolution for high-quality solutions.
            </p>  
          </div>
        </div>
    </div>
  </div>
  )
}

export default About