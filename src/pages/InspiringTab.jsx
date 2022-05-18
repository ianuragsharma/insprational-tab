import React, { useEffect, useState } from "react";
import { CurrentTimeGreet, Quote, Weather } from "../components";

const InspiringTab = () => {
  const [userName, setUsername] = useState(null);
  const [focus, setFocus] = useState(null);

  const [isChecked, setIsChecked] = useState(
    localStorage.getItem("isChecked")
      ? localStorage.getItem("isChecked") === "false"
        ? false
        : true
      : false
  );
  useEffect(() => {
    setUsername(localStorage.getItem("userName"));
    setFocus(localStorage.getItem("focus"));
    window.addEventListener("keydown", focusHandler);
    return () => {
      window.removeEventListener("keydown", focusHandler);
    };
  }, []);
  useEffect(() => {
    localStorage.getItem("isChecked") && isChecked
      ? localStorage.setItem("isChecked", "true")
      : localStorage.setItem("isChecked", "false");
  }, [isChecked]);

  const focusHandler = (event) => {
    if (event.key === "Enter") {
      localStorage.setItem("focus", event.target.value);
      setFocus(event.target.value);
    }
  };

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  const editHandler = () => {
    setIsChecked(false);
    setFocus("");
  };
  return (
    <div>
      <div className="weather-container">
        <Weather />
      </div>

      <div className="container">
        <CurrentTimeGreet userName={userName} />

        {focus ? (
          <div className="text-center ">
            <p className="today">Today</p>
            <div className="focus-container">
              <input
                defaultChecked={false}
                type="checkbox"
                checked={isChecked}
                onClick={checkHandler}
              />
              <div className={`focus ${isChecked ? "text-strike" : ""}`}>
                {focus}
              </div>
              <button className="btn-edit " onClick={editHandler}>
                Edit
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="today text-center">
              What is your main focus today?
            </h2>
            <div className="text-center ">
              <input
                className="home-input text-center "
                type="text"
                onKeyPress={(event) => focusHandler(event)}
              ></input>
            </div>
          </div>
        )}
      </div>
      <Quote />
    </div>
  );
};

export default InspiringTab;
