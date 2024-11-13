// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Login from './components/Login'
// import Welcome from "./components/Welcome";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Route path="/" element={<Login />} />
//       <Route path="/welcome" element={<Welcome />} />
//     </>
//   )
// }

// export default App
import React from "react";
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
    </Router>
  );
}

export default App;

