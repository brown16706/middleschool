import React, { useState } from 'react';
import SetAlarm from './timer';
import "../pages/timer.css"

function TimerClock() {

  let [timeToAlarm, setTimeToAlarm] = useState(1200);
  let [timeInputed, setTimeInputed] = useState(1200);
  let [countdownShow, setCountdowmShow] = useState(false);

  const switchCountdownState = () => {
    setCountdowmShow(!countdownShow);
  }

  const setTime = e => {
    e.preventDefault();
    setTimeToAlarm(timeInputed);
    switchCountdownState();
  }

  // const inputTimeValue = e => {
  //   setTimeInputed(e.target.value);
  // }

  return (
    <div className="timerform">
      <form onSubmit={setTime} className="buttons">
        {/*<input className="time" type="number" placeholder="Time in seconds to" onChange={inputTimeValue} value={timeInputed}/>*/}
        <div className="timer20">20 MINUTE TIMER</div>
        <div><button className="start" type="submit">{countdownShow ? 'Stop' : 'Start'}</button></div>
    </form>
      {countdownShow ? (<SetAlarm time={timeToAlarm} />) : ( <div className="Alarm"/> )}
    </div>
  );
}

export default TimerClock;