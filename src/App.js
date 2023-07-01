import { useState } from "react";
import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import Alert from "./Alert";

function App() {
  const [mode, setmode] = useState("dark")
  
  return (
    <>
      <Navbar Name="TextUtils" mode={mode} />
      <Alert
      text="Click to dismiss ">
        
      </Alert>
      <TextForm></TextForm>
      
      {/* <About></About> */}
    </>
  );
}

export default App;
