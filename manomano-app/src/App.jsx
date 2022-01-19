import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Page404 } from "./pages";

import "./App.scss";
import Formulaire from "./components/Formulaire";

function App() {
  return (
    <div>
      <div>
        <Formulaire />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
