import React, { useEffect, useState } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(1);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }

  useEffect(() => {
    getData();
  }, [count]);

  const [useList, setUserLists] = useState({});

  async function getData() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users/"+count);
      const json = await data.json();
      console.log(json)
      setUserLists(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div>
      <div className="content">
        <h3>{useList.name}</h3>
        <h4>{useList.email}</h4>
      </div>
    </div>
      <div className="inner">
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default AdvancedCounter;
