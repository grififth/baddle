import { motion } from "framer-motion";
import React from "react";

import { useAuth } from "./contexts/AuthContext";

import { slideInLeft } from "../animations";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const MenuScreen = () => {
  const { currentUser, logout } = useAuth();

  return (
    <motion.div className="w-full h-full font-fredoka" variants={stagger}>
      <div className="w-full h-full flex flex-col items-center justify-around">
        <div className="flex items-center justify-center text-red-400 text-2xl">
          <h1>
            Hello {currentUser.email.substr(0, currentUser.email.indexOf("@"))}!
          </h1>
        </div>
        <motion.div
          className="flex items-center justify-center bg-red-400 rounded-md w-1/4 h-16 text-3xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={slideInLeft}
        >
          <button>Single Player</button>
        </motion.div>
        <motion.div
          className="flex items-center justify-center bg-red-400 rounded-md w-1/4 h-16 text-3xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={slideInLeft}
        >
          <button>Create Game</button>
        </motion.div>
        <motion.div
          className="flex items-center justify-center bg-red-400 rounded-md w-1/4 h-16 text-3xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={slideInLeft}
        >
          <button>Join Game</button>
        </motion.div>
        <motion.div
          className="flex items-center justify-center bg-red-400 rounded-md w-1/4 h-16 text-3xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={slideInLeft}
        >
          <button>Leaderboard</button>
        </motion.div>
        <motion.div
          className="flex items-center justify-center bg-red-400 rounded-md w-1/4 h-16 text-3xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={slideInLeft}
        >
          <button
            onClick={() => {
              logout();
            }}
          >
            Sign Out
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MenuScreen;
