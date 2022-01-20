import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Page404 } from "./pages";
import "./App.scss";
import Basket from "./components/Basket";
// import Form from "./components/Form";

function App() {
  return (
    <div>
      <Basket />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
