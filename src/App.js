import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import {Routes, Route} from "react-router-dom";

const App = () => {
   
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<Landing />} exact/>
        </Routes>
    </div>
  );
}

export default App;
