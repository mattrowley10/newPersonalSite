/* eslint-disable react/prop-types */

export function DropDownNav() {
  return (
    <DropDownItems>
      <li className="list-item">
        <a href="https://amca.onrender.com/">AMCA</a>
      </li>
      <br></br>
      <li className="list-item">
        <a href="https://rad-frangipane-ab7eaa.netlify.app">Puppy Bowl</a>
      </li>
      <br></br>
      <li className="list-item">
        <a href="https://vocal-zuccutto-ced39d.netlify.app">Strangers Things</a>
      </li>
      <br></br>
    </DropDownItems>
  );
}

export default function DropDownItems(props) {
  return (
    <div className="dropDown">
      <ul className="dropDown-list">
        <li>{props.children}</li>
      </ul>
    </div>
  );
}
