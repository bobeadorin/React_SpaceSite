import "./CrewDescriptionSection.css";
import { useState } from "react";
import {
  missionSpecialist,
  crewPilot,
  flightEngineer,
  crewCommander,
} from "../CrewData";

export default function CrewDescription() {
  const [member, setMember] = useState({});
  const [visited, setVisited] = useState(false);

  const memberCheck = (members) => {
    setMember(members);
    setVisited(true);
  };

  return (
    <>
      <section className="CrewContianerDescription">
        <div className="crewContainer">
          <p>02 MEET YOUR CREW</p>
          <div key={member.name} className="crewData-container">
            <h2 className="member-position">
              {" "}
              {visited === false
                ? missionSpecialist.position.toUpperCase()
                : member.position.toUpperCase()}
            </h2>
            <div className="crewName" key={member.name}>
              {visited === false
                ? missionSpecialist.name.toUpperCase()
                : member.name.toUpperCase()}
            </div>
            <p className="crewDescription">
              {visited === false
                ? missionSpecialist.description
                : member.description}
            </p>
          </div>

          <div className="circleSelectorContainer">
            <div
              onClick={() => {
                memberCheck(missionSpecialist);
              }}
              className="radioCircle"
            ></div>
            <div
              onClick={() => {
                memberCheck(crewPilot);
              }}
              className="radioCircle"
            ></div>
            <div
              onClick={() => {
                memberCheck(flightEngineer);
              }}
              className="radioCircle"
            ></div>
            <div
              onClick={() => {
                memberCheck(crewCommander);
              }}
              className="radioCircle"
            ></div>
          </div>
        </div>
        <div className="imgContainer">
          <img
            src={visited === false ? missionSpecialist.src : member.src}
            alt="crewMember"
            className="crewIMG"
          />
        </div>
      </section>
    </>
  );
}
