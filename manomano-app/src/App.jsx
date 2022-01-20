import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Page404 } from "./pages";
import "./App.scss";
import Form from "./components/Form";

function App() {
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [checkBoxTools, setCheckBoxTools] = useState(true);

  const handleCheckBoxTools = () => {
    setCheckBoxTools(!checkBoxTools);
    console.log(checkBoxTools);
  };

  const handleArea = (value) => {
    setArea(value);
  };

  const handleBudget = (value) => {
    setBudget(value);
  };
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home area={area} checkBoxTools={checkBoxTools} budget={budget} />
          }
        />
        <Route exact path="*" element={<Page404 />} />
        <Route
          exact
          path="/projet"
          element={
            <Form
              handleArea={handleArea}
              area={area}
              budget={budget}
              handleBudget={handleBudget}
              handleCheckBoxTools={handleCheckBoxTools}
              checkBoxTools={checkBoxTools}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
