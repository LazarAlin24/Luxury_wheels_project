import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopcontextProvider from "./Context/ShopContext.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ShopcontextProvider>
      <App />
    </ShopcontextProvider>
  </React.StrictMode>
);
