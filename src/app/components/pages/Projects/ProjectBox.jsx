import React from "react";

const ProjectBox = ({ ProjectData,pageNumber }) => {

  return (
    <div>
        {ProjectData.map((project, index) => {
          return (
            <div key={index} className="pt-3 px-5 3xl:pt-8 " >

                 {/* details section */}
              
                  <ul className="list-disc  text-rose-700">
                    <li>
                        <h1 className="text-xl 3xl:text-2xl font-semibold">{project.name} :</h1>
                    </li>
                  </ul>
                  
                     {/* Technology used */}
                    {(pageNumber === 10 || pageNumber === 11) && project.technology && (
                      <div className="pt-1 flex items-center">
                        <h1 className="text-lg 3xl:text-xl font-semibold">Technology used:</h1>
                        <p className="text-lg 3xl:text-xl  text-gray-500 pl-3"> {project.technology}</p>
                      </div>
                    )}

                    <p className="text-lg 3xl:text-xl  pt-1  text-gray-800 text-justify tracking-normal hyphens-auto">
                      {project.description} 
                    </p>

            </div>
          );
        })}
    </div>
  );
};

export default ProjectBox;
