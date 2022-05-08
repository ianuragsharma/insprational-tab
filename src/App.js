import React, { useState, useEffect } from "react";
import "./App.css";
import { backgroundIMG } from "./staticData/backgroundIMG";
import HomePage from "./pages/HomePage";
import InspiringTab from "./pages/InspiringTab";
const App = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);
  const getRandomIMG = (wallpapers) =>
    wallpapers[Math.floor(Math.random() * wallpapers.length)];

  const imageURL = getRandomIMG(backgroundIMG);
  return (
    <div
      style={{
        backgroundImage: `url("${imageURL}")`,
        backgroundSize: "cover",
      }}
    >
      {userName === null ? <HomePage /> : <InspiringTab />}
    </div>
  );
};

export default App;
