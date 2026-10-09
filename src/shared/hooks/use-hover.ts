import { useEffect, useRef, useState } from 'react';

export const useHover = <T extends HTMLElement>() => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    node.addEventListener('mouseenter', enter);
    node.addEventListener('mouseleave', leave);

    return () => {
      node.removeEventListener('mouseenter', enter);
      node.removeEventListener('mouseleave', leave);
    };
  }, []);

  return [hovered, ref] as const;
};
