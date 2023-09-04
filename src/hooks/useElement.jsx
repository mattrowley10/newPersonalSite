import { useState, useRef, useEffect } from "react";

const useElement = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  const callBackFunction = (entries) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunction, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);
  return [ref, isIntersecting];
};

export default useElement;
