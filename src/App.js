import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div>
        <div className="header" >
            <Header/>
        </div>
        <div className="home">
            <Home />
        </div>
    </div>
  );
}

export default App;
