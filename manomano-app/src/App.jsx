import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Page404 } from "./pages";
import "./App.scss";
import Form from "./components/Form";
import Basket from "./components/Basket";

function App() {
  const [location, setLocation] = useState("");
  const [room, setRoom] = useState("");
  const [work, setWork] = useState("");
  const [keyWords, setKeyWords] = useState([]);
  const [formFilled, setFormFilled] = useState(false);
  const [garden, setGarden] = useState("");
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const formResults = [];
    formResults.push(location, room, garden, work);
    setKeyWords(formResults);
  }, [location, room, garden, work]);

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

  const handleBasket = (value) => {
    setBasket(value);
  };

  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              keyWords={keyWords}
              formFilled={formFilled}
              handleBasket={handleBasket}
            />
          }
        />
        <Route exact path="*" element={<Page404 />} />
        <Route exact path="basket" element={<Basket basket={basket} />} />
        <Route
          exact
          path="/projet"
          element={
            <Form
              room={room}
              handleRoom={handleRoom}
              location={location}
              handleLocation={handleLocation}
              handleWork={handleWork}
              work={work}
              formFilled={formFilled}
              setFormFilled={setFormFilled}
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
