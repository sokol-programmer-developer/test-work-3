import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import {Routes, Route} from "react-router-dom";
import axios from "axios";



const App = () => {
    const [information,setInformation ] = React.useState([]);

    React.useEffect(() =>{
        axios.get("../data.json").then(({ data }) => {
            setInformation(data.information)
        });
    },[])

  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<Landing items={information}/>} exact/>
        </Routes>
    </div>
  );
}

export default App;
