import "./App.css";
// import syngenta from "../src/image/Syngenta_Logo.svg.png"
import {Route, Routes } from 'react-router-dom';
import Dashboard from "./Components/Dashboard"
import Home from "./Pages/Home";



function App() {
  return (
 

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
     </Routes>
   



  );
}

export default App;
