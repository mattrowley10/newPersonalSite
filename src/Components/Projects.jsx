/* eslint-disable react/no-unescaped-entities */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-header">Projects</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
        >
          <h3>This is my Capstone Project</h3>
          <a href="https://amca.onrender.com/">
            <img className="projects-images" src="/Images/ACMA.png" />
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
        >
          <h3>This is Puppy Bowl!</h3>
          <a href="https://rad-frangipane-ab7eaa.netlify.app">
            <img className="projects-images" src="Images/puppyBowl.png" />
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
        >
          <h3>This is Stranger's Things</h3>
          <a href="https://vocal-zuccutto-ced39d.netlify.app">
            <img className="projects-images" src="Images/strangersThings.png" />
          </a>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "black", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
        >
          <h3>This is my first Personal Website</h3>
          <a href="https://fabulous-klepon-630ec6.netlify.app">
            <img className="projects-images" src="Images/1st-website.png" />
          </a>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
