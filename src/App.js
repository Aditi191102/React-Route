import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      
      <Routes>

          <Route path='/' element={<Home/>}></Route>

          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>

          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}></Route>

          <Route path='/dashboard' element={<Dashboard/>}></Route>

          <Route path='/contact' element={<Contact/>}></Route>

      </Routes>

    </div>);
}

export default App;
