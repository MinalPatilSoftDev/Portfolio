import React from "react";
import ProjectBox from "./ProjectBox.jsx";
import Heading from "../../HelperComp/Heading.jsx";


const Projects = ({ ProjectData,subtitle,pageNumber }) => {
  return (
    <div className="h-full page-shadow bg-white px-10 py-8">
      {/* heading */}
     

        <div className="relative ">
              <div className="text-center text-6xl xl:text-7xl font-bold text-black/5 ">
               PROJECTS
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-3xl text-center">
                  <Heading
                    title="Projects"
                      // subtitle={subtitle}   // Add subtitle prop
                  />
                    <h1 className="text-base text-center text-gray-400  whitespace-nowrap">{subtitle}</h1>
              </div>
          </div>

      {/* Project section  */}
      <div>
        <ProjectBox ProjectData={ProjectData} pageNumber={pageNumber}/>
      </div>
    </div>
  );
};

export default Projects;
