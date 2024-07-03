import React from 'react'
import "./Services.css";
import useSpanWithAnimation from '../../components/useSpanWithAnimation';  // Import the custom hook
import { TbRobot } from "react-icons/tb";
import { SiFreelancer } from "react-icons/si";
import { PiCodeBold } from "react-icons/pi";
import { motion } from "framer-motion";
import Card from '../Card/Card';


export const Services = () => {
  
    // transition
    const transition = { duration: 1,type: "spring",};
    const spanRef = useSpanWithAnimation();  // Use the custom hook to get the ref
  
  return (

    <>
          <span id="service"></span>
          <div className=' sticky h-[100vh]  bg-gradient-to-b from-[#10131b]  to-gray-700 '>

            <div className='text-black text-4xl px-20 py-10 w-full sticky '>
                <div className=' flex justify-start '>
                    <div className="flex flex-col items-center">
                      <span className="text-4xl font-bold text-zinc-400  uppercase md-[1rem]  grid relative " data-aos="zoom-in"   data-aos-anchor-placement="top-bottom"> Services
                          <span className='bar' ref={spanRef}>
                            <span className='smallbar' ></span>
                          </span>
                      </span>
                      <h1 className='text-xl pt-2  text-zinc-400  ' data-aos="fade-right" data-aos-anchor-placement="top-bottom">What I Offer</h1>
                    </div> 
                </div>
            </div> 


            <div className="flex items-center justify-center">
              {/* right */}
              <div className="cards">
                {/* first card */}
                <motion.div
                  initial={{ left: "12rem",top: "1rem"  }}
                  whileInView={{ left: "6rem" }}
                  transition={transition}
                >
                  <Card
                    emoji={<TbRobot/>}
                    heading={"RPA Developement"}
                    detail={"Uipath, Automation Anywere, SQL Server , ERP System"}
                    learnMoreInfo={
                      "part 2:Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis ipsam cupiditate illum laborum atque voluptatibus ut doloremque excepturi quisquam repellendus dolor deserunt totam tempore, laboriosam earum sapiente esse praesentium."
                    }
                  />
                  
                </motion.div>
                {/* second card */}
                <motion.div
                  initial={{ left: "-10rem", top: "1rem" }}
                  whileInView={{ left: "-25rem" }}
                  transition={transition}
                >
                  <Card
                    emoji={<PiCodeBold />}
                    heading={"Full Stack Developement"}
                    detail={"Html, Css, JavaScript, React, Nodejs, Express"}
                    learnMoreInfo={
                      "part 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis ipsam cupiditate illum laborum atque voluptatibus ut doloremque excepturi quisquam repellendus dolor deserunt totam tempore, laboriosam earum sapiente esse praesentium."
                    }
                  />
                </motion.div> 
                {/* 3rd */}
                <motion.div
                  initial={{ top: "20rem", left: "10rem" }}
                  whileInView={{ left: "-9.5rem" }}
                  transition={transition}
                >
                  <Card
                    emoji={<SiFreelancer />}
                    heading={"Freelancer"}
                    detail={
                      " usually use in section where we need some random text"
                    }
                    learnMoreInfo={
                      "part 3 :Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident officiis ipsam cupiditate illum laborum atque voluptatibus ut doloremque excepturi quisquam repellendus dolor deserunt totam tempore, laboriosam earum sapiente esse praesentium."
                    }
                    color="rgba(252, 166, 31, 0.45)"
                  />
                </motion.div>
                <div
                  className="blur s-blur2"
                  style={{ background: "rgb(238 210 255);" }}
                ></div>
              </div>
            </div>
          </div>
    </>
  )
}
