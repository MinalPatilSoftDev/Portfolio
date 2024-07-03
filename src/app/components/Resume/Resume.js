import React, { useEffect, useState } from 'react';
import MyBook from "./MyBook";
import useSpanWithAnimation from '../../components/useSpanWithAnimation';  // Import the custom hook
import { motion } from 'framer-motion';

export const Resume = (props) => {
  
  const spanRef = useSpanWithAnimation();  // Use the custom hook to get the ref
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elementPosition = document.getElementById('zoom-in-element').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the element is within the viewport
      if (elementPosition < windowHeight * 0.8 && elementPosition > -windowHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <span id="resume"></span>
      <div  className="text-black text-3xl px-20 py-10 h-[100vh] w-full sticky bg-gradient-to-b from-gray-700  to-gray-900" > 
          {/* <div className='font-bold text-amber-500 uppercase md-[1rem] hover:text-amber-600 items-start flex flex-col '>
            <span className="text-4xl font-bold text-amber-500 uppercase md-[1rem] hover:text-amber-600 grid relative "> Resume
                  <span className='bar' ref={spanRef}>
                    <span className='smallbar' ></span>
                  </span>
            </span>
          </div>  */}
            <div className=' flex justify-start '>
                <div className="flex flex-col items-center">
                   <span className="text-4xl font-bold text-zinc-400  uppercase md-[1rem] grid relative" data-aos="zoom-in"> Resume
                      <span className='bar' ref={spanRef}>
                           <span className='smallbar' ></span>
                      </span>
                    </span>
                    
                    <h1 className='text-xl pt-2  text-zinc-400  'data-aos="fade-right" >My formal Bio details</h1>
                </div> 
            </div>

                <motion.div className="mt-8  " id="zoom-in-element" initial={{ scale: 0 }} animate={{ scale: isVisible ? 1 : 0 }} 
                transition={{ duration: 1, ease: 'easeInOut' }} // Adjust duration and easing function for smooth animation
                >
                    <MyBook/>
                </motion.div>
              
      </div>

    </>
  )
}


