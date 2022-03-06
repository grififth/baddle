import React, { useEffect, useState } from "react";

const wordListUrl =
  "https://raw.githubusercontent.com/tabatkins/wordle-list/main/words";

const SinglePage = () => {
  const [time, setTime] = useState(0);

  const [words, setWords] = useState<string[]>([]);

  var [answer, setAnswer] = useState<string>("");

  useEffect(() => {
    var db = false;

    const getWordList = async () => {
      let response = await fetch(wordListUrl);

      var wordList = await response.text();

      var wordListArr = wordList.split("\n");

      setWords(wordListArr);

      const randomWord =
        wordListArr[Math.floor(Math.random() * wordListArr.length)];

      setAnswer(randomWord);
    };

    if (!db) {
      db = true;
      getWordList();
    }

    //Update time
    let interval: any = null;
    interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className="bg-darkgray w-screen h-screen font-fredoka">
      <div className="bg-red-400 w-screen h-12 absolute flex items-center justify-around">
        <div></div>
        <h1 className="text-darkgray text-2xl">Baddle</h1>
        <h1 className="text-darkgray text-2xl">{time}</h1>
      </div>
    </div>
  );
};

export default SinglePage;
