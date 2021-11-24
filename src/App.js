import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent';
import ButtonComponent from './Components/ButtonComponent';
import './App.css';

function App() {
  const [time, setTime] = useState({ms:0, s:0, m:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);


  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));  
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m;

  const run = () => {
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };

  const resume = () => start();


  return (
    <div className="main-section">
     <div className="clock-holder">
          <div className="stopwatch">
               <DisplayComponent time={time}/>
               <ButtonComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          </div>
     </div>
    </div>
  );
}

export default App;
