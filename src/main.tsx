import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import MainLayout from "./layout/MainLayout/MainLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <MainLayout>
        <App />
      </MainLayout>
    </HashRouter>
  </React.StrictMode>
);
