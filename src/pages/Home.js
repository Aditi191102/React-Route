import React from "react";
import LoginForm from "../components/LoginForm";

const Home = () =>{
    return (
        <div className=" flex text-blue-500 items-center justify-center">
           <h1 className="Heading">Home welcome home</h1>

           <LoginForm></LoginForm>
        </div>
    )
}
export default Home;