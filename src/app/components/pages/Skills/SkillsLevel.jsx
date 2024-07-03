import React from "react";
// Import react-circular-progressbar module and styles
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillsLevel = ({ skillData }) => {
  return (
   
    <div className="h-full px-4">
    <div className=" grid grid-cols-2 gap-4 3xl:gap-10 p-4 3x">
      {skillData.map((skill, index) => (
          
      <div key={index} className="flex flex-col items-center ">
           <div  className="circular-progressbar-container">            
               <CircularProgressbar
                    value={parseInt(skill.percentage)}
                    text={`${skill.percentage}`}
                    strokeWidth={8}
                    styles={{
                              path: {
                                stroke: "#14B8A6", // -600 color
                              },
                              text: {
                                fill: "#000",
                                fontSize: "16px",
                              },
                            }}
                />  
            </div>
            <p className="font-bold text-xl 3xl:text-2xl pt-2 ">{skill.name}   </p>    
        </div>
      ))}
    </div>
  </div>





  );
};

export default SkillsLevel;
