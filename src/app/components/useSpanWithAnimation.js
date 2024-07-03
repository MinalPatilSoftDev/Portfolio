import { useEffect, useRef } from 'react';

const useSpanWithAnimation = () => {
  const spanRef = useRef(null);

  useEffect(() => {
    const updateSpanWidth = () => {
      const parentElement = spanRef.current.parentNode;
      const fontSize = parseInt(window.getComputedStyle(parentElement).fontSize);
      const textContent = parentElement.textContent.trim();

      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.fontSize = `${fontSize}px`;
      tempSpan.textContent = textContent.toUpperCase(); // Convert text content to uppercase
      document.body.appendChild(tempSpan);

      const textContentWidth = tempSpan.offsetWidth;

      document.body.removeChild(tempSpan);

      spanRef.current.style.width = `${textContentWidth}px`;
    };

    updateSpanWidth();
    window.addEventListener('resize', updateSpanWidth);

    return () => {
      window.removeEventListener('resize', updateSpanWidth);
    };
  }, []);

  return spanRef;
};

export default useSpanWithAnimation;
