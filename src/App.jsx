import "./App.css";
import NavBar from "./Components/HomePage/navBarSpace/navBarSpace";
import Home from "./Components/HomePage/HomePage";
import DestinationPage from "./Components/DestionationPage/DestinationPage";
import CrewPage from "./Components/CrewPage/CrewPage";
import TechnologyPage from "./Components/TechnologyPage/TechnologyPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [btnClick, setBtnClick] = useState(false);
  console.log(btnClick);
  return (
    <div>
      <NavBar />
      <section>
        <Routes>
          <Route exact path="/" element={<Home prop={setBtnClick} />} />
          <Route exact path="/destination" element={<DestinationPage />} />
          <Route exact path="/crew" element={<CrewPage />} />
          <Route exact path="/tehnology" element={<TechnologyPage />} />
        </Routes>
      </section>
    </div>
  );
}
