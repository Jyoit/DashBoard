import React from "react";
import Navbar from "./Components/Navbar";

import Alert from "./Components/Alert";

import Boody from "./Components/Boody";

export default function App() {
  return (
    <>
      <Alert />
      <div className="wrapper">
        <Navbar />
        <Boody />
      </div>
    </>
  );
}
