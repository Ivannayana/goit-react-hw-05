import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <nav></nav>
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
