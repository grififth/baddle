import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { fadeFromBelow } from "../animations";
import Leaderboard from "../components/Leaderboard";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const LeaderboardPage = () => {
  return (
    <motion.div
      className="bg-darkgray w-screen h-screen"
      initial="initial"
      animate={"animate"}
      exit="initial"
      variants={stagger}
    >
      <Head>
        <title>Leaderboard</title>
      </Head>
      <div className="flex items-center justify-center h-1/5">
        <motion.h1
          className="text-red-400 font-fredoka text-7xl"
          variants={fadeFromBelow}
        >
          Leaderboard
        </motion.h1>
      </div>

      <div className="h-2/3 flex items-center justify-center">
        <Leaderboard />
      </div>
    </motion.div>
  );
};

export default LeaderboardPage;
