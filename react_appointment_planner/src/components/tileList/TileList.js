import React from "react";

import {Tile} from "../tile/Tile";
//tiles are props
export const TileList = ({tiles}) => {
  return (
    <div>
      {tiles.map((tile, index) => (
        <Tile key={index} tile={tile}/>))}
    </div>
  );
};
