import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import DropDownItems from "./DropDownNav";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function Navbar() {
  const nav = useNavigate();
  const [overMouse, setOverMouse] = useState(false);
  const [overGames, setOverGames] = useState(false);
  useEffect(() => {
    function resetTop() {
      if (nav) {
        window.scrollTo(0, 0);
      }
    }
    return resetTop();
  }, [nav]);

  return (
    <div className="navbar">
      <h2 className="nav-header" onClick={() => nav("/")}>
        Matthew William Rowley
      </h2>
      <ul className="navlinks">
        <li>
          <button className="navlink" onClick={() => nav("/")}>
            Home
          </button>
        </li>
        {/* <li>
          <button className="navlink" onClick={() => nav("/about")}>
            About
          </button>
        </li> */}
        <li>
          <button
            className="navlink"
            onClick={() => nav("/projects")}
            onMouseEnter={() => setOverMouse(!overMouse)}
            onMouseLeave={() => setOverMouse(false)}
          >
            Projects <span />
            <BsFillArrowDownCircleFill />
            {overMouse == true && (
              <DropDownItems>
                <li className="list-item">
                  <a href="https://amca.onrender.com/">AMCA</a>
                </li>
                <br></br>
                <li className="list-item">
                  <a href="https://rad-frangipane-ab7eaa.netlify.app">
                    Puppy Bowl
                  </a>
                </li>
                <br></br>
                <li className="list-item">
                  <a href="https://vocal-zuccutto-ced39d.netlify.app">
                    Strangers Things
                  </a>
                </li>
                <br></br>
                <li className="list-item">
                  <a href="https://fabulous-klepon-630ec6.netlify.app">
                    First Website
                  </a>
                </li>
              </DropDownItems>
            )}
          </button>
        </li>
        <li>
          <button
            className="navlink"
            onClick={() => nav("/games")}
            onMouseEnter={() => setOverGames(!overGames)}
            onMouseLeave={() => setOverGames(false)}
          >
            Games <span />
            <BsFillArrowDownCircleFill />
            {overGames === true && (
              <DropDownItems>
                <li className="list-item">
                  <a href="https://papaya-praline-b8ce49.netlify.app/">
                    TicTacToe
                  </a>
                </li>
              </DropDownItems>
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}
