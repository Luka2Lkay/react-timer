import {useState} from 'react'
import "./Timer.css"

const Timer = () => {
    const [time, setTime] = useState({minutes: 25, seconds: 0, isOn: false})

    const startTime = () => {
        console.log("start time")
    }

    const stopTime = () => {
        console.log("start time")
    }

    const resetTime = () => {
        console.log("start time")
    }

  return (
    <div data-testid="timer-container" className='timer-container'></div>
  )
}

export default Timer