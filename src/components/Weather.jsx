import { useEffect, useState } from "react";
const Weather = () => {
  const baseURL = "https://api.openweathermap.org/data/2.5/";

  const [temperature, setTemperature] = useState("");
  const [location, setLocation] = useState("");
  useEffect(() => {
    let latitude = "";
    let longitude = "";
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((location) => {
        latitude = location.coords.latitude;
        longitude = location.coords.longitude;
        getWeather(latitude, longitude);
      });

      const getWeather = async (latitude, longitude) => {
        try {
          await fetch(
            `${baseURL}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
          )
            .then((res) => res.json())
            .then((data) => {
              const { name, main } = data;
              setLocation(name);
              setTemperature(Math.round(main.temp));
            });
        } catch (error) {
          console.log(error);
        }
      };
    }
  }, []);

  return (
    <div>
      <div className="temperature">
        {temperature} <sup>°</sup>
      </div>
      <div className="location">{location}</div>
    </div>
  );
};

export { Weather };
