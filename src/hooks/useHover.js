import { useState, useEffect, useRef } from 'react';

function useHover() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }

  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener('mouseenter', enter);
      ref.current.addEventListener('mouseleave', leave);
    } else {
      return () => {
        ref.current.removeEventListener('mouseenter', enter);
        ref.current.removeEventListener('mouseleave', leave);
      };
    }
    return ref.current;
  }, []);

  return [hovered, ref];
}

export default useHover;
