import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

const AppLayout = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
