//card.js
import React,{useState} from "react";
import "./Card.css";
import { LearnMore } from "./LearnMore";

const Card = ({emoji, heading, detail, color, learnMoreInfo}) => {


  const [showModal, setShowModal] = useState(false);
  // const [isHovering, setIsHovering] = useState(false);

  return (
     
    <>
      <div className=" card w-72 h-64 px-3 py-2 text-white  flex flex-col items-center justify-center  transform hover:scale-110 " style={{borderColor: {color}}}> 
         <div className="text-5xl">{emoji}</div>
         <span>{heading}</span>
         <span>{detail}</span>
         <button onClick={() => setShowModal(!showModal)}  className="c-button">LEARN MORE</button>
         {/* <button  onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} className="c-button">LEARN MORE
         {isHovering && 
         <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-700 bg-opacity-50 transition duration-500 ease-in-out">
            <div className="w-11/12 lg:w-full max-w-xl bg-white flex flex-col relative self-center shadow-2xl rounded-md">
                <div className="p-6 border-b-4 border-gray-200 text-lg font-bold text-indigo-400">{heading}</div>
                <div className="p-6 text-black">{learnMoreInfo}</div>
            </div>
          </div>}
         </button> */}
      </div>   

      <LearnMore showModal={showModal} setShowModal={setShowModal}   learnMoreInfo={learnMoreInfo}  heading={heading} />
    </>
  );

};

export default Card;