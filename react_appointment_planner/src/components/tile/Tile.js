import React from "react";

export const Tile = ({tile}) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => (
      <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>{value}

      </p>))}
    </div>
  );
};
//Just like the TileList component, the Tile component is generalized to work with data from any object.
// This allows it to be used in both the ContactsPage and AppointmentsPage components.