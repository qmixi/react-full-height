import React from "react";
import ReactFullHeight from "react-full-height";

import "./App.css";

function App() {
  return (
    <main className="App">
      <ReactFullHeight className="App-header" startWidth={450} title="test" id="section1">
        <h1>
            React FullHeight
        </h1>
        <a
          className="App-link"
          href="https://github.com/qmixi/react-full-height"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </ReactFullHeight>
    </main>
  );
}

export default App;
