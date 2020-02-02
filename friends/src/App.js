import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./components/Routes";

function App() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <Routes></Routes>
    </div>
  );
  
}

export default App;
