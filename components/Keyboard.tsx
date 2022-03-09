import React from "react";

import { BsBackspace } from "react-icons/bs";

const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const row3 = ["z", "x", "c", "v", "b", "n", "m"];

interface KeyboardProps {
  colors: any;
  handleInput: (e: string) => void;
}

const Keyboard = ({ colors, handleInput }: KeyboardProps) => {
  return (
    <div className="flex flex-col width-full h-full">
      <div className="flex items-around justify-center flex-1">
        {row1.map((char) => {
          return (
            <div
              className={`text-darkgray flex items-center justify-center m-1 text-1xl ${colors[char]} rounded-md w-8 cursor-pointer`}
              key={char}
              onClick={() => {
                handleInput(char);
              }}
            >
              <h1>{char.toUpperCase()}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex items-around justify-center flex-1">
        {row2.map((char) => {
          return (
            <div
              className={`text-darkgray flex items-center justify-center m-1 text-1xl ${colors[char]} rounded-md w-8 cursor-pointer`}
              key={char}
              onClick={() => {
                handleInput(char);
              }}
            >
              <h1>{char.toUpperCase()}</h1>
            </div>
          );
        })}
      </div>
      <div className="flex items-around justify-center flex-1">
        <div
          className="text-darkgray flex items-center justify-center m-1 text-1xl bg-gray-400 rounded-md w-16 cursor-pointer"
          onClick={() => {
            handleInput("Enter");
          }}
        >
          <h1>Enter</h1>
        </div>
        {row3.map((char) => {
          return (
            <div
              className={`text-darkgray flex items-center justify-center m-1 text-1xl ${colors[char]} rounded-md w-8 cursor-pointer`}
              key={char}
              onClick={() => {
                handleInput(char);
              }}
            >
              <h1>{char.toUpperCase()}</h1>
            </div>
          );
        })}
        <div
          className="text-darkgray flex items-center justify-center m-1 text-2xl bg-gray-400 rounded-md w-12 cursor-pointer"
          onClick={() => {
            handleInput("Backspace");
          }}
        >
          <h1>
            <BsBackspace />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
