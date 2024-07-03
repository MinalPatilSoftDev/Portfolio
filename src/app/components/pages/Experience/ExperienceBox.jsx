import React from "react";



const ExperienceBox = ({ ExperienceData }) => {
  return (
   
    <div className="h-full px-4">
    <div className="3xl:mt-8">
      {ExperienceData.map((Experience, index) => (
        <div key={index}>
          <ul className="list-disc mb-1 text-rose-700">
            <li>
              <div className="flex justify-between ">
                <h3 className="text-xl 3xl:text-3xl font-bold">{Experience.company_name}</h3>
                <p className="text-sm 3xl:text-lg font-semibold text-white items-center bg-rose-700 px-3 py-1 rounded-full">{Experience.year}</p>
              </div>
            </li>
          </ul>
          <p className="text-lg 3xl:text-2xl mb-2 font-semibold">{Experience.position}</p>
          <ul className="list-square text-lg 3xl:text-2xl leading-7 ml-3 text-justify tracking-normal hyphens-auto 3xl:leading-9">
            {Experience.description.split("•").map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  </div>
  );
};

export default ExperienceBox;
