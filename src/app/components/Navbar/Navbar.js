"use client";
import React from 'react'

 const Navbar = () => {
  return (
    <>
      {/* <div className='w-full h-14 bg-[#232b2b] text-white font-bold items-center fixed z-[10000] md:p-3 md:top-0 border-b-[1px] border-yellow-700'>
        <div>
            <h1 className='text-xl md:text-2xl'> SOFTWARE <span className='text-yellow-600'>DEV</span>
            </h1> 
        </div>
      </div> */}

    <div className='bg-[#232b2b] text-white font-bold items-center fixed z-[10000] md:p-3 md:top-0 border-b-[1px] border-gray-700 w-full'>
      <div className='container '>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl md:text-2xl'> M <span className='text-yellow-600'>P</span>
              </h1> 
            </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;