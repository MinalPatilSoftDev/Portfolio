/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'Laptop L':'1440px',
        '3xl': '1920px', // Customize the breakpoint for 3xl screens
        '4k': '2560px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#f98e2b",
        secondary: "#f3f3f3",
        'custom-color': 'rgb(231, 240, 248)',
        'light-primary-blue':"#c3d3f5",
        'banner-color':'hsl(192, 100%, 9%)',
        'cyan-700': '#059669',
      },
      letterSpacing: {
        'normal': '0', // Set normal word spacing
      },
    },
  },
  variants: {},
  plugins: [
   
  ],
};
