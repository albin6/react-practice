import ReactDOM from "react-dom/client";
import AdvancedCounter from "./AdvancedCounter";

const AppLayout = () => {
  return (
    <div>
      <AdvancedCounter />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
