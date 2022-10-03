// core idea: ease of changing things fast & well
import React from "react";
import ReactDOM from "react-dom/client";
import GlobProvider from "./Contexts/GlobProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobProvider>
      <App />
    </GlobProvider>
  </React.StrictMode>
);
