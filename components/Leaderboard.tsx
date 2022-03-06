import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fadeFromBelow, slideInRight } from "../animations";
import { db } from "../firebase/clientApp";

function compare(score1: any, score2: any) {
  return score2.score - score1.score;
}

const Leaderboard = () => {
  const [scores, setScores] = useState([] as any);
  const scoresCollectionRef = collection(db, "singles");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(scoresCollectionRef);
      var newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      newData.sort(compare);

      setScores(newData);
    };

    getUsers();
  }, []);

  return (
    <motion.div
      className="border-8 border-red-400 w-1/3 h-full text-darkgray font-fredoka"
      variants={fadeFromBelow}
    >
      {scores.map((score: any) => {
        return (
          <motion.div
            key={score.id}
            className="bg-red-400 rounded-md flex items-center justify-center flex-col text-2xl m-4"
            variants={slideInRight}
          >
            <h1>{score.name}</h1>
            <h1>{score.score}</h1>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Leaderboard;
