 "use client";
import React,{useState,useEffect,useRef} from 'react'
import { useRouter } from 'next/router'; 
import MenuIcon from "@mui/icons-material/Menu";
import Link from 'next/link';
import './sidebar.css'
import { Menu, SocialMenu } from '../../Data/SidebarData';


// const Menu=[
//   {
//     id: 1,
//     name: "Home",
//     link: "/#home",
//     icon:"bx bxs-home",
//     sectionId: "home"
//   },
//   {
//     id: 2,
//     name: "About",
//     link: "/#about",
//     icon:"bx bx-user custom-icon",
//     sectionId: "about"
//   },
//   {
//     id: 3,
//     name: "Resume",
//     link: "/#resume",
//     icon:"bx bx-file-blank",
//     sectionId: "resume"
//   },
//   {
//     id: 4,
//     name: "Services",
//     link: "/#services",
//     icon:"bx bx-server",
//     sectionId: "service"
//   },
//   {
//     id: 5,
//     name: "Skill",
//     link: "/#skill",
//     icon:"bx bx-objects-horizontal-left",
//     sectionId: "skill"
//   },
//   {
//     id: 6,
//     name: "My Work",
//     link: "/#projects",
//     icon:"bx bx-book-content",
//     sectionId: "projects"
//   },
//   {
//     id: 7,
//     name: "Contact",
//     link: "/#contact",
//     icon:"bx bx-mobile",
//     sectionId: "contact"
//   },
// ];


// const SocialMenu=[
//   {
//     id: 1,
//     name: "Home",
//     icon:"bx bxl-github",
//     link:"https://github.com/MinalPatilRPA/Next-JS"
//   },
//   {
//     id: 2,
//     name: "Home",
//     icon:"bx bxl-twitter",
//     link:"https://twitter.com/@minalpatil35083"
//   },
//   {
//     id: 3,
//     name: "Home",
//     icon:"bx bxl-instagram",
//   },
//   {
//     id: 4,
//     name: "Home",
//     icon:"bx bxl-skype",
//   },
//   {
//     id: 5,
//     name: "Home",
//     icon:"bx bxl-linkedin",
//     link:"https://www.linkedin.com/in/minal-patil-15486021/"
//   },
// ];


 const Sidebar = (props,router) => {

  const activeLink = 'hover:bg-red-500 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-red-500';
  const [open, setOpen] = useState(true);

  // const router = useRouter();

  useEffect(()=>{
    props.onCollapse(!open);
  }, [open]);

  // const [sidebarWidth, setSidebarWidth] = useState(300); // Initialize with 300px width
  const [sidebarWidth, setSidebarWidth] = useState(window.innerWidth > 768 ? 300 : 60);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setOpen(false); // Close sidebar automatically when screen size is 768px or smaller
        setSidebarWidth(60); // Set sidebar width to 60px
      } else {
        setSidebarWidth(open ? 300 : 60); // Set sidebar width based on open state
      }
    }

     // Initial call to handleResize to set sidebar width correctly when the component mounts
  handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 50; // Update this value with your header's height
      const sectionTop = section.offsetTop - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });   
     
    }
  };

  // const toggle = () => setOpen(!open);

  const toggle = () => {
    setOpen(!open);
    setSidebarWidth(open ? 60 : 300); // Toggle sidebar width between 60px and 300px
  };
  
   

  return (
  <> 
       <div style={{ width: `${sidebarWidth}px` }} className={`sidebar transition-all ease-in-out duration-300 `}>
          <div className="sidebar-container ">

              {/* Icon */}
              <div style={{ alignSelf: open ? 'inherit' : 'center' }}
                className="menu-icon"
                onClick={toggle}>
                <MenuIcon />
              </div>

        
                {/* DP and Name */}
                <div className="profile" >
                    {open && (
                        <> 
                          <img src="./images/u1.jpg" alt="profile image" />
                        </>
                    )} 


                    {/* Social links */}
                    <div  className='Social'>
                      {open && ( 
                        <>
                            {SocialMenu.map((data,index)=>(
                                <a href={data.link} key={index} target="_blank" rel="noopener noreferrer">
                                    <i className={`Social-icon ${data.icon}` }></i>
                                </a>
                            ))}
                        </>
                        ) }
                    </div> 
                </div>


                {/* Menu Items */}
                {/* <div className="menu ">
                  <div  style={{ pointerEvents:"inherit"}} >    
                        {Menu.map((data,index)=>(
                          <div onClick={() => handleScrollToSection(data.sectionId)} key={index} 
                          // style={{ padding: open ? '0' : '0.75rem'}} 
                          className={`flex items-center justify-start mt-5 text-xl font-semibold  ${open ? 'hover:bg-gray-700 hover:text-white hover:rounded-full hover:items-center hover:transition hover:duration-500 hover:ease-in-out ' 
                          : ' hover:cursor-pointer hover:bg-gray-700 hover:rounded-full hover:p-3 hover:items-center hover:w-12 hover:h-12 '}`}>
                              <div >
                                <i  style={{ alignSelf: open ? 'inherit' : 'center' }} 
                                className={`pr-3 ${data.icon}` }></i>
                              </div>
                              {open &&  <p >{data.name}</p>}
                          </div>
                        ))}                        
                  </div> 
                </div> */}

                
                {/* <div
                  className="menu"
                  style={{
                    display: open ? '' : 'grid',
                    alignItems: open ? '' : 'center', // Center vertically
                    height: open ? '' : '70vh'
                  }}
                ></div> */}
                {/* or */}

                <div className={`menu  ${open ? '' : 'lg:grid'} 
                                       ${open ? '' : 'lg:items-center'} 
                                       ${open ? 'lg:h-screen lg:overflow-y-auto lg:max-h-[50%]' : 'lg:h-screen  lg:overflow-y-auto lg:max-h-[66vh]'}
                               `}>
                  <div  style={{ pointerEvents:"inherit"}} >    
                        {Menu.map((data,index)=>(
                          <div onClick={() => handleScrollToSection(data.sectionId)} key={index} 
                          className={`menu-item  ${open ? 'open-hover': ' close-hover'}  `} 
                          style={{
                            marginTop:open ?'20px': '40px',
                            justifyContent:open ?'justify-start': 'justify-center'
                          }}
                          >                 
                                  <div style={{ alignSelf: open ? 'inherit' : 'center', paddingRight: open ? '0.75rem' :''}}>
                                    <i className={`${data.icon} `}></i>
                                  </div>
                                  {open && <p>{data.name}</p>}
 
                          </div>
                        ))}                        
                  </div> 
                </div> 

          
          </div>
      </div>
  </>
  )
}

export  default Sidebar;

