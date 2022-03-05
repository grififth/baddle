import { motion } from "framer-motion";
import React from "react";

import { useAuth } from "./contexts/AuthContext";

import { slideInLeft, fadeFromBelow } from "../animations";
import Link from "next/link";

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
          <motion.h1 variants={fadeFromBelow}>
            Hello {currentUser.email.substr(0, currentUser.email.indexOf("@"))}!
          </motion.h1>
        </div>
        <motion.div
          className="w-1/4 h-16"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={slideInLeft}
        >
          <Link href="/single">
            <a>
              <div className="flex items-center justify-center w-full h-full bg-red-400 rounded-md text-3xl">
                <h1>Single Player</h1>
              </div>
            </a>
          </Link>
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
          <Link href="/leaderboard">
            <a>
              <div className="flex items-center justify-center w-full h-full bg-red-400 rounded-md text-3xl">
                <h1>Leaderboard</h1>
              </div>
            </a>
          </Link>
        </motion.div>
        <motion.div
          className="flex items-center justify-center bg-red-400 rounded-md w-1/4 h-16 text-3xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          variants={slideInLeft}
        >
          <button
            className="w-full h-full"
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
