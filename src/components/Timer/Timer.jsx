import { useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  const [time, setTime] = useState({ minutes: 25, seconds: 0, isOn: false });

  const startTime = () => {
    alert("start time");
    console.log("start time");
  };

  const stopTime = () => {
    console.log("start time");
  };

  const resetTime = () => {
    console.log("start time");
  };

  return (
    <div data-testid="timer-container" className="timer-container">
      <h3 data-testid="time-display" className="time-display"></h3>
      <div
        data-testid="time-button-container"
        className="time-button-container"
      >
        <TimerButton action={startTime} value={"Start"}></TimerButton>
        <TimerButton action={stopTime} value={"Stop"}></TimerButton>
        <TimerButton action={resetTime} value={"Reset"}></TimerButton>
      </div>
    </div>
  );
};

export default Timer;
