import React from 'react'
import {useState} from 'react'
import useSpanWithAnimation from '../../components/useSpanWithAnimation'; // Import the custom hook
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Skill = () => {
  const spanRef = useSpanWithAnimation();  // Use the custom hook to get the ref

  const { ref, inView } = useInView({
    triggerOnce: true,
  });


  // const worked = [
  //   {
  //     id: 1,
  //     src: "/assets/html.png",
  //     title: "HTML",
  //     style: "shadow-orange-600"
  //   },
  //   {
  //     id: 2,
  //     src: "/assets/css.png",
  //     title: "CSS",
  //     style: "shadow-blue-600"
  //   },
  //   {
  //     id: 3,
  //     src: "/assets/tailwind.png",
  //     title: "TAILWIND",
  //     style: "shadow-cyan-500"
  //   },
  //   {
  //     id: 4,
  //     src: "/assets/javascript.png",
  //     title: "JAVASCRIPT",
  //     style: "shadow-violet-700"
  //   },
  //   {
  //     id: 5,
  //     src: "/assets/react.png",
  //     title: "REACTJS",
  //     style: "shadow-yellow-500"
  //   },
  //   {
  //     id: 6,
  //     src: "/assets/nextjs.png",
  //     title: "NEXTJS",
  //     style: "shadow-cyan-500"
  //   },
  //   {
  //     id: 7,
  //     src: "/assets/node.png",
  //     title: "NODEJS",
  //     style: "shadow-gray-400"
  //   },
  //   {
  //     id: 8,
  //     src: "/assets/github.png",
  //     title: "GITHUB",
  //     style: "shadow-lime-600"
  //   },
  //   {
  //     id: 9,
  //     src: "/assets/Firebase.png",
  //     title: "Firebase",
  //     style: "shadow-gray-500"
  //   },
  // ]
  const [index,setIndex]=useState(0);

  const handleOptionClick = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const aboutData = [
    {
      title: 'FrontEnd',
      info: [
       {
        id: 1,
        src: "/assets/html.png",
        title: "HTML",
        style: "shadow-orange-600"
      },
      {
        id: 2,
        src: "/assets/css.png",
        title: "CSS",
        style: "shadow-blue-600"
      },
      {
        id: 3,
        src: "/assets/tailwind.png",
        title: "TAILWIND",
        style: "shadow-cyan-500"
      },
      {
        id: 4,
        src: "/assets/javascript.png",
        title: "JAVASCRIPT",
        style: "shadow-violet-700"
      },
      {
        id: 5,
        src: "/assets/react.png",
        title: "REACTJS",
        style: "shadow-yellow-500"
      },
      {
        id: 6,
        src: "/assets/nextjs.png",
        title: "NEXTJS",
        style: "shadow-gray-400"
      },
      ],
    },
     
    {
      title: 'BackEnd',
      info: [
        {
          id: 7,
          src: "/assets/node.png",
          title: "NODEJS",
          style: "shadow-gray-400"
        },
        {
          id: 8,
          src: "/assets/Firebase.png",
          title: "FIREBASE",
          style: "shadow-yellow-500"
        },
        {
          id: 9,
          src: "/assets/mongoDB.png",
          title: "MONGODB",
          style: "shadow-cyan-500"
        },
        {
          id: 10,
          src: "/assets/mongoDB.png",
          title: "MYSQL",
          style: "shadow-violet-700"
        },
        ],
      },

      {
        title: 'Other',
        info: [
          {
          id: 11,
          src: "/assets/Uipath.png",
          title: "UiPath",
          style: "shadow-cyan-500"
        },
        {
          id: 12,
          src: "/assets/MPAutomate.png",
          title: "Microsoft Power Automate",
          style: "shadow-violet-700"
        },
        {
          id: 13,
          src: "/assets/AA.png",
          title: "Automation Anywhere",
          style: "shadow-orange-600"
        },
        {
          id: 14,
          src: "/assets/SQL server management.png",
          title: "SQL Server Management",
          style: "shadow-yellow-500"
        },
        ],
      },
    
  ];

  return (
    // <>
    //   <span id="skill"></span>
    //   <div className='text-black  text-3xl  px-20 py-10 h-[100vh] w-full sticky  bg-gradient-to-b from-[#2e3845] to-[#030712]'>
       
    //       <div className=' flex justify-start '>
    //             <div className="flex flex-col items-center pb-14">
    //                <span className="text-4xl font-bold text-amber-600 uppercase md-[1rem] hover:text-amber-500 grid relative" data-aos="zoom-in"> Skills
    //                   <span className='bar' ref={spanRef}>
    //                        <span className='smallbar' ></span>
    //                   </span>
    //                 </span>
    //                 <h1 className='text-xl pt-2  text-amber-600 'data-aos="fade-right" >Top Skills</h1>
    //             </div> 
    //       </div>

    //       {/* tab */}
    //       {/* <div className='flex gap-10 mx-auto '>
    //         {aboutData.map((item, itemIndex) => {
    //             return(
    //               <div 
    //               key={itemIndex} 
    //               onClick={() => setIndex(itemIndex)} 
    //               className={`${index === itemIndex && 'text-red-600 after:w-[100%] after:bg-red-600 after:transition-all after:duration-300'} text-lg text-white cursor-pointer relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} 
    //               >
    //                   {item.title}
    //               </div>
    //             );
    //           }
    //         )
    //         }
    //       </div> */}

    //     <div className='flex gap-20 mx-auto'>
    //         {aboutData.map((item, itemIndex) => (
    //           <div
    //             key={itemIndex}
    //             onClick={() => setIndex(itemIndex)}
    //             className={`text-xl cursor-pointer relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${index === itemIndex ? 'text-cyan-700 after:bg-cyan-400 after:w-[100%] after:transition-all after:duration-300' : 'text-white'}`}
    //           >
    //             {item.title}
    //           </div>
    //         ))}
    //     </div>

    //       {/* Display skills */}
    //       <div className='max-w-screen-lg p-16 mx-auto flex flex-col justify-start  3xl:justify-center w-full h-[80vh] text-white text-lg '>
    //         <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10
    //         s text-center py-4 px-12 sm:px-0'>
    //           {aboutData[index].info.map((item, itemIndex) => (
    //             <div key={itemIndex} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg mx-6 my-4 ${item.style}`}>
    //               <img src={item.src} alt="" className='w-20 mx-auto' />
    //               <p className='mt-4'>{item.title}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
          
    //   </div>
    // </>

    <>
      <span id="skill"></span>
      <div className="text-black text-3xl px-20 py-10 h-[100vh] w-full sticky bg-gradient-to-b from-[#2e3845] to-[#030712]">
        <div className="flex justify-start">
          <div className="flex flex-col items-center pb-14">
            <span className="text-4xl font-bold text-zinc-400  uppercase md-[1rem] grid relative" data-aos="zoom-in">
              Skills
              <span className="bar" ref={spanRef}>
                <span className="smallbar"></span>
              </span>
            </span>
            <h1 className="text-xl pt-2 text-zinc-400 " data-aos="fade-right">
              Top Skills
            </h1>
          </div>
        </div>

        <div className="flex gap-20 mx-auto">
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              onClick={() => setIndex(itemIndex)}
              className={`text-xl cursor-pointer relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${index === itemIndex ? 'text-cyan-700 after:bg-blue-300 after:w-[100%] after:transition-all after:duration-300' : 'text-white'}`}
            >
              {item.title}
            </div>
          ))}
        </div>

        <div className="max-w-screen-lg p-16 mx-auto flex flex-col justify-start  3xl:justify-center w-full h-[80vh] text-white text-lg ">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 s text-center py-4 px-12 sm:px-0" ref={ref}>
            {aboutData[index].info.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: itemIndex * 0.3 }}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg mx-6 my-4 ${item.style}`}
              >
                <img src={item.src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}
