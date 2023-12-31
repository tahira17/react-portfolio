import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import VueJs from '../assets/VuejsLogo.png'

import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-footer_pattern bg-no-repeat bg-cover bg-bottom text-gray-900'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p data-aos="zoom-in" className='text-4xl font-bold inline border-b-4 border-[#7162d0] '>Skills</p>
              <p data-aos="zoom-in" className='py-4 text-gray-900'> These are the technologies I've worked with</p>
          </div>

          <div data-aos="zoom-in" className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#7162d0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#7162d0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#7162d0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>

              <div className='shadow-md shadow-[#7162d0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#7162d0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={VueJs} alt="HTML icon" />
                  <p className='my-4'>Vue Js</p>
              </div>
              <div className='shadow-md shadow-[#7162d0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#7162d0] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
    
            
       
          </div>
      </div>
    </div>
  );
};

export default Skills;