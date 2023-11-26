import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "../Pomodoro.css";
import Timmer from "./Timmer";
import Buttons from "./Buttons";
import "react-circular-progressbar/dist/styles.css";
function Pomodoro() {
 
  const [time, setTime] = useState(1500); // setting timer for 25 mins
  const [mode, setMode] = useState("work");
  const [workTime, SetWrokTime] = useState(1500);
  const [BreakTime, SetBreakTime] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [percentage, setPercentage] = useState(100);
  function calTime(){
    let min = Math.floor(time/60);
    let sec=Math.floor(time%60);
    return `${min}m ${sec}s`;    
  }
  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (time === 0) {
          clearInterval(interval);
          if (mode === "work") {
            setTime(BreakTime);
            setMode("Break");
          } else {
            setTime(workTime);
            setMode("work");
          }
          setPercentage(100);
        } else {
          setTime((prev) => prev - 1);
          if (mode === "work") {
            setPercentage(Math.floor((time / workTime) * 100));
          } else {
            setPercentage(Math.floor((time / BreakTime) * 100));
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);
  useEffect(()=>{
    setPercentage(100);
    setMode('work');
    setTime(workTime);
    setIsActive(false);

  },[workTime,BreakTime])
  return (
    <div className="Time-col">
      <div className="progressbar-container">
      <CircularProgressbar
          className="ProgressBar"
          value={percentage}
          text={`${calTime()}`}
          styles={{
            // Customize the root progress bar element
            // Customize the path, trail, and trail background
            path: { stroke: '#FFD043' },
            trail: { stroke: '#FFD095' },
            // Customize the text
            text: { fill: '#312F2F', fontSize: '20px' },
          }}
          textStyles={{
            // Customize the styles for the text value
            value: { fontFamily: 'Arial', fontWeight: 'bold' },
          }}
        />
    </div>
      <Buttons isCounting={setIsActive}/>
      <div className="time">
      <Timmer break={SetWrokTime} def={25} min={5} max={60}/>
      <Timmer break={SetBreakTime} def={5} min={1} max={30}/>
      </div>
    </div>
  );
}

export default Pomodoro;
