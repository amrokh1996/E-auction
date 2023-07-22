
import React from 'react';
import { useState, useEffect } from 'react';


const Timer = (probs) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let gate = true

  const deadline = probs.data;

  const getTime = () => {
    
    const time = Date.parse(deadline) - Date.now();
    if(time>0){
      
    
    console.log(Date.parse(deadline) - Date.now())

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
    }else{
      gate=false

    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    (gate ? (
    <div className="timer" role="timer" style={{display:'flex',fontWeight:'bold',fontSize:'17px',color:'red'}}>
    
      <div className="box" >
        <p style={{fontFamily:'impact'}} id="day">{days < 10 ? "0" + days : days}:</p>
        <span className="text"></span>
     
    </div>
    
      <div className="box">
        <p style={{fontFamily:'impact'}} id="hour">{hours < 10 ? "0" + hours : hours}:</p>
      </div>

      <div className="box">
        <p style={{fontFamily:'impact'}} id="minute">{minutes < 10 ? "0" + minutes : minutes}:</p>
     
      </div>

      <div className="box">
        <p style={{fontFamily:'impact'}} id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
      </div>
 

</div> 
    ):
    (
    <div style={{fontSize:'20px',fontWeight:'bold',color:'red'}}>
      <p>END</p>
    </div>))  );
};

export default Timer;