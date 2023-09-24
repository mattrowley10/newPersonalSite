import { SliderData } from "../Library/SliderData";
import { Imageslider } from "./Imageslider";
import useElement from "../hooks/useElement";
import { useEffect } from "react";

export default function Home() {
  const [ref, isIntersecting] = useElement({
    root: null,
    rootMargin: "12px",
    threshold: 0.75,
  });
  useEffect(() => {
    if (isIntersecting) {
      console.log(true);
      ref.current.classList.add("slide-in");
    } else {
      ref.current.classList.remove("slide-in");
    }
  }, [ref, isIntersecting]);

  return (
    <main className="home">
      <figure className="figure">
        <h1 className="home-header">Welcome to my Portfolio</h1>
        <Imageslider slides={SliderData} />
      </figure>
      <div className="under-slide">
        <h2 className="usHeader">Developer</h2>
        <h2 className="usHeader">Herbalist</h2>
        <h2 className="usHeader">Musician</h2>

        <p className="home-body">
          Software development holds a bright future for itself, and for me as
          well. The ability to speak to a machine in multiple languages peaks my
          interest beyond words. As humans as a whole begin to move into the
          great realm of technology, speaking with machines is going to be a
          necessary tool. Placing myself at the line of creativity and the
          limits of arithmetic, I traverse the academia that is software
          engineering making this my full time career and part time creative
          outlet.
        </p>
        <p className="home-body">
          Herbalism is my great grounding back to the Earth. A tool that marries
          me to the plants that give us life and heal us completely, and the
          Earth who offers us sanctuary in space. It will always be a priority
          of mine to give back to the planet and heal those around me through
          plant medicine.
        </p>
        <p className="home-body">
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
