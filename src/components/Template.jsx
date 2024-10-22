import React from "react";
import frameImg from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({title, Desc1, Desc2, image, formtype, setIsLoggedIn }){

    return(
        <div>
            <div>
                <h3>{title}</h3>

                <div>
                    <p>
                    <span>{Desc1}</span>
                    <span>{Desc2}</span>
                    </p>
                </div>

                {
                    formtype === "login" ? 
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>): 
                    (<SignupForm/>)
                }

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>

                <button>
                    <p>Sign Up with Google</p>
                </button>
                
                <div>
                    <img src={frameImg}
                    className="frame" alt="bgFrame">
                    </img>

                    <img src={image}
                        className="students" alt="studentsImg"
                    ></img>
                </div>
            </div>
            
        </div>
    );
}

export default Template;