import React from "react";

import Line from "./Line";

const Board: React.FC<{ board: string[]; colors: string[] }> = ({
  board,
  colors,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Line word={board[0]} colors={colors[0]} />
      <Line word={board[1]} colors={colors[1]} />
      <Line word={board[2]} colors={colors[2]} />
      <Line word={board[3]} colors={colors[3]} />
      <Line word={board[4]} colors={colors[4]} />
      <Line word={board[5]} colors={colors[5]} />
    </div>
  );
};

export default Board;
