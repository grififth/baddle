import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

import { useAuth } from "./contexts/AuthContext";

const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const { signup, login } = useAuth();

  const [error, setError] = useState("none");

  const handleSignUp = async (e: any) => {
    e.preventDefault();

    let newUsername = usernameRef.current?.value;

    if (!newUsername) {
      return setError("Nice username bozo.");
    }

    if (
      newUsername.length < 3 ||
      newUsername.length > 20 ||
      !newUsername.match(/^[0-9a-zA-Z]+$/)
    ) {
      return setError("Sussy Username.");
    }

    if (passwordRef.current?.value !== confirmPasswordRef.current?.value) {
      return setError("Passwords do not match.");
    }

    try {
      setError("none");
      await signup(
        newUsername + "@baddledomainsussy.com",
        passwordRef.current?.value
      );
    } catch {
      setError("Failed to create an account.");
    }
  };

  const handleLogIn = async (e: any) => {
    try {
      setError("none");
      await login(
        usernameRef.current?.value + "@baddledomainsussy.com",
        passwordRef.current?.value
      );
    } catch {
      setError("Failed login bozo.");
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-fredoka space-y-4">
      <div className="w-48">
        <div className="flex flex-col items-center justify-center space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="bg-red-400 rounded-md placeholder-gray-800"
            ref={usernameRef}
          ></input>
          <input
            type="password"
            placeholder="Password"
            className="bg-red-400 rounded-md placeholder-gray-800"
            ref={passwordRef}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-red-400 rounded-md placeholder-gray-800"
            ref={confirmPasswordRef}
          ></input>
          <div className="flex items-stretch justify-around w-full">
            <motion.button
              className="bg-red-400 rounded-md w-1/3"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={(e) => {
                handleLogIn(e);
              }}
            >
              Login
            </motion.button>
            <motion.button
              className="bg-red-400 rounded-md w-1/3"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={(e) => {
                handleSignUp(e);
              }}
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      </div>
      <div className="w-64 h-2">
        <div className="bg-red-400 rounded-md w-full h-full"></div>
      </div>
      {/* <div className="flex items-center justify-center w-48 h-8">
        <motion.div
          className="bg-red-400 rounded-md w-full h-full flex items-center justify-center"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <button onClick={() => {}}>Sign in with Google</button>
        </motion.div>
      </div> */}
      <div className={`${error !== "none" ? "text-red-400" : "text-darkgray"}`}>
        {error}
      </div>
    </div>
  );
};

export default SignIn;
