import React from "react";
import ReactDOM from "react-dom";

import { HTML5Backend as backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

import "normalize.css";
import "./index.css";

import App from "./App";

import { AppStateProvider } from "./state/AppStateContext";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={backend}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
