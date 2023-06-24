import { useState } from "react";
import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

function App() {
  const [mode, setmode] = useState("dark")
  
  return (
    <>
      <Navbar Name="TextUtils" mode={mode} />
      <TextForm></TextForm>
      {/* <About></About> */}
    </>
  );
}

export default App;
