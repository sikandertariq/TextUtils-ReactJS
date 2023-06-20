import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import React, { useState } from "react"

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <Navbar Name="TextUtils" darkMode={darkMode}/>
      <TextForm mids="cows" shawty="tenrukh" darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  );
}

export default App;
