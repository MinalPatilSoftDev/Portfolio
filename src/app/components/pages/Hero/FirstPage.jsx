import React from "react";
import Image from 'next/image';
// import personImg from "/assets/person2.png";

const FirstPage = () => {
  return (
    <div className="h-full">
      <main className="h-full w-full bg-secondary page-shadow flex justify-center items-center">
        <div className="p-10 flex justify-center items-center">
          {/* image-container */}
            {/* <img src={'/assets/M.jpg'}  className="sm:w-[500px] sm:h-[520px]  mx-auto" />      */}
            <div className=" dp_img max-w-full  ">
                <Image src="/assets/M.jpg"  width={450} height={500} layout="responsive" className="responsive-image" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FirstPage;
