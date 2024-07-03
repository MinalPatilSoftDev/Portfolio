"use client";
import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Freelancer',
        1500,
        'Tester',
        1500,
        'Designer',
        1500
      ]}
      
      speed={50}
      className='md:text-2xl lg:text-4xl text-cyan-700 font-bold  '
      repeat={Infinity}
    />
  );
};

export default TextEffect