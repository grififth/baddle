import React from "react";

interface TileProps {
  letter: string;
  color: string;
}

const colors: any = {
  b: "bg-darkgray",
  n: "bg-bgray",
  g: "bg-bgreen",
  y: "bg-byellow",
};

const Tile = ({ letter, color }: TileProps) => {
  return (
    <div
      className={`flex items-center justify-center text-2xl text-white rounded-md w-14 h-14 m-1.5 ${colors[color]}`}
    >
      <h1>{letter?.toUpperCase()}</h1>
    </div>
  );
};

export default Tile;
