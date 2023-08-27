/* eslint-disable react/prop-types */
import { SliderData } from "../Library/sliderdata";
import { useState, useEffect } from "react";

export const Imageslider = ({ slides }) => {
  const [pic, setPic] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timeout = setTimeout(() => setPic((pic + 1 + length) % length), 4500);
    return () => clearTimeout(timeout);
  }, [pic, length]);

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <figure className="slider">
      {SliderData.map((slide, id) => {
        return (
          <div className={id === pic ? "slide active" : "slide"} key={id}>
            {id === pic && (
              <img src={slide.image} key={id} alt="mattpix" className="image" />
            )}
          </div>
        );
      })}
    </figure>
  );
};
