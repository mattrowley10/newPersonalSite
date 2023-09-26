import { SliderData } from "../Library/SliderData";
import { Imageslider } from "./Imageslider";
import useElement from "../hooks/useElement";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
// import { motion } from "framer-motion";

export default function Home() {
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, {
    threshold: 1,
    margin: "-200px",
  });
  console.log(isInView);
  const [ref, isIntersecting] = useElement({
    root: null,
    rootMargin: "12px",
    threshold: 0.55,
  });
  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add("slide-in");
    } else {
      ref.current.classList.remove("slide-in");
    }
  }, [ref, isIntersecting]);

  useEffect(() => {
    if (isInView) {
      mainRef.current.classList.add("active");
    } else {
      mainRef.current.classList.remove("active");
    }
  }, [mainRef, isInView]);
  return (
    <main>
      <figure className="figure">
        <h1 className="home-header">Matthew William Rowley</h1>
        <Imageslider slides={SliderData} />
      </figure>
      <div className="under-slide" ref={mainRef}>
        <h2
          className="usHeader"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "1s ease-in",
          }}
        >
          Developer
        </h2>
        <h2
          className="usHeader"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "1s ease-in",
          }}
        >
          Herbalist
        </h2>
        <h2
          className="usHeader"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "1s ease-in",
          }}
        >
          Musician
        </h2>

        <p
          className="home-body"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "1s ease-in",
          }}
        >
          Software development holds a bright future for itself, and for me as
          well. The ability to speak to a machine in multiple languages peaks my
          interest beyond words. As humans as a whole begin to move into the
          great realm of technology, speaking with machines is going to be a
          necessary tool. Placing myself at the line of creativity and the
          limits of arithmetic, I traverse the academia that is software
          engineering making this my full time career and part time creative
          outlet.
        </p>
        <p
          className="home-body"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "1s ease-in",
          }}
        >
          Herbalism is my great grounding back to the Earth. A tool that marries
          me to the plants that give us life and heal us completely, and the
          Earth who offers us sanctuary in space. It will always be a priority
          of mine to give back to the planet and heal those around me through
          plant medicine.
        </p>
        <p
          className="home-body"
          style={{
            transform: isInView ? "none" : "translateX(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "1s ease-in",
          }}
        >
          Playing music is one of my great creative outlets. I learned to play
          the drums in high school as well as the acoustic guitar. I have been
          playing different instruments and attuning my ear since. Be it
          ableton, recording in general, or just messing around with the
          instruments I love, music continues to be a great teacher and outlet.
        </p>
      </div>
      <h1 className="about-header">About Me</h1>
      <div className="about">
        <p className="about-body">
          Herbalist turned Web Developer with an earnest desire to help the
          world and continue learning as much as possible during the process. In
          my free time you might find me making tea and meditating, playing
          video games, or wrestling (and/or cuddling) with my dog. Since delving
          into the world of code, that is where I find myself any other time.
          And for such a simple life, I am grateful.
        </p>
        <img className="about-image" src="Images/mattPic1.jpg" ref={ref} />
      </div>
    </main>
  );
}
