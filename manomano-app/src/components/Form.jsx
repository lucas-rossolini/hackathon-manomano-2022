import React from "react";

function Form() {
  return (
    <div>
      <h1>Tell us about your project</h1>
      <label htmlFor="form">
        Location
        <select name="location">
          <option value="location1">interior</option>
          <option value="location2">outside</option>
        </select>
      </label>
      <label htmlFor="room">
        Room
        <select name="room">
          <option value="room1">bathroom</option>
          <option value="room2">bedroom</option>
        </select>
      </label>
      <label htmlFor="room">
        Type of work
        <select name="room">
          <option value="room1">bathroom</option>
          <option value="room2">bedroom</option>
        </select>
      </label>
      <label htmlFor="area">
        Area
        <input
          className=""
          id="area"
          type="text"
          value=""
          placeholder="20 m²"
        />
      </label>
      <label htmlFor="area">
        budget
        <input
          className=""
          id="budget"
          type="text"
          value=""
          placeholder="1500 €"
        />
      </label>
      <label htmlFor="tools">
        <input type="checkbox" id="tools" name="tools" />I already have the
        tools
      </label>
    </div>
  );
}

export default Form;
