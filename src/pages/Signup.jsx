import React from "react";
import signUpImg from "../assets/signup.png";
import Template from "../components/Template";

function Signup({setIsLoggedIn}){
    return(
        <Template 
            title="Join the millions learning to code with StudyNotion for free"
            Desc1="Build skills for today, tomorrow, and beyond."
            Desc2="Education to future-proof your career."
            image={signUpImg}
            formtype="Sign up"
            setIsLoggedIn={setIsLoggedIn}
        >        
        </Template>
    )
}

export default Signup;

// *{
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }

// html,
// body {
//     overflow-x: hidden;
// }

// .outer{
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   /* background-color: black; */
// }

// .pageslinks{
//   display: flex;
//   gap: 5rem;
//   text-decoration: none !important;
//   color: #ebebeb;
//   list-style-type: none;
// }

// .pagesbtns{
//   display: flex;
//   gap: 3rem;
  
// }