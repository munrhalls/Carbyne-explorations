import React from "react";
import ReactDOM from "react-dom/client";
import SphereProvider from "./Contexts/SphereProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SphereProvider>
      <App />
    </SphereProvider>
  </React.StrictMode>
);
