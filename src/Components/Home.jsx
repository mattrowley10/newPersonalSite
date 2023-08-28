import { SliderData } from "../Library/SliderData";
import { Imageslider } from "./Imageslider";

export default function Home() {
  return (
    <div className="home">
      <figure className="figure">
        <h1 className="home-header">Welcome Home</h1>
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
    </div>
  );
}
