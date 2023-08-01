import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d01cd87f-7f44-48c5-9f2c-51d3170faa83" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='PH # 0331-5017691' name='name' disabled="true" />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email : tahiranawaz12345@gmail.com' name='email' disabled="true" />
            {/* <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Send Email'></textarea>
            <button className='text-white border-2 hover:bg-purple-500 hover:border-purple-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button> */}
        </form>
    </div>
  )
}

export default Contact