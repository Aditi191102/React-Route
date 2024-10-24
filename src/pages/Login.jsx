import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png";

function Login({setIsLoggedIn}){
    return(
        <Template 
            title="Welcome Back"
            Desc1="Build skills for today, tomorrow, and beyond."
            Desc2="Education to future-proof your career."
            image={loginImg}
            formtype="Log In"
            setIsLoggedIn={setIsLoggedIn}
        >
            
        </Template>
    )
}

export default Login;