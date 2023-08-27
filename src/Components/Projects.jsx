export default function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-header">Projects</h1>
      <ul className="projects-list">
        <li>
          <h3>This is my Capstone Project</h3>
          <a href="https://amca.onrender.com/">
            <img className="projects-images" src="/Images/ACMA.png" />
          </a>
        </li>
        <li>
          <h3>This is Puppy Bowl!</h3>
          <a href="https://rad-frangipane-ab7eaa.netlify.app">
            <img className="projects-images" src="Images/puppyBowl.png" />
          </a>
        </li>
        <li>
          <h3>This is Strangers Things</h3>
          <a href="https://vocal-zuccutto-ced39d.netlify.app">
            <img className="projects-images" src="Images/strangersThings.png" />
          </a>
        </li>
        <li>
          <h3>This is my first Personal Website</h3>
          <a href="https://fabulous-klepon-630ec6.netlify.app">
            <img className="projects-images" src="Images/1st-website.png" />
          </a>
        </li>
      </ul>
    </div>
  );
}
