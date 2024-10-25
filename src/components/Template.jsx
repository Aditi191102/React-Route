import React from "react";
import frameImg from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc";

function Template({title, Desc1, Desc2, image, formtype, setIsLoggedIn }){

    return(
        <div className="flex justify-between w-11/12 max-w-[1160px] mx-auto gap-x-12 gap-y-0 items-center mt-2">
            
            <div className="w-11/12 max-w-[450px] mt-4">
                <h1 
                className="text-richblack-5 font-semibold text-[1.475rem] leading-[2.005rem]">
                    {title}
                </h1>

                <div>
                    <p className="text-[1rem] leading-[1.325rem] mt-4">
                    <span className="text-richblack-100">{Desc1}</span>
                    <br></br>
                    <span className="text-blue-100 italic">{Desc2}</span>
                    </p>
                </div>

                {
                    formtype === "Log In" ? 
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>): 
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)
                }

                <div className="flex w-full items-center my-4 gap-2">
                    <div className="w-full h-[1px] bg-richblack-700"></div>
                    <p className="text-richblack-100 font-medium leading-[1.375rem]">
                        OR
                    </p>
                    <div className="w-full h-[1px] bg-richblack-700"></div>
                </div>

                <button className="w-full flex justify-center items-center rounded-[8px] 
                font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-4 ">
                <FcGoogle />
                    <p>{formtype} with Google</p>
                </button>
            </div>

                <div className="relative w-11/12 max-w-[450px]">
                    <img src={frameImg}
                    className="frame" 
                    alt="bgFrame"
                    width={458}
                    height={504}
                    loading="lazy">
                    </img>

                    <img src={image}
                        className="absolute -top-4 right-4" 
                        alt="studentsImg"
                        width={558}
                        height={504}
                        loading="lazy"
                    >                        
                    </img>
                </div>          
            
        </div>
    );
}

export default Template;