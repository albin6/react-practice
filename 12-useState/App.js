import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // 1 => state updates arent immediate

  function updateCount() {
    // there will not be any change even if we try to update the count again and again
    // because the scheduling of the update will be done in future
    // therefore the value in the count will be remain the previous value
    setCount(count + 1); // count will be 0 (for initial)
    // setCount(count + 1); // count will be 0 (previous value not updated) and so on
    // setCount(count + 1);
    // setCount(count + 1);

    // another way to do this is to use the updated version of the setCount method
    // setCount(prev => prev + 1);
    // we get the previous value of the state variable as the function argument
    // if we have multiple updates we can use like that
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        alignItems: "center",
      }}
    >
      <span style={{ fontSize: "40px" }}>{count}</span>
      <button onClick={updateCount} style={{ width: "100px", height: "30px" }}>
        Click
      </button>
    </div>
  );
};

export default App;
