import logo from "/logo.svg";
import "./navBarStyles.css";
// import HomePage from "../HomePage";
// import DestinationPage from "../../DestionationPage/DestinationPage";
// import CrewPage from "../../CrewPage/CrewPage";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const navData = [
  {
    link: "/",
    number: "00",
    name: "HOME",
  },
  {
    link: "/destination",
    number: "01",
    name: "DESTINATION",
  },
  {
    link: "/crew",
    number: "02",
    name: "CREW",
  },
  {
    link: "/tehnology",
    number: "03",
    name: "TECHNOLOGY",
  },
];

function NavBar() {
  const [clicked, setClicked] = useState(null);
  const [active, setActive] = useState(false);

  const navResponse = () => {
    setActive(!active);
  };

  const handleClick = (name) => {
    setClicked(name);
  };

  return (
    <div className="navBarContainer">
      <img className="logo" src={logo} alt="navBarLogo" />
      <div className="line"></div>
      <nav>
        <ul
          className={active === true ? "btnContainer-Active" : "btnContainer"}
        >
          <button onClick={navResponse} className="homeMenuBtnClose">
            <FaTimes />
          </button>
          {navData.map((element, index) => {
            return (
              <li
                key={index}
                onClick={() => handleClick(element.name)}
                className={
                  clicked === element.name ? "navBarSelected" : "navBarBtn"
                }
              >
                <Link to={element.link}>
                  <span className="navNumbers">{element.number}</span>{" "}
                  {element.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={navResponse}
          className={
            active === true ? "homeMenuBars-notActive" : "homeMenuBars"
          }
        >
          <FaBars />
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
