import React from "react";
import "./App.css";
import { FirstTask } from "./component/FirstTask";
import { SecondTask } from "./component/SecondTask";
import { ThirdTask } from "./component/ThirdTask";
import { FourthTask } from "./component/FourthTask";

function App() {
  return (
    <div className="App">
      <header className="App-header">DISTRICTS AND PLOTS</header>
      <FirstTask />
      <SecondTask />
      <ThirdTask />
      <FourthTask />
    </div>
  );
}

export default App;
