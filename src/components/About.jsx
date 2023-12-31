import React from 'react'

const About = () => {
  return (
    <div  name='about' className='w-full h-screen bg-hero_pattern bg-cover bg-no-repeat bg-bottom text-gray-900'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2  gap-8 -mt-40 sm:mt-0'>
        <div data-aos="zoom-in" className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-900'>
            About
          </p> 
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div data-aos="zoom-in" className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Tahira Nawaz, nice to meet you. Please take a look around.</p>
          </div>
          <div data-aos="zoom-in">
            <p className='font-bold'>I'm a Frontend engineer currently working with TeReSol , Islamabad since March, 2022 working on a web-based banking system, completing 14 use cases with Vue.js. Collaborating on design, implementing performant and accessible frontend functionality (HTML, CSS, JavaScript), and ensuring seamless integration with bank systems. Thorough testing guarantees reliability and security. Effective communication and issue resolution for high-quality solutions.
            </p>  
          </div>
        </div>
    </div>
  </div>
  )
}

export default About