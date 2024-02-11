import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { TodosProvider } from "./context/TodosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodosProvider>
    <App />
  </TodosProvider>
);
