import type { NextPage } from "next";

import { useAuth } from "../components/contexts/AuthContext";

import SignIn from "../components/SignIn";
import MenuScreen from "../components/MenuScreen";

import { useCollectionData } from "react-firebase-hooks/firestore";
import Head from "next/head";
import { motion } from "framer-motion";

import { slideInLeft } from "../animations";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Home: NextPage = () => {
  const { signup } = useAuth();
  const { currentUser } = useAuth();

  const signOutUser = () => {};

  return (
    <motion.div
      className="bg-darkgray w-screen h-screen"
      initial="initial"
      animate={"animate"}
      exit="initial"
      variants={stagger}
    >
      <Head>
        <title>Baddle</title>
      </Head>
      <div className="flex items-center justify-center h-1/3">
        <motion.h1
          className="text-red-400 font-fredoka text-9xl"
          variants={slideInLeft}
        >
          Baddle
        </motion.h1>
      </div>

      <div className="h-1/2">{currentUser ? <MenuScreen /> : <SignIn />}</div>
    </motion.div>
  );
};

export default Home;
