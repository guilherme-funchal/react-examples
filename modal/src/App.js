import React, { useState } from "react";
import Modal1 from "./Modal/Modal1";
import Modal2 from "./Modal/Modal2";

export default function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);


  return (
    <div className="App">
      <button onClick={() => setShowModal1(true)}>Show Modal 1</button>
      <button onClick={() => setShowModal2(true)}>Show Modal 2</button>
      <Modal1 title="My Modal1" onClose={() => setShowModal1(false)} show={showModal1}>
      </Modal1>
      <Modal2 title="My Modal2" onClose={() => setShowModal2(false)} show={showModal2}>
      </Modal2>
    </div>
    
  );
}