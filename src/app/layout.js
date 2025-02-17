
import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   AOS.init(); // Initialize AOS
  //   AOS.refresh(); 
  // }, []); // Ensure this effect runs only once

  return (
    <html lang="en">
       
      <body className={inter.className}>
      <AOSInit />
        {children}</body>
    </html>
  );
}

