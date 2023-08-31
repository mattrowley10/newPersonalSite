import { SliderData } from "../Library/SliderData";
import { Imageslider } from "./Imageslider";

export default function Home() {
  return (
    <div className="home">
      <figure className="figure">
        <h1 className="home-header">Portfolio</h1>
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
      <div className="about">
        {/* <h1 className="about-header">About Me</h1> */}
        <p className="about-body">
          {/* It is essential to believe that we are built for a higher purpose, no
        matter what. If not, then why be here? It was established thousands of
        years ago much more so than it is now. Our king, our gods led us to
        fight for what is right in the world and we would follow until our very
        deaths, attempting to achieve that purpose. Some do, some do not. Some
        die before they are able to, some live wondering if they can. The
        reality is that, with a higher purpose, we are destined for greatness
        whether or not we achieve what we saw in our own design. We live because
        that higher purpose demands it. */}
        </p>
        <p className="about-body">
          {/* One higher purpose that keeps me living is my dog. His name is Otis.
        When I went to pick him up from the lonely farmstead in northern
        Colorado, the gentleman who was selling the puppies, equipped with a
        thick southern accent, told me that Otis was an American Bulldog. Otis
        was one of two brindle pups in the litter, looking like tigers. The
        others were all white with 1 or 2 brown spots. The years began to pile
        on and more and more my dog started to look like a boxer. I called the
        gentleman one day, just to wonder with him whether my dog was an
        American Bulldog and he told me conclusively that he was. 8 years later
        and I still have a boxer. I wouldn’t return him or the world. (I can’t
        return him) */}
        </p>
        <p className="about-body">
          {/* Another purpose that extends far beyond myself is my connection to
        plants and how they heal, holistically. This path has been in the making
        for over 5 years now, and continues to take precedence in my world.
        Healing with the medicines of the Earth teaches us about the Earth and
        also about ourselves. We begin to understand that our connectedness with
        nature is a great healer, one that does not discriminate or over
        prescribe, one that does not diagnose symptomatically nor make hundreds
        of thousands of dollars a year. The Earth requires nothing but a song, a
        piece of hair, a laugh to indulge her and there she creates that which
        can provide healing. This purpose guides me to teach others about this
        and how to care for themselves and their family. */}
        </p>
        <p className="about-body">
          {/* The last purpose I will speak of here is that of spiritual connection.
        Some would say that we are all born with this distinct quality. Others
        may argue that it comes externally and only with good, honest prayer.
        These are matters I am unable to speak on. More than that, I would
        rather not speak on. Because what is the power of the unknown if it were
        known? We pray with faith that we might find out what transpires on the
        other side of the bridge, only to find that the bridge leads to all of
        those places we can imagine and many more. This is the bridge within us.
        Prayer, meditation, and community are given their space and time within
        my life, for awe and wonder of the great unknown sparks within me
        imagination beyond ego and intelligence. */}
        </p>
      </div>
    </div>
  );
}
