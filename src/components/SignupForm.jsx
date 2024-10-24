import React, { useState } from "react";
import toast from "react-hot-toast";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function SignupForm({setIsLoggedIn}){

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        createPassword:"",
        confirmPassword:""
    })

    const [visiblePassword,setVisiblePassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData((prev)=>(
            {
                ...prev,
            [event.target.name]:event.target.value
            }            
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.createPassword!=formData.confirmPassword){
            toast.error("Password do not matched");
        }
        toast.success("Account Created");
        navigate("/dashboard");
        setIsLoggedIn(true);
    }
    return(
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
            
            <div>
                <label> 
                    <p>
                        First Name
                        <sup>*</sup>
                    </p>
                    <input
                    required 
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeHandler}
                    ></input>
                </label>
                <label> 
                    <p>Last Name<sup>*</sup></p>
                    <input 
                    required
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last Name"
                    onChange={changeHandler}
                    type="text"></input>
                </label>
            </div>

            <label> 
                <p>Email Address <sup>*</sup></p>
                <input 
                required
                placeholder="Enter Email Address"
                type="email"
                name="email"
                onChange={changeHandler}
                value={formData.email}
                ></input>
            </label>
            
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input
                    required
                    placeholder="Enter Password"
                    type={visiblePassword ? ("text"): ("password")}
                    name="createPassword"
                    onChange={changeHandler}
                    value={formData.createPassword}
                    >
                    </input>
                    <span onClick={() =>setVisiblePassword((nprev)=>!nprev)}>
                    {
                        visiblePassword ?
                        (<PiEye/>) :
                        (<PiEyeClosed />)
                    }
                </span>
                </label>
                
                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input
                    required
                    placeholder="Confirm Password"
                    type={visiblePassword ? ("text"): ("password")}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={changeHandler}>
                    </input>
                    <span onClick={() =>setVisiblePassword((prev)=>!prev)}>
                    {
                        visiblePassword ?
                        (<PiEye/>) :
                        (<PiEyeClosed />)
                    }
                    </span>
                </label>
            </div>

            <button className="w-full px-[12px] py-[8px] bg-yellow-400 rounded-[8px] text-richblack-900">Create Account</button>

        </form>
        </div>
        
    )
}
export default SignupForm;