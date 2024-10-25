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
        confirmPassword:"",
        
    })

    const [visiblePassword,setVisiblePassword] = useState(false);
    const [confirmVisiblePassword,setconfirmVisiblePassword] = useState(false);

    const [accType,setAccType] = useState("student")

    const navigate = useNavigate();

    const finalFormData = {
        ...formData,
        accType
    }


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
            return;
        }
        toast.success("Account Created");
        navigate("/dashboard");
        setIsLoggedIn(true);
        console.log(finalFormData);
    }

    


    return(
        <div>
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button 
                className={`${accType==="student" ? "bg-richblack-900 text-richblack-5" 
                    : "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration=200 }`}
                onClick={() => setAccType("student")}>
                    Student
                </button>

                <button 
                 className={`${accType==="instructor" ? "bg-richblack-900 text-richblack-5" 
                    : "bg-transparent text-richblack-200 "} py-2 px-5 rounded-full transition-all duration=200 }`}

                onClick={() => setAccType("instructor")}>
                    Instructor
                </button>

            </div>

            <form
            onSubmit={submitHandler}>
            
            {/* first and last name */}
            <div className="flex gap-x-4 mt-[10px]">
                <label className="w-full"> 
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        First Name
                    <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    required 
                    placeholder="Enter First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    ></input>
                </label>
                <label className="w-full"> 
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Last Name
                        <sup className="text-pink-200">*</sup></p>
                    <input 
                    required
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Enter Last Name"
                    onChange={changeHandler}
                    type="text"
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"></input>
                </label>
            </div>

            {/* email address */}
            <div className="mt-[10px]">
            <label className="w-full"> 
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address 
                    <sup className="text-pink-200">*</sup>
                </p>
                <input 
                required
                placeholder="Enter Email Address"
                type="email"
                name="email"
                onChange={changeHandler}
                value={formData.email}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                ></input>
            </label>
            </div>
            

            {/* passwords */}
            
            <div className="flex gap-x-4 mt-[10px]">
                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Create Password
                        <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    required
                    placeholder="Enter Password"
                    type={visiblePassword ? ("text"): ("password")}
                    name="createPassword"
                    onChange={changeHandler}
                    value={formData.createPassword}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                    >
                    </input>
                    <span className="absolute right-3 top-[38px] cursor-pointer"
                     onClick={() =>setVisiblePassword((nprev)=>!nprev)}>
                    {
                        visiblePassword ?
                        (<PiEye fontSize={24} fill='#AFB2BF'/>) :
                        (<PiEyeClosed fontSize={24} fill='#AFB2BF'/>)
                    }
                </span>
                </label>
                
                <label className="w-full relative">
                    <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                        Confirm Password
                        <sup className="text-pink-200">*</sup>
                    </p>
                    <input
                    required
                    placeholder="Confirm Password"
                    type={confirmVisiblePassword ? ("text"): ("password")}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]">
                    </input>
                    <span className="absolute right-3 top-[38px] cursor-pointer"
                     onClick={() =>setconfirmVisiblePassword((prev)=>!prev)}>
                    {
                        confirmVisiblePassword ?
                        (<PiEye fontSize={24} fill='#AFB2BF'/>) :
                        (<PiEyeClosed fontSize={24} fill='#AFB2BF'/>)
                    }
                    </span>
                </label>
            </div>
            
            {/* button */}
            <button className="w-full px-[12px] py-[8px] bg-yellow-400 rounded-[8px] text-richblack-900 mt-6">
                Create Account</button>

        </form>
        </div>
        
    )
}
export default SignupForm;