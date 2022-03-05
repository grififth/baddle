import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import { AuthProvider } from "../components/contexts/AuthContext";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AuthProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </AuthProvider>
  );
}

export default MyApp;
