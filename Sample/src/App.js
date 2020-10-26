import React from 'react';
import data from "./data.json";
import Mode from "./Mode.js";
import Volume from "./Volume.js";
import './App.css';

function App() {

  return (
    <div className="App">
      <div className={"modeContainer"}>
        <div className={'mode'}>MODE</div>
        <Mode data={data.slides} leadingText={data.leadingText} />
      </div>
      <div>
        <Volume />
      </div>
    </div>
  );
}

export default App;
