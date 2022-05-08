import React from "react";

const HomePage = () => {
  const usernameHandler = (event) => {
    if (event.key === "Enter") {
      localStorage.setItem("userName", event.target.value);
      window.location.reload(false);
    }
  };
  return (
    <div className="container">
      <h2>Hello, what's your name? </h2>
      <input
        className="home-input"
        type="text"
        onKeyPress={(event) => usernameHandler(event)}
      ></input>
    </div>
  );
};

export default HomePage;
