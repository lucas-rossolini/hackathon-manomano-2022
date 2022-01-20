/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { Link } from "react-router-dom";
import "./Form.scss";
// import { FaChevronDown } from "react-icons/fa";

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
}) {
  return (
    <div className="form">
      <h1 className="titleForm">Tell us about your project</h1>
      <form className="Form">
        <label className="label" htmlFor="form">
          Location
        </label>
        <select
          onChange={(e) => handleLocation(e.target.value)}
          value={location}
          name="location"
          className="select"
        >
          <option value="">-choice-</option>
          <option value="inside">inside</option>
          <option value="outside">outside</option>
        </select>
        <label className="label" htmlFor="room">
          Room
        </label>
        <select
          onChange={(e) => handleRoom(e.target.value)}
          value={room}
          name="room"
          className="select"
        >
          <option value="">-choice-</option>
          <option value="bathroom">bathroom</option>
          <option value="bedroom">bedroom</option>
          <option value="kitchen">kitchen</option>
          <option value="dining room">dining room</option>
        </select>
        <label className="label" htmlFor="work">
          Type of work
        </label>
        <select
          onChange={(e) => handleWork(e.target.value)}
          value={work}
          name="work"
          className="select"
        >
          <option value="">-choice-</option>
          <option className="option" value="drill">
            drill
          </option>
          <option value="sander">sander</option>
          <option value="key">key</option>
          <option value="multi-tool">multi-tool</option>
        </select>
        <label className="label" htmlFor="area">
          Area
        </label>
        <input
          className="input"
          id="area"
          type="text"
          value={area}
          placeholder="20 m²"
          onChange={(event) => handleArea(event.target.value)}
        />
        <label className="label" htmlFor="budget">
          budget
        </label>
        <input
          className="input"
          id="budget"
          type="text"
          value={budget}
          placeholder="1500 €"
          onChange={(event) => handleBudget(event.target.value)}
        />
        <label className="label" htmlFor="tools">
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
              handleArea("");
              handleBudget("");
              handleLocation("");
              handleRoom("");
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
