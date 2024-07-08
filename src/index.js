import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import VoteProvider from "store/VoteProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <VoteProvider>
    <App />
  </VoteProvider>
);
