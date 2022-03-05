import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { fadeFromBelow, slideInRightDelay } from "../animations";
import { db } from "../firebase/clientApp";

const Leaderboard = () => {
  const [scores, setScores] = useState([] as any);
  const scoresCollectionRef = collection(db, "singles");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(scoresCollectionRef);
      setScores(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(scores);
    };

    getUsers();
  }, []);

  return (
    <motion.div
      className="border-8 border-red-400 p-4 w-1/3 h-full text-darkgray font-fredoka"
      variants={fadeFromBelow}
    >
      {scores.map((score: any) => {
        return (
          <motion.div
            key={score.id}
            className="bg-red-400 rounded-md flex items-center justify-center flex-col text-2xl"
            variants={slideInRightDelay}
          >
            <h1>Name: {score.name}</h1>
            <h1>Score: {score.score}</h1>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Leaderboard;
