import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Page404 } from "./pages";
import "./App.scss";
import Form from "./components/Form";

function App() {
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [checkBoxTools, setCheckBoxTools] = useState(true);
  const [location, setLocation] = useState("");
  const [room, setRoom] = useState("");
  const [work, setWork] = useState("");
  const [keyWords, setKeyWords] = useState([]);
  const [formFilled, setFormFilled] = useState(false);

  useEffect(() => {
    const formResults = [];
    formResults.push(area, budget, location, room, work);
    setKeyWords(formResults);
  }, [area, budget, location, room, work]);

  const handleCheckBoxTools = () => {
    setCheckBoxTools(!checkBoxTools);
  };

  const handleArea = (value) => {
    setArea(value);
  };

  const handleBudget = (value) => {
    setBudget(value);
  };

  const handleLocation = (value) => {
    setLocation(value);
  };

  const handleRoom = (value) => {
    setRoom(value);
  };

  const handleWork = (value) => {
    setWork(value);
  };
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home keyWords={keyWords} formFilled={formFilled} />}
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
              room={room}
              handleRoom={handleRoom}
              location={location}
              handleLocation={handleLocation}
              handleWork={handleWork}
              work={work}
              formFilled={formFilled}
              setFormFilled={setFormFilled}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
