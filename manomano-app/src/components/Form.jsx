import React from "react";
import { Link } from "react-router-dom";
import "./Form.scss";

function Form({
  handleArea,
  area,
  budget,
  handleBudget,
  handleCheckBoxTools,
  checkBoxTools,
  room,
  handleRoom,
  location,
  handleLocation,
  work,
  handleWork,
  setFormFilled,
  garden,
  handleGarden,
}) {
  return (
    <div className="form">
      <h1 className="titleForm">Tell us about your project</h1>
      <form className="Form">
        <label className="label" htmlFor="form">
          Location
          <select
            onChange={(e) => handleLocation(e.target.value)}
            value={location}
            name="location"
            className="select"
          >
            <option value="">--choice--</option>
            <option value="inside">indoors</option>
            <option value="outside">outdoors</option>
          </select>
        </label>
        {location === "outside" ? (
          <label className="label" htmlFor="room">
            Garden
            <select
              onChange={(e) => handleGarden(e.target.value)}
              value={garden}
              name="garden"
              className="select"
            >
              <option value="">--choice--</option>
              <option value="sheds">sheds</option>
              <option value="pools">pools</option>
              <option value="garden">vegetable garden</option>
              <option value="decking">decking</option>
            </select>
          </label>
        ) : (
          <label className="label" htmlFor="room">
            Room
            <select
              onChange={(e) => handleRoom(e.target.value)}
              value={room}
              name="room"
              className="select"
            >
              <option value="">--choice--</option>
              <option value="bathroom">bathroom</option>
              <option value="bedroom">bedroom</option>
              <option value="kitchen">kitchen</option>
              <option value="dining room">dining room</option>
            </select>
          </label>
        )}
        {location === "outside" ? (
          <label className="label" htmlFor="work">
            Type of work
            <select
              onChange={(e) => handleWork(e.target.value)}
              value={work}
              name="work"
              className="select"
            >
              <option value="">--choice--</option>
              <option className="option" value="wood-work">
                wood work
              </option>
              <option value="pruning">pruning</option>
              <option value="gardening">garden maintenance</option>
              <option value="building">building</option>
            </select>
          </label>
        ) : (
          <label className="label" htmlFor="work">
            Type of work
            <select
              onChange={(e) => handleWork(e.target.value)}
              value={work}
              name="work"
              className="select"
            >
              <option value="">--choice--</option>
              <option className="option" value="plumbing">
                plumbing
              </option>
              <option value="peint">peint</option>
              <option value="renovation">renovation</option>
              <option value="electricity">electricity</option>
            </select>
          </label>
        )}
        <label className="label" htmlFor="area">
          Area
          <input
            className="input"
            id="area"
            type="text"
            value={area}
            placeholder="20 m²"
            onChange={(event) => handleArea(event.target.value)}
          />
        </label>
        <label className="label" htmlFor="budget">
          budget
          <input
            className="input"
            id="budget"
            type="text"
            value={budget}
            placeholder="1500 €"
            onChange={(event) => handleBudget(event.target.value)}
          />
        </label>
        <label className="labelcheckbox" htmlFor="tools">
          <input
            type="checkbox"
            className="tools"
            name="tools"
            value={checkBoxTools}
            onClick={() => handleCheckBoxTools()}
          />{" "}
          I already have the tools
        </label>
      </form>
      <div className="button">
        <Link to="/">
          <button
            onClick={() => {
              handleLocation("");
              handleRoom("");
              handleGarden("");
              handleWork("");
              setFormFilled(false);
            }}
            className="buttonForm"
            type="submit"
          >
            Cancel
          </button>
        </Link>
        <Link to="/">
          <button
            className="buttonForm"
            type="submit"
            onSubmit={setFormFilled(true)}
          >
            Validate
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
