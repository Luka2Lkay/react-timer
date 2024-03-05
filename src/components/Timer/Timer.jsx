import { useState } from "react";
import "./Timer.css";
import TimerButton from "../TimerButton/TimerButton";

const Timer = () => {
  const [time, setTime] = useState({ minutes: 25, seconds: 0, isOn: false });

  const startTime = () => {
    setTime({ isOn: true });
  };

  const stopTime = () => {
    setTime({ isOn: false });
  };

  const resetTime = () => {
    setTime({ minutes: 25, seconds: 0, isOn: false });
  };

  return (
    <div data-testid="timer-container" className="timer-container">
      <h3 data-testid="time-display" className="time-display">
        {time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
      </h3>
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
