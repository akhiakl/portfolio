import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import AOS from "aos";
import "../styles/globals.css";
import "../styles/icomoon.css";
import "aos/dist/aos.css";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
    });
  }, []);
  return (
    <>
      <Head>
        <title>Akhi AKL</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
