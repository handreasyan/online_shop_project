import React from "react";
import { AppProps } from "next/app";

import '../styles/globals.css'

/*
//import AuthProvider from "@/providers/AuthProvider";

//import "@/styles/starter.scss";
//import "@/styles/main_media_res.scss";
//import UserProvider from "@/providers/UserProvider";


if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap");
}
*/
import '../styles/globals.css'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <div> {/*AuthProvider*/}
      <div> {/*UserProvider*/}
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default MyApp;
