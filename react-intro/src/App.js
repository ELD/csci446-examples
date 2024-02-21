import { useState } from "react";
import ClassCounter from "./ClassCounter";
import ClockFunction from "./Clock";
import ClockClass from "./ClockClass";
import "./App.css";

function App() {
  const [displayToggled, setDisplayToggled] = useState(false);
  const [typeToggled, setTypeToggled] = useState(false);
  return (
    <div className="App">
      {/* <HooksCounter /> */}
      <ClassCounter />
      <label htmlFor="displayToggle">Display Clock</label>
      <input
        id="displayToggle"
        type="checkbox"
        onChange={() => setDisplayToggled(!displayToggled)}
        value={displayToggled}
      />
      <br />
      <label htmlFor="typeToggle">Toggle Class/Function component</label>
      <input
        id="typeToggle"
        type="checkbox"
        onChange={() => setTypeToggled(!typeToggled)}
        value={typeToggled}
      />
      {displayToggled ? typeToggled ? <ClockClass /> : <ClockFunction /> : null}
    </div>
  );
}

export default App;
