import { useState } from "react";
import About from "./About";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import AlertComponent from "./AlertComponent"; // Rename the imported component

function App() {
  const [mode, setMode] = useState("light");
  const [alertData, setAlertData] = useState(null); // Rename the state variable

  const toggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlertData({ msg: message, type: type });
  };

  return (
    <>
      <Navbar Name="TextUtils" mode={mode} toggleSwitch={toggleSwitch} />
      <AlertComponent alert={alertData} />

      <TextForm></TextForm>
      {/* <About></About> */}
    </>
  );
}

export default App;
