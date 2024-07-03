"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-sine',
      duration: 1000,
      delay:20,
      once:false,
    });
    return () => {
      AOS.refresh();
    };
    
  }, [])

  return null
}

