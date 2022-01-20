import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Page404 } from "./pages";
import "./App.scss";
import Form from "./components/Form";
import Basket from "./components/Basket";

function App() {
  const [checkBoxTools, setCheckBoxTools] = useState(true);
  const [location, setLocation] = useState("");
  const [room, setRoom] = useState("");
  const [work, setWork] = useState("");
  const [keyWords, setKeyWords] = useState([]);
  const [garden, setGarden] = useState("");
  useEffect(() => {
    const formResults = [];
    formResults.push(location, room, garden, work);
    setKeyWords(formResults);
  }, [location, room, garden, work]);

  const handleCheckBoxTools = () => {
    setCheckBoxTools(!checkBoxTools);
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
  const handleGarden = (value) => {
    setGarden(value);
  };

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home keyWords={keyWords} />} />
        <Route exact path="*" element={<Page404 />} />
        <Route exact path="basket" element={<Basket />} />
        <Route
          exact
          path="/projet"
          element={
            <Form
              handleCheckBoxTools={handleCheckBoxTools}
              checkBoxTools={checkBoxTools}
              room={room}
              handleRoom={handleRoom}
              location={location}
              handleLocation={handleLocation}
              handleWork={handleWork}
              work={work}
              garden={garden}
              handleGarden={handleGarden}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
