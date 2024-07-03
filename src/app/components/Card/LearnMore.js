import React, { useEffect } from 'react'

export const LearnMore = ({ showModal, setShowModal,learnMoreInfo,heading}) => {
 
  
  useEffect(() => {
    const body = document.querySelector('body');
    if (showModal) {
      // Disable scrolling of the body when modal is open
      body.style.overflow = 'hidden';
    } else {
      // Enable scrolling of the body when modal is closed
      body.style.overflow = 'auto';
    }

    // Cleanup function to reset overflow property when component unmounts
    return () => {
      body.style.overflow = 'auto';
    };
  }, [showModal]); // background content cannot be scrolled while the modal is open.


 if (!showModal) return null;

return (
 
    <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center bg-gray-700 bg-opacity-50 transition duration-500 ease-in-out">
      <div className="w-11/12 lg:w-full max-w-xl bg-white flex flex-col relative self-center shadow-2xl rounded-md">
        <div className="px-5 pt-4 pb-3 border-b-4 border-gray-200 text-lg font-bold text-indigo-400">{heading}</div>
        <div className="p-5 text-black">
        {learnMoreInfo}
        </div>
        <div className=" p-3 flex justify-end">
          <button
            onClick={() => setShowModal(false)}
            className="bg-green-400 hover:bg-green-500 focus:outline-none px-4 py-2 rounded-md text-white transition duration-500 ease-in-out"
          >
            Close 
          </button>
        </div>
      </div>
    </div>

); 
}


// import React, { useState, useEffect } from 'react';

// const LearnMore = ({ showModal, setShowModal }) => {
//   const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

//   useEffect(() => {
//     const updateModalPosition = () => {
//       const windowHeight = window.innerHeight;
//       const windowWidth = window.innerWidth;
//       const modalWidth = 400; // Set your modal width here
//       const modalHeight = 300; // Set your modal height here

//       const top = (windowHeight - modalHeight) / 2;
//       const left = (windowWidth - modalWidth) / 2;

//       setModalPosition({ top, left });
//     };

//     if (showModal) {
//       updateModalPosition();
//     }
//   }, [showModal]);

//   return (
//     <>
//       {showModal && (
//         <div
//           className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50"
//           onClick={() => setShowModal(false)} // Close modal when clicking outside
//         >
//           <div
//             className="bg-white p-6 rounded-lg"
//             style={{ top: `${modalPosition.top}px`, left: `${modalPosition.left}px` }}
//             onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
//           >
//             <h2>Modal Content</h2>
//             <p>This is the content of the modal.</p>
//             <button onClick={() => setShowModal(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

export default LearnMore;
