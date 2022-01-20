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
}) {
  return (
    <div className="form">
      <h1 className="titleForm">Tell us about your project</h1>
      <form className="Form">
        <label className="label" htmlFor="form">
          Location
        </label>
        <select name="location" className="select">
          <option value="location1">interior</option>
          <option value="location2">outside</option>
        </select>
        <label className="label" htmlFor="room">
          Room
        </label>
        <select name="room" className="select">
          <option value="room1">bathroom</option>
          <option value="room2">bedroom</option>
          <option value="room2">kitchen</option>
          <option value="room2">dining room</option>
        </select>
        <label className="label" htmlFor="work">
          Type of work
        </label>
        <select name="work" className="select">
          <option className="option" value="work">
            drill
          </option>
          <option value="work">sander</option>
          <option value="work">key</option>
          <option value="work">multi-tool</option>
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
            }}
            className="buttonForm"
            type="submit"
          >
            Cancel
          </button>
        </Link>
        <Link to="/">
          <button className="buttonForm" type="submit">
            Validate
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Form;
