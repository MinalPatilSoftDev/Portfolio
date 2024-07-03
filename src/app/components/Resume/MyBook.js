"use client"
import { useState,useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page.jsx";

// import coverImg from "../../cover.png"
// import EndImg from "../../../public/assets/last-page.png";
import FirstPage from "../pages/Hero/FirstPage.jsx";
import Skills from "../pages/Skills/Skills.jsx";
import Experience from "../pages/Experience/Experience.jsx";
import Education from "../pages/Education/Education.jsx";
import Projects from "../pages/Projects/Projects.jsx";
import { Introduction } from "../pages/Introduction/Introduction.js";
import Cover from "../pages/Cover/Cover.jsx";


const uipathProjectData = [
  {
    name: "SAP Invoice Processing",
    description: "Enabled SAP automation by leveraging Logon/Login activities, MIRO transaction to enter & post invoices & updating details in the tracker.",
   
  },
  {
    name: "Night Audit Process",
    description: "Implemented RPA for various set of financial accounting processes executed during night by the resorts. Achieved automation for Oracle’s Opera PMS application for client via CV.",
    
  },
  {
    name: "Shipped Transfer Order",
    description: "NetSuite Web Portal based process automated to enable shipments of internal transfer orders. Outlook email notifications were read & processed to execute E2E process",
    
  },
  // {
  //   name: "Corp PTEB Process",
  //   description: "End to end automation of Summary Report generation for various Lodge locations. Extensive use of Excel, Windows folder access, File manipulations activities. Also leveraged CV for SUN system uploads. UI element activities deployed to handle processing.",
    
  // },

];
const fullStackProjectData = [
  {
    name: "Personal Portfolio website",
    technology: "Next JS, Tailwind CSS",
    description: "A personal Portfolio website to showcase all my details and projects at one palce",
    previewLink: "https://travel-tcj.netlify.app/",
  },
  {
    name: "Ecommerce website",
    technology: "React JS, Tailwind CSS",
    description: "Complete Responsive website using React js and Tailwind CSS",
    previewLink: "https://shopsy-tcj.netlify.app/",
  },
];

const ExperienceData1 = [
  {
    company_name: "DWebPixel Techsolutions Pvt. Ltd",
    position: "Full Stack Developer Intern",
    year:"July 2023 - Present",
    description:"Developed an ecommerce website for client with the dashboard for managing the products, managing reviews,users, payment etc.• Integrated the web app with backed services to create new user onboarding application with dynamic from Content."
  },

];

const ExperienceData2 = [
   {
    company_name: "PDB Techsolutions Pvt. Ltd",
    position: "RPA Developer",
    year:"Dec 2020",
    description:"Responsible for Business requirement gathering, Process documentation & design of high-level automation solution flow. • Installation & Configuration UiPath environment on client VMs. Set up of Orchestrator(UiPath) for unattended BOT scheduling. Well versed with Cron based scheduling to achieve complex requirements. • Developed BOTs using RE Framework. • End to end design & development of RPA solution, integrating with various tech components such as SQL databases, ERP solutions(SAP Automations), Cloud SaaS(Salesforce, Opera, FedEx) & MS office applications. PDF document processing & Computer Vision/CV based RPA solution(Invoice Processing) developments."
  },

];

const ExperienceData3 = [
  {
    company_name: "Travios",
    position: "EDP IT",
    year:"Nov 2018 - Dec 2020",
    description:"Responsible for various documentations for IT Dept/Electronic Data Processing Dept. • Worked with EDP manager to manage databases, taking backups and restorations. • Troubleshooting of ERP access issues for employees. • Created excel templates & forms for data gathering & processing"
  },
];

const FullStackSkill=[
{
  name:"HTML",
  percentage:"90%"
},
{
  name:"CSS",
  percentage:"95%"
},
{
  name:"Java Script",
  percentage:"80%"
},
{
  name:"Tailwind CSS",
  percentage:"80%"
},
{
  name:"React JS",
  percentage:"95%"
},
{
  name:"Next JS",
  percentage:"80%"
}
];

const RPAskill=[
  {
    name:"UiPath Tool",
    percentage:"90%"
  },
  {
    name:"SQL Server",
    percentage:"90%"
  },
  {
    name:"Github",
    percentage:"85%"
  },
  {
    name:"SAP Automation",
    percentage:"75%"
  },

  {
    name:"Azure Fundamentals",
    percentage:"70%"
  },
];



function MyBook(props) {

  // const [dimensions, setDimensions] = useState({ width: window.outerHeight, height: window.innerHeight });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setDimensions({ width: window.innerWidth, height: window.innerHeight });
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Check if window is defined (to prevent server-side rendering issues)
    if (typeof window !== 'undefined') {
      // Call updateDimensions initially
      updateDimensions();

      // Event listener for window resize
      window.addEventListener('resize', updateDimensions);

      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateDimensions);
      };
    }
  }, []); // Empty dependency array means effect runs only once after initial render

  return (
    <HTMLFlipBook width={dimensions.width} height={dimensions.height*2}  showCover="true" size="stretch">
      <Page number={1}>
         <Cover  title="My Resume" /> 
      </Page>
      <Page number={2}>
        <FirstPage />
      </Page>
      <Page number={3}>
        <Introduction/>
      </Page>
      <Page number={4}>
        <Education />
      </Page>
      <Page number={5}>
        <Experience ExperienceData={ExperienceData1}/>
      </Page>
      <Page number={6}>
        <Experience ExperienceData={ExperienceData2}/>
      </Page>
      <Page number={7}>
        <Experience ExperienceData={ExperienceData3}/>
      </Page>
      <Page number={8}>
        <Skills skillData={FullStackSkill}/>
      </Page>
      <Page number={9}>
        <Skills skillData={RPAskill}/>
      </Page>
      <Page number={10}>
        <Projects ProjectData={uipathProjectData} pageNumber={10}
        subtitle="Uipath projects" // Set subtitle for page 10
         />
      </Page>
      <Page number={11}>
        <Projects ProjectData={fullStackProjectData} pageNumber={11}
         subtitle="Full Stack developer projects" // Set subtitle for page 11
         />
      </Page>
     
      <Page number={12}>
        <Cover  title="Thanks" />
      </Page>

    </HTMLFlipBook>
  );
}

export default MyBook;
