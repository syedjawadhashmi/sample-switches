import React, { useState } from 'react';
import data from "./data.json";
import Mode from "./Mode.js";
import Volume from "./Volume.js";
import SubMix from "./SubMix.js";
import Resonance from "./Resonance.js";
import ResonanceExample from "./resonanceExample.js";
import Focus from "./Focus.js";
import Languages from "./Languages.js";
import './App.css';

function App() {
  const [state, setState] = useState({
    mode: false
  })

  const modeChange = (value) => {
    console.log('aaaaa')
    setState(prevState => ({ ...prevState, mode: value }))
  }
  return (
    <div className="App">
      <div className={"modeContainer"}>
        <div className={'mode'}>MODE</div>
        <Mode data={data.slides} mode={state.mode} modeChange={modeChange} leadingText={data.leadingText} />
      </div>
      <div>
        <Volume modeChange={modeChange} />
      </div>
      <div>
        <SubMix modeChange={modeChange} />
      </div>
      <div>
        <ResonanceExample />
      </div>
      <div>
        <Focus modeChange={modeChange} />
        <Languages modeChange={modeChange} />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
