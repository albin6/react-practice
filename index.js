import ReactDOM from "react-dom/client";
import Form from "./Form"

const AppLayout = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
