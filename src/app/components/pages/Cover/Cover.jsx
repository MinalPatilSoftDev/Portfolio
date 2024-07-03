import React from "react";
import { ArrowDown } from 'react-feather';
import { FaHandPointDown } from "react-icons/fa";

const Cover = ({ title }) => {
  const coverImgStyle = {
    backgroundImage: title === "Thanks" ? `url(assets/C2.png)` : `url(assets/C1.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div className="h-full " style={coverImgStyle}>
      <div className="h-full flex flex-col justify-center items-center page-shadow">
      {title !== "Thanks" && (
        <>
            <span className="text-orange-950 text-2xl  font-bold animate-bounce">Click Here</span>
            <FaHandPointDown className="text-orange-950 text-2xl mr-2 mb-4 animate-bounce"/>
           {/* <ArrowDown className="text-orange-950 text-2xl mr-2 animate-bounce" /> */}
            
        </>
      )}
        <h1 className="text-orange-950 text-5xl ml-8 font-bold ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Cover;
