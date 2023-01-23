import React from "react";
import ReactDOM from "react-dom";
import FormOne from "./FormOne";


import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* <h1>JSON Schema Form</h1> */}
      <br />
      <FormOne />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
