import React from "react";

function Formulaire() {
  return (
    <div>
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
    </div>
  );
}

export default Formulaire;
