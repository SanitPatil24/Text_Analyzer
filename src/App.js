import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, { useState } from "react";
import Alert from "./component/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
    {/* <Router> */}
    


<Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>

<Alert alert={alert}/>
{/* <Navbar/> */}


<div className="container my-3">
{/* <Routes> */}
{/* /users --> component 1
/users/home --> component 2
   */}
          {/* <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          
          
          </Route>
        </Routes> */}
        <TextForm showAlert={showAlert} heading=" Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces" mode={mode}/>
      </div>
      {/* </Router> */}
      
    </>
  );
}

export default App;
