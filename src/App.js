import { useState } from "react";
import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";

function App() {
  const [mode, setmode] = useState("light");
  const toggleSwitch = () => {
    if (mode === "light") {
      setmode("dark");
    } else {
      setmode("light");
    }
  };

  return (
    <>
      <Navbar Name="TextUtils" mode={mode} toggleSwitch={toggleSwitch} />
      <TextForm></TextForm>
      {/* <About></About> */}
    </>
  );
}

export default App;
