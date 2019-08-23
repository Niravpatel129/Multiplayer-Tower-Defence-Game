import React from "react";
import "./App.css";
import axios from "axios";

import P5Canvas from "./components/P5Canvas";

function App() {
  axios
    .get("/test", () => {
      console.log("hello from axios callback from test");
    })
    .then(returnval => {
      console.log(returnval);
    });
  return (
    <div className="App">
      <h1>hello</h1>
      <P5Canvas />
    </div>
  );
}

export default App;
