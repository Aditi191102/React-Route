import React from "react";
import frameImg from "../assets/frame.png";

function Template({title, loginDesc, signUpDesc, image, formtype, isLoggedIn }){

    return(
        <div>
            <div>
                <h3>{title}</h3>

                <div>
                    <p>
                    <span>{loginDesc}</span>
                    <span>{signUpDesc}</span>
                    </p>
                </div>

                {
                    formtype === "login" ? 
                    (<LoginForm/>): 
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
                    className="frame">
                    </img>

                    <img src={image}
                        className="students"
                    ></img>
                </div>
            </div>
            
        </div>
    );
}

export default Template;