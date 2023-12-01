import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "../Pomodoro.css";
import Timmer from "./Timmer";
import Buttons from "./Buttons";
import "react-circular-progressbar/dist/styles.css";

function Pomodoro() {
  const [time, setTime] = useState(1500); // setting timer for 25 mins
  const [mode, setMode] = useState("work");
  const [workTime, SetWorkTime] = useState(1500);
  const [breakTime, SetBreakTime] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [percentage, setPercentage] = useState(100);

  function calTime() {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time % 60);
    return `${min}m ${sec}s`;
  }

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (time === 0) {
          clearInterval(interval);
          if (mode === "work") {
            setTime(breakTime);
            setMode("Break");
            showNotification("Break Time", "Take a break!");
          } else {
            setTime(workTime);
            setMode("work");
            showNotification("Work Time", "Back to work!");
          }
          setPercentage(100);
        } else {
          setTime((prev) => prev - 1);
          if (mode === "work") {
            setPercentage(Math.floor((time / workTime) * 100));
          } else {
            setPercentage(Math.floor((time / breakTime) * 100));
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, mode, workTime, breakTime]);

  useEffect(() => {
    setPercentage(100);
    setMode("work");
    setTime(workTime);
    setIsActive(false);
  }, [workTime, breakTime]);

  const showNotification = (title, body) => {
    if (Notification.permission === "granted") {
      new Notification(title, { body });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, { body });
        }
      });
    }
  };

  return (
    <div className="Time-col">
      <div className="progressbar-container">
        <CircularProgressbar
          className="ProgressBar"
          value={percentage}
          text={`${calTime()}`}
          styles={{
            path: { stroke: "#FFD043" },
            trail: { stroke: "#FFD095" },
            text: { fill: "#312F2F", fontSize: "20px" },
          }}
          textStyles={{
            value: { fontFamily: "Arial", fontWeight: "bold" },
          }}
        />
      </div>
      <Buttons isCounting={setIsActive} />
      <div className="time">
        <Timmer break={SetWorkTime} def={25} min={5} max={60} />
        <Timmer break={SetBreakTime} def={5} min={1} max={30} />
      </div>
    </div>
  );
}

export default Pomodoro;
