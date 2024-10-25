import React from "react";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { useState } from "react";
import {toast} from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function LoginForm({setIsLoggedIn}){

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })

    const [visiblePassword,setVisiblePassword] = useState(false);

    const navigate = useNavigate();

    function changeHandler(event){
        setFormData( (prevData) => ( {
            ...prevData,
            [event.target.name]:event.target.value
        }) 
        )
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In Successfully");
        navigate("/dashboard")
        console.log(formData);
    }

    return(
        <form className="flex flex-col w-full gap-y-4 mt-6"
        onSubmit={submitHandler}>
            <label className="w-full">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Email Address
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                    required
                    type="email"
                    placeholder="Enter email address"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                ></input>
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
                    Password 
                    <sup className="text-pink-200">*</sup>
                </p>
                <input
                    type={visiblePassword ? ("text") : ("password")}
                    placeholder="Enter Password"
                    value={formData.password}
                    name="password"
                    onChange={changeHandler}
                    required
                    className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
                >               
                </input>

                <span className="absolute right-3 top-[38px] cursor-pointer"
                onClick={()=> setVisiblePassword((prev)=>!prev)}>
                    {
                        visiblePassword ? 
                        (<PiEye fontSize={24} fill='#AFB2BF' />) :
                        (<PiEyeClosed fontSize={24} fill='#AFB2BF'/>)
                    }
                </span>
                
                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button className="w-full px-[12px] py-[8px] bg-yellow-400 rounded-[8px] text-richblack-900 mt-6">
                Log In
            </button>
        </form>
    )
}
export default LoginForm;