import React from 'react';
import data from "./data.json";
import Mode from "./Mode.js";
import Volume from "./Volume.js";
import SubMix from "./SubMix.js";
import Resonance from "./Resonance.js";
import Focus from "./Focus.js";
import Languages from "./Languages.js";
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
      <div>
        <SubMix />
      </div>
      <div>
        <Resonance />
      </div>
      <div>
        <Focus />
        <Languages />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
