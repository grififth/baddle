import React, { useEffect, useState } from "react";

import Board from "../components/Board";
import Keyboard from "../components/Keyboard";

import { useAuth } from "../components/contexts/AuthContext";
import Timer from "../components/Timer";

const wordListUrl =
  "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const SinglePage = () => {
  const [time, setTime] = useState(0);
  const [words, setWords] = useState<string[]>([]);
  const [colors, setColors] = useState<{}>({});
  const [answer, setAnswer] = useState<string>("");
  const [curWord, setCurWord] = useState("");
  const [curLine, setCurLine] = useState<number>(0);

  const [board, setBoard] = useState<string[]>([
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
  ]);

  const [boardColors, setBoardColors] = useState<string[]>([
    "bbbbb",
    "bbbbb",
    "bbbbb",
    "bbbbb",
    "bbbbb",
    "bbbbb",
  ]);

  const { user } = useAuth();

  const handleInput = (keyPress: string) => {
    var oldWord = curWord;

    if (keyPress == "Enter") {
      if (!words.includes(oldWord)) {
        console.log("No");
        return;
      }
      console.log("Ok");
      return;
    } else if (keyPress == "Backspace") {
      if (oldWord == "") return;
      oldWord = oldWord.slice(0, -1);
    } else {
      oldWord = (curWord + keyPress).slice(0, 5);
    }
    setCurWord(oldWord);

    let currentBoard = board;
    currentBoard[curLine] = oldWord;

    while (currentBoard[curLine].length < 5) currentBoard[curLine] += " ";

    setBoard([...currentBoard]);
  };

  function logKey(e: any) {
    if (e.code.match(/Key[A-Z]/)) {
      handleInput(e.code[3].toLowerCase());
    }
    if (e.code == "Enter" || e.code == "Backspace") {
      handleInput(e.code);
    }
  }

  useEffect(() => {
    const getWordList = async () => {
      let response = await fetch(wordListUrl);

      var wordList = await response.text();

      var wordListArr = wordList.split("\n");

      setWords(wordListArr);

      const randomWord =
        wordListArr[Math.floor(Math.random() * wordListArr.length)];

      setAnswer(randomWord);
    };

    const updateColors = async () => {
      const newColors = {} as any;

      for (let c of alphabet) {
        newColors[c] = "bg-gray-400";
      }

      setColors(newColors);
    };

    const setupKeys = async () => {
      document.addEventListener("keydown", logKey);

      return () => {
        document.removeEventListener("keydown", logKey);
      };
    };

    getWordList();
    updateColors();
    setupKeys();
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", logKey);

    return () => {
      document.removeEventListener("keydown", logKey);
    };
  }, [curWord]);

  return (
    <div className="bg-darkgray w-screen h-screen font-fredoka">
      <div className="bg-red-400 w-screen h-12 absolute flex items-center justify-around">
        <div></div>
        <h1 className="text-darkgray text-2xl">Baddle</h1>
        <Timer setTime={setTime} time={time} />
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="h-screen flex flex-col items-center justify-around">
          <div className="bg-red-400 p-2 flex items-center justify-center rounded-xl">
            <Board board={board} colors={boardColors} />
          </div>
          <div></div>
        </div>
        <div className="w-screen h-1/5 absolute bottom-2">
          <Keyboard colors={colors} handleInput={handleInput} />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
