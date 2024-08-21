import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

const Sample = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(1) // which returns an object contains a single property name current
  const inputRef = useRef()
  useEffect(() => {
    renderCount.current += 1
  })
  function focus() {
    inputRef.current.focus()
  }
  return (
    <div>
      <input ref={inputRef} type="text" onChange={(e) => setName(e.target.value)} />
      <h1>My name is {name}</h1>
      <h1>I rendered {renderCount.current} times</h1>
      <button onClick={focus}>focus</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Sample />);
