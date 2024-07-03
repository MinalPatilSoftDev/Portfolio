import React from 'react'

export const Introduction = () => {
  return (
    
    <div className="h-full ">
      <main className="h-full w-full bg-secondary page-shadow sm:p-10">

              <p className="uppercase mb-4">Hello</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 mb-3">
                I'm Minal
              </p>
              <p className="text-black/75 text-left mb-4">Software Developer</p>
              <p className="text-black/75 text-xl text-justify tracking-tight break-words " >
              UiPath RPA Developer with over 2 years of experience working with multinational clients. Possesses excellent technical knowledge of RPA technologies with exposure to other automation solutions & various business processes, ERP solution automations. Excellent written and verbal communication along with great interpersonal skills.
              </p>
              <a
                className="inline-block primary-btn"
                href="mailto:patil.minal02@gmail.com"
              >
                {" "}
                Hire me
              </a>
        
      </main>
  </div>
  )
}
