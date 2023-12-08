import "./DataContainer.css";
import { useState } from "react";

const technologyData = [
  {
    src: "./assets/technology/image-launch-vehicle-portrait.jpg",
    number: "1",
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    src: "./assets/technology/image-spaceport-portrait.jpg",
    number: "2",
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
  },
  {
    src: "./assets/technology/image-space-capsule-portrait.jpg",
    number: "3",
    name: "SACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

export default function TechonologyContainer() {
  const [technology, setTechnology] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [path, setPath] = useState("");
  const [selected, setSelected] = useState(0);
  const handleClick = (element, index) => {
    setTechnology(element);
    setClicked(true);
    setPath(element.src);
    setSelected(index);
  };

  return (
    <div className="technologyContainer">
      <div className="dataContainer">
        <div className="circleContainer">
          {technologyData.map((element, index) => (
            <div key={index}>
              <div
                className={
                  selected === index ? "selectedCircle" : "circleSelector"
                }
                onClick={() => handleClick(element, index)}
              >
                {element.number}
              </div>
            </div>
          ))}
        </div>
        <div className="information-container">
          <p className="top-p">THE TERMINOLOGY...</p>
          <h1 className="title">
            {clicked === false ? technologyData[0].name : technology.name}
          </h1>
          <p className="articleDescription">
            {clicked === false
              ? technologyData[0].description
              : technology.description}
          </p>
        </div>
      </div>
      <img
        className="technologyImg"
        src={clicked === false ? technologyData[0].src : path}
        alt=""
      />
    </div>
  );
}
