import "./DestinationDescription.css";
import { useState } from "react";
import { MOON, MARS, EUROPA, TITAN } from "./PlanetDetalis";

export default function DestionationDescrip() {
  const planets = [MOON, MARS, EUROPA, TITAN];
  const [planetName, setPlanetName] = useState("");
  const [planetDescription, setPlanetDescription] = useState("");
  const [planetDistance, setPlanetDistance] = useState([]);
  const [path, setPath] = useState("");
  const [visit, setVisit] = useState(false);

  const planetContent = (planet) => {
    setPath(planet.path);
    setPlanetName(planet.name);
    setPlanetDescription(planet.description);
    setPlanetDistance(planet.distance);
    setVisit(true);
  };

  return (
    <div className="planetContainer">
      <div className="planetImgContainer">
        <img
          src={visit === false ? MOON.path : path}
          alt="PLANET"
          className="planetImg"
        />
      </div>
      <div className="planetBox">
        <div className="buttonContainer">
          {planets.map((planet, index) => (
            <button
              key={index}
              onClick={() => planetContent(planet)}
              className="planetBtn "
            >
              {planet.name}
            </button>
          ))}
        </div>

        <div>
          <div className="textContainer">
            <h1 className="planetName">
              {visit === false ? MOON.name : planetName}
            </h1>
            <p className="planetDescription">
              {visit === false ? MOON.description : planetDescription}
            </p>
          </div>
          <div className="distanceText">
            <p>
              AVG.DISTANCE{" "}
              {visit === false ? MOON.distance[0] : planetDistance[0]}
            </p>
            <p>
              EST. TRAVEL TIME
              {visit === false ? MOON.distance[1] : planetDistance[1]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
