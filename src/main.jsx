// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Create from "./Pages/Create.jsx";      

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
    <Create />
  </BrowserRouter>,
);
