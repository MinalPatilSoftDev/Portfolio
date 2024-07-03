
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { IoSend } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { AiOutlineHome } from 'react-icons/ai';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Default ToastContainer styles
import './toastStyles.css' // Custom ToastContainer styles
import useSpanWithAnimation from '../../components/useSpanWithAnimation';  // Import the custom hook
export const Contact = () => {

  const spanRef = useSpanWithAnimation();  // Use the custom hook to get the ref 
  // const [fullname, setFullname] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  
  const [loading, setLoading] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   console.log("Full name: ", fullname);
  //   console.log("Email: ", email);
  //   console.log("Message: ", message);

  //   // const res = await fetch("api/contact", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "Content-type": "application/json",
  //   //   },
  //   //   body: JSON.stringify({
  //   //     fullname,
  //   //     email,
  //   //     message,
  //   //   }),
  //   // });

  //   const { msg, success } = await res.json();
  //   setError(msg);
  //   setSuccess(success);

  //   if (success) {
  //     setFullname("");
  //     setEmail("");
  //     setMessage("");
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();
      setSubmitting(true);
      setLoading(true); // Show loader when submitting

          //   // send email
            const response = await fetch('api/contact-us', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            const { success, error } = await response.json();
      
            if (success) {
              toast.success('Your inquiry has been submitted!');
              //  toast.success('Your inquiry has been submitted!', {position: toast.POSITION.BOTTOM_RIGHT});
              // await sendEmail(formData); // Pass formData to the sendEmail function

                    // reset the form fields after submission
                    setFormData({
                      name: '',
                      email: '',
                      message: ''
                    });

            } else if (error) {
              console.error(error);
              toast.error('Error while submitting your inquiry: ');
            }
        
            setLoading(false); // Hide loader after submission
            setSubmitting(false);
          }
        //   try {
        //     const response = await fetch('api/contact-us', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //       },
        //       body: JSON.stringify(formData)
        //     });
      
        //     if (!response.ok) {
        //       throw new Error('Failed to submit form');
        //     }
      
        //     setFormData({ name: '', email: '', message: '' });
        //     setError('');
        //     setSuccess(true);
        //   } catch (error) {
        //     console.error('Error submitting form:', error);
        //     setError('Error submitting form');
        //   } finally {
        //     setSubmitting(false);
        //   }
        // }
        // bg-[#9CA3AF] 
  return (
  //   <>
  //     <span id="contact"></span>
  //     <div className=" lg:px-20 lg:py-10 h-[94vh] w-full sticky bg-[url('/images/contact-bg.jpg')] bg-no-repeat bg-cover bg-center ">
  //        <div className=' flex justify-start '>
  //           <div className="flex flex-col items-center">
  //             <span className="text-4xl font-bold text-amber-600 uppercase md-[1rem] hover:text-amber-500 grid relative" data-aos="zoom-in"> Contact Me
  //                 <span className='bar' ref={spanRef}>
  //                   <span className='smallbar' ></span>
  //                 </span>
  //             </span>
  //             <h1 className='text-xl pt-2  text-amber-600 ' data-aos="fade-right">Get In Touch</h1>
  //           </div> 
  //       </div>


  //       <div className=" grid grid-cols-2 h-[80%] my-10 items-center relative mx-auto md">
  //         <div>
  //           <div className='text-amber-600 text-3xl flex gap-3 pb-6 items-center'>
  //             <AiOutlineMail />
  //             <span className='text-white text-2xl font-semibold'>Email:</span>
  //           </div>
  //           <span className='text-white text-xl pt-16'>minal.patil02@gmail.com</span>

  //           <div className='text-amber-600 text-3xl flex gap-3 pb-6 items-center pt-16'>
  //             <FaPhone />
  //             <span className='text-white text-2xl font-semibold'>Call US:</span>
  //           </div>
  //           <span className='text-white text-xl pt-16'>+919421440734</span>

  //           <div className='text-amber-600 text-3xl flex gap-3 pb-6 items-center pt-16'>
  //             <AiOutlineHome />
  //             <span className='text-white text-2xl font-semibold'>Address:</span>
  //           </div>
  //           <span className='text-white text-xl pt-16'>Baner, Pune, Maharatshtra, India</span>
  //         </div>
              
  //         {/*Form */}
  //         <div className=' text-black  font-bold  bg-rose-950 opacity-70 lg:py-9 lg:px-12 text-xl rounded-xl'>
  //           <form onSubmit={handleSubmit} className="py-4 mt-4 flex flex-col gap-5">
  //             <div className='flex flex-col gap-4'>
  //               <label htmlFor="fullname" className='text-white' >Name </label>
  //               <input
  //                 className='w-full bg-transparent placeholder-gray-400 text-lg border-b-2 text-white border-slate-200 placeholder:p-2 focus:bg-transparent active:bg-transparent'
  //                 type="text"
  //                 minLength={3}
  //                 maxLength={150}
  //                 placeholder="Enter your name" 
  //                 required
  //                 autoComplete="off"
  //                  id="name"
  //                 name="name"
  //                 value={formData.name}
  //                 onChange={handleInputChange}
                  
  //               />
  //             </div>

  //             <div className='flex  flex-col gap-4 mt-4'>
  //               <label htmlFor="email" className='text-white' >Email </label>
  //               <input
  //                 className='w-full bg-transparent placeholder-gray-400  border-b-2 border-slate-200 placeholder:p-2 text-lg bg-slate-00 text-white'
  //                 type="text"
  //                 id="email"
  //                 name="email"
  //                 autoComplete="off"
  //                 minLength={5}
  //                 maxLength={150}
  //                 required
  //                 placeholder="john@gmail.com"
  //                 value={formData.email}
  //                 onChange={handleInputChange}
  //               />
  //             </div>

  //             <div className='flex flex-col gap-4 mt-4'>
  //               <label htmlFor="message" className='text-white' >Message </label>
  //               <textarea
  //                 className="h-28 bg-transparent placeholder-gray-400 text-lg border-b-2 border-slate-200 w-full placeholder:px-2 text-white"
  //                 id="message"
  //                 name='message'
  //                 placeholder="Type your message here..."
  //                 required
  //                 value={formData.message}
  //                 onChange={handleInputChange}
  //               ></textarea>
  //             </div>

  //             <button className="bg-slate-300 p-3 text-rose-950 font-bold rounded-xl mt-5  " type="submit" disabled={submitting} // Disable button while submitting
  //             >
  //               {submitting ? "Submitting..." : "Send Message"}
  //             </button>
  //             {/* Loader
  //             {loading && <div className="loader ">Loading...</div>} */}
  //           </form>

  //           {/* <div className="bg-slate-100 flex flex-col">
  //             {error &&
  //               error.map((e, index) => (
  //                 <div key={index} className={`${success ? "text-green-800" : "text-red-600"} px-5 py-2`}>
  //                   {e}
  //                 </div>
  //               ))}
  //           </div>  */}


  // {/* Success Message */}
  // {/* {success && (
  //           <div className="bg-green-300 p-2 rounded-md mt-2">Your inquiry has been submitted!</div>
  //         )}

  //         {/* Error Message */}
  //         {/* {error && (
  //           <div className="bg-red-300 p-2 rounded-md mt-2">
  //             {error.map((errorMessage, index) => (
  //               <div key={index} className='bg-red-300 p-2 rounded-md mt-2'>{errorMessage}</div>
  //             ))}
  //           </div>
  //         )} */}
  //           {/* {submitting && (
  //             <div className="bg-blue-300 p-2 rounded-md">Submitting...</div>
  //           )} */}

            

  //           {/* {error && ( 
  //             <div className=" p-2 rounded-md">{error}</div>
  //           )}

  //           {success && (
  //               <div className="bg-green-300 p-2 rounded-md">Your inquiry has been submitted!</div>
  //           )} */} 
  //           <ToastContainer position="bottom-center" className="custom-toast-container" />
  //       </div>
  //       </div>
  //     </div>
  //   </>

  <>
      <span id="contact"></span>
      <div className="lg:px-20 lg:py-10 h-full 3xl:h-[95vh] w-full sticky bg-[url('/images/contact-bg.jpg')] bg-no-repeat bg-cover bg-center ">
        <div className='flex justify-start '>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-zinc-400  uppercase md-[1rem]  grid relative" data-aos="zoom-in"> Contact Me
              <span className='bar' ref={spanRef}>
                <span className='smallbar' ></span>
              </span>
            </span>
            <h1 className='text-xl pt-2  text-zinc-400  ' data-aos="fade-right">Get In Touch</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 h-[80%] my-10 items-center relative mx-auto md:max-w-4xl lg:max-w-6xl xl:max-w-7xl">
          <div className="p-6">
            <div className='text-amber-600 text-3xl flex gap-3 pb-6 items-center'>
              <AiOutlineMail />
              <span className='text-white text-2xl font-semibold'>Email:</span>
            </div>
            <span className='text-white text-xl pt-16'>minal.patil02@gmail.com</span>

            <div className='text-amber-600 text-3xl flex gap-3 pb-6 items-center pt-16'>
              {/* <FaPhone /> */}
              <MdCall />
              <span className='text-white text-2xl font-semibold'>Call US:</span>
            </div>
            <span className='text-white text-xl pt-16'>+919421440734</span>

            <div className='text-amber-600 text-3xl flex gap-3 pb-6 items-center pt-16'>
              <AiOutlineHome />
              <span className='text-white text-2xl font-semibold'>Address:</span>
            </div>
            <span className='text-white text-xl pt-16'>Baner, Pune, Maharashtra, India</span>
          </div>

          <div className='bg-rose-950 opacity-70 py-9 px-12 text-xl rounded-xl  '>
            <form onSubmit={handleSubmit} className="py-4 mt-4 flex flex-col gap-5">
              <div className='flex flex-col  gap-4'>
                <label htmlFor="fullname" className='text-white'>Name</label>
                <input
                  className='w-full bg-transparent focus:outline-none placeholder-gray-400 text-lg border-b-2 text-white border-slate-200 placeholder:p-2 focus:bg-transparent active:bg-transparent'
                  type="text"
                  minLength={3}
                  maxLength={150}
                  placeholder="Enter your name"
                  required
                  autoComplete="off"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className='flex  flex-col gap-4 mt-4'>
                <label htmlFor="email" className='text-white'>Email</label>
                <input
                  className='w-full bg-transparent placeholder-gray-400 focus:outline-none border-b-2 border-slate-200 placeholder:p-2 text-lg bg-slate-00 text-white'
                  type="text"
                  id="email"
                  name="email"
                  autoComplete="off"
                  minLength={5}
                  maxLength={150}
                  required
                  placeholder="john@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className='flex flex-col gap-4 mt-4'>
                <label htmlFor="message" className='text-white'>Message</label>
                <textarea
                  className="h-28 bg-transparent focus:outline-none placeholder-gray-400 text-lg border-b-2 border-slate-200 w-full placeholder:px-2 text-white"
                  id="message"
                  name='message'
                  placeholder="Type your message here..."
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              {/* <button style={{boxShadow:'0 0 30px rgba(236, 72, 153, 1)'}} className=" bg-gradient-to-r from-rose-800 via-rose-950 to-rose-900  text-white p-3 w-[60%]  mx-auto shadow-lg font-bold rounded-full mt-5 hover:text-white hover:bg-rose-900 hover:shadow-slate-300 hover:shadow-lg hover:scale-110 transition duration-300 shadow-colr" type="submit">
                Send Message
              </button> */}

              <a href="#_" class="p-3 w-[60%] bg-gradient-to-r from-rose-800 via-rose-950 to-rose-900 mx-auto relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out  rounded-full shadow-sm group shadow-rose-300 hover-shadow" >
              <span class="absolute inset-0 flex items-center justify-center  text-2xl text-white duration-300 -translate-x-full bg-gradient-to-r from-rose-950 via-rose-900 to-rose-800 group-hover:translate-x-0 ease" >
                   <IoSend />
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Send Message</span>
              <span class="relative invisible">Send Message</span>
              </a>
            </form>

            <ToastContainer position="bottom-center" className="custom-toast-container" />
          </div>
        </div>
      </div>
    </>


  )
}
