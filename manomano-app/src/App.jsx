import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Page404 } from "./pages";
import "./App.scss";
import Form from "./components/Form";

function App() {
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [checkBoxTools, setCheckBoxTools] = useState("false");

  const handleCheckBoxTools = () => {
    setCheckBoxTools(!checkBoxTools);
  };
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Page404 />} />
        <Route
          exact
          path="/projet"
          element={
            <Form
              area={area}
              setArea={setArea}
              budget={budget}
              setBudget={setBudget}
              handleCheckBoxTools={handleCheckBoxTools}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
