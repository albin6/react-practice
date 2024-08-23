import { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  function handleChange(e) {
    setName(e.target.value);
  }
  function validate(e) {
    e.preventDefault();
    const name = e.nativeEvent.target[0].value.trim();
    if (name.trim() === "") {
      console.log("name cannot be blank");
    } else {
      console.log(name);
    }
  }
  return (
    <div>
      <form className="form" onSubmit={validate}>
        <div className="input-field">
          <label>Enter Your Name :</label>
          <input
            ref={inputRef}
            value={name}
            type="text"
            onChange={handleChange}
          />
        </div>
        <button className="sbt-btn" type="submit">submit</button>
      </form>
    </div>
  );
};

export default App;
