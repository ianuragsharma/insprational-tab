import { useEffect, useState } from "react";
const CurrentTimeGreet = ({ userName }) => {
  const [time, setTime] = useState(null);
  const [greet, setGreet] = useState("");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const time = date.toLocaleTimeString("en-GB");
      setTime(time.slice(0, 5));
      {
        if (time.slice(0, 2) <= 11 && time.slice(0, 2) >= 0)
          setGreet("Good Morning");
        else if (time.slice(0, 2) > 11 && time.slice(0, 2) < 17)
          setGreet("Good Afternoon");
        else setGreet("Good Evening");
      }
    }, 1000);
  }, [time]);

  return (
    <div>
      <div className="time-container">{time && time.slice(0, 5)}</div>
      <h2 className="greeting">Good Morning, {userName}</h2>
    </div>
  );
};

export { CurrentTimeGreet };
