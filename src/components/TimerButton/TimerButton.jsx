import "./TimerButton.css"

const TimerButton = ({action, value}) => {

  return (
    <button data-testid='button-container' className="button-container" onClick={action}>{value}</button>
  )
}

export default TimerButton