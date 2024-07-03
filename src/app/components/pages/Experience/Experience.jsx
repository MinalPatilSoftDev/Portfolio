import React from "react";
import Heading from "../../HelperComp/Heading.jsx";
import ExperienceBox from "./ExperienceBox.jsx";

const Experience = ({ExperienceData}) => {
  return (
    <div className="h-full page-shadow bg-white px-10 py-8">
      {/* heading */}
     
         <div className="relative ">
              <div className="text-center text-6xl xl:text-7xl font-bold text-black/5 ">
                EXPERIENCE
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-2xl">
                <Heading title="Experience"  />
              </div>
          </div>
      {/* Experience */}
      <div>
        <ExperienceBox ExperienceData={ExperienceData}/>
      </div>
    </div>
  );
};

export default Experience;
