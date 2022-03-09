import React from "react";

import Tile from "./Tile";

const Line: React.FC<{ word: string; colors: string }> = ({ word, colors }) => {
  return (
    <div className="flex">
      <Tile letter={word[0]} color={colors[0]} />
      <Tile letter={word[1]} color={colors[1]} />
      <Tile letter={word[2]} color={colors[2]} />
      <Tile letter={word[3]} color={colors[3]} />
      <Tile letter={word[4]} color={colors[4]} />
    </div>
  );
};

export default Line;
