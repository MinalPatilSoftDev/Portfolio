import React from 'react'
import useSpanWithAnimation from '../../components/useSpanWithAnimation';   // Import the custom hook
export const Projects = () => {
  const spanRef = useSpanWithAnimation();  // Use the custom hook to get the ref 
  return (

    <>
      <span id="projects"></span>
      <div className='text-black  bg-gradient-to-b from-[#020e17] via-gray-800 to-black text-3xl px-20 py-10 h-[100vh] w-full sticky  '>

          <div className=' flex justify-start '>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-amber-600 uppercase md-[1rem]  grid relative" data-aos="zoom-in"> Projects
                  <span className='bar' ref={spanRef}>
                    <span className='smallbar' ></span>
                  </span>
              </span>
              <h1 className='text-xl pt-2  text-amber-600 ' data-aos="fade-right" >My creation</h1>
            </div> 
          </div>
      </div>
    </>
  )
}
