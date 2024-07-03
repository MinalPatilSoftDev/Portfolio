"use client";
import React, {useEffect } from 'react';
import Particle from '../Particle'
import TextEffect from '../TextEffect'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from "next/image"
import {transition} from "../transition"
import './Hero.css'

 const Hero = () => { 

  return (
    <>
      <span id="home"></span>
      <div className=" bg-gradient-to-b from-gray-800 to-black bg-cover bg-center h-[100vh]  w-full">
           <Particle/>  

          <div className='w-3/4  grid grid-cols-1 mx-auto lg:grid-cols-2 gap-1 h-full items-center '>
              <div className='mx-16'>
             
                  <h1 className='text-xl md:text-xl lg:text-5xl text-amber-700 font-bold'>
                      Minal Patil
                  </h1>

                  {/*TextEffect */}
                  <h1 className='text-white text-sm md:text-base lg:text-4xl pt-2 '>I'm a <TextEffect/> </h1>  
                     
                  <div className='mt-8 mx-6 flex-col  items-center '>
                      <a href="Minal Patil 2023 Achievements.pdf" download={"Minal Patil 2023 Achievements.pdf"}>
                          <button class="button shadow-md shadow-cyan-500 relative cursor-pointer bg-[rgb(34, 49, 61)] text-white inline-flex items-center justify-center font-semibold lg:pl-6 md:pl-2 md:text-sm lg:text-md rounded-full border-[1.5px] hover:text-black  border-cyan-500 ">Download CV
                             <ArrowDownTrayIcon className='w-10 lg:w-12 ml-3 p-4 h-10 lg:h-12 text-sm bg-cyan-500 rounded-full right-0 top-0 transform hover:bg-white hover:text-cyan-500'/>
                          </button>
                      </a>
                  </div>
              </div>

            <div className='md:w-[400px] md:h-[400px] w-[100px] h-[100px] bg-cyan-700 relative lg:flex items-center rounded-full mx-auto shadow-border'  >         
                <Image src="/images/u1.jpg" alt="user" layout="fill" sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 400px"  className='object-cover rounded-full zoom-effect '/>
                
            </div>
          </div> 
      </div>
      
    </>
  )
}

export default Hero;