
import React, { useRef, useEffect, useState } from 'react';
import useSpanWithAnimation from '../useSpanWithAnimation'  // Import the custom hook
import { motion } from 'framer-motion';

 export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const spanRef = useSpanWithAnimation();  // Use the custom hook to get the ref 
  


  return (
    <section >
      <span id="about"></span>
     

      <div className='text-white h-[100vh] px-20 py-10 sticky bg-gray-800'>


         {/* Curve of page */}
          {/* <div className="svg-container  ">
            <svg className="stroke-2 sm:sttroke-1" viewBox="0 0 1440 250">  
                <g  fill="rgb(210, 227, 241)">
                  <path d="M0 99.424C249.852-14.173 492.347-30.427 727.484 50.661c352.706 121.632 501.421 140.534 727.484 0 150.71-93.69 150.71 129.423 0 669.339H0V99.424z" />
                </g>      
            </svg>
          </div> */}


          <div className="svg-container">
              <svg className="stroke-2 sm:sttroke-1" viewBox="0 0 1440 250" fill="url(#gradient)">  
                  <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#3B4252" /> {/* Equivalent to gray-730 */}
                            {/* Equivalent to black */}
                            {/* <stop offset="100%" stopColor="#171923" /> */}
                      </linearGradient>
                  </defs>
                  <g>
                      <path d="M0 99.424C249.852-14.173 492.347-30.427 727.484 50.661c352.706 121.632 501.421 140.534 727.484 0 150.71-93.69 150.71 129.423 0 669.339H0V99.424z" />
                  </g>      
              </svg>
          </div>

        {/* Title of page  */}
        <div className='flex justify-start'>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-zinc-400 uppercase md-[1rem]  grid relative " data-aos="zoom-in" >
              About ME
              <span className='bar' ref={spanRef}>
                <span className='smallbar'></span>
              </span>
            </span>
            <h1 className='text-xl pt-2  text-zinc-400  ' data-aos="fade-right" data-aos-anchor-placement="top-bottom">Our Story</h1>
          </div>
        </div>

        {/* Information and image */}
        <div className='grid grid-cols-2'>
          <div className='pt-14'>
            <p className='text-xl text-justify p-10'>
              A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end is the part of a website that users see and interact with, while the back end is the behind-the-scenes data storage and processing.
              Full-stack developers also need to know the details of web architecture. They need to know how to structure code, categorize files, structure data in databases, and perform computational tasks.
            </p>
          </div>

          <div
            // initial={{ opacity: 0, y: '100%' }}
            // animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? '0%' : '100%' }}
            // exit={{ opacity: 0, y: '100%' }}
            // transition={{ duration: 1 }}
            // ref={ref}
            className='pl-24 -z-10'
          >
            <img src="/assets/M2.png" alt="Portrait of a person" className="w-[95%] h-full " data-aos="fade-up" />
          </div>
        </div>

      </div>
    
    </section>
  )
}



