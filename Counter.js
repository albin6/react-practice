import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    function incrementCount() {
        setCount(count + 1)
    }
    function decrementCount() {
        setCount(count - 1)
    }
  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="inner">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default Counter;
