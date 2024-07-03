 "use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Home/Hero"; 
import { About } from "./components/About/About";
import { Services } from "./components/Service/Services";
import { Skill } from "./components/Skill/Skill";
import { Projects } from "./components/Project/Projects";
import { Contact } from "./components/Contact/Contact";
import { Resume } from './components/Resume/Resume';
import Sidebar from './components/Sidebar/Sidebar';


const Page = () => {
  const [inactive, setInactive] = useState(false);
  const router = useRouter();

  return (
    <>
         <Navbar />
         <Sidebar router={router}
            onCollapse={(inactive) => {
              setInactive(inactive);
            }}
          /> 

          <main className={` ${inactive ? "pl-14  " : "pl-[300px] duration-500 delay-200 "} `} >
              <Hero/>
              <About  /> 
              <Resume/>
              <Services />
              <Skill />
              <Projects />
              <Contact />
          </main>
    
    </>
  );
};

export default Page;
