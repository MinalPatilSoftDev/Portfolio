import React from "react";
import Heading from "../../HelperComp/Heading";


const EducationData = [
  {
    degree: "Bachelor of Engineering in Computer Sciences",
    univercityName:"North Maharastra University ",
    year: "2011",
    bgColor: "bg-blue-500/70",
  },
  {
    degree: "Higher Secondary Education",
    univercityName:"Maharashtra State Board, Pune",
    year: "2005",
    bgColor: "bg-orange-500/70",
  },
  {
    degree: "Secondary School Education",
    univercityName:"Maharashtra State Board, Pune",
    year: "2003",
    bgColor: "bg-fuchsia-500/70",
  },
]


const Education = () => {
  return (
    <div className="h-full">
    <main className="h-full w-full bg-secondary page-shadow px-10 py-8  ">
        <div className="relative ">
            <h1 className="text-center text-6xl xl:text-7xl font-bold text-black/5 ">
              EDUCATION
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-3xl">
               <Heading title="Education"  />
            </div>
        </div>

        <div className="flex flex-col h-[90%] w-full items-center justify-center  md:gap-6  3xl:gap-12 ">
          {EducationData.map(({ degree, univercityName, year, bgColor }) => (
            <div key={degree} className={`p-6 ${bgColor} min-w-full  rounded-xl `}>
              <ul className="list-disc pl-5 text-xl 3xl:text-2xl ">
                <li className="font-bold text-white">{degree}</li>
              </ul>
               <div className="flex flex-col md:flex-row justify-between pt-2 pl-8">
                 <h1 className="text-lg 3xl:text-2xl text-white">{univercityName}</h1>
                 <h1 className="text-base 3xl:text-xl text-white bg-yellow-700 items-end px-2 py-1 rounded-full">{year}</h1>
              </div>  
            </div>
          ))}
        </div>
    </main>
</div>

    
  );
};

export default Education;
