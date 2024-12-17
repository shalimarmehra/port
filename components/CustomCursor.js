import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 w-8 h-8 bg-black rounded-full pointer-events-none transition-transform duration-100 ease-out opacity-50 hidden sm:block`}
      style={{
        transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
      }}
    />
  );
};

export default CustomCursor;
