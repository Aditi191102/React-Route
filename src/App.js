import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
      <Routes>
          <Route path='/' element={<Home/>}></Route>

          <Route path='/login' element={<Login/>}></Route>

          <Route path='/signup' element={<Signup/>}></Route>

          <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>);
}

export default App;
