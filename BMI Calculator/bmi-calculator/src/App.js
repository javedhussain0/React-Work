import React from "react";
import "./App.css";
import { useState,useMemo } from "react";
const App = () => {
  const [height, setHieght] = useState(70);

  const [wieght, setWeigt] = useState(180);

  function onWeightChange(event) {
    setWeigt(event.target.value);
  }
  function onHeightChange(event) {
    setHieght(event.target.value);
  }
  const output = useMemo(()=>{
    const calculateHeight =height/100;
    return(wieght/(calculateHeight*calculateHeight)).toFixed(1)

  },[wieght,height]);

  return (
    <main>
      <div className="container">
        <h1 id="main-heading">BMI Calculator</h1>

        <div className="main-container" >
          <p>Wieght:{wieght} kg</p>

          <input
            onChange={ onWeightChange}
            min="40"
            max="200"
            step="1"
            className="input-slider"
            type="range"
          
          ></input>

          <p>Height: {height}cm</p>

          <input
            onChange={onHeightChange}
            className="input-slider"
            type="range"
            min = '60'
            max= '200'
          ></input>
          <div className="output-section">
            <p className="para"> Your BmI is :- </p>
            <p className="output"> {output} Kg/msqure</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
