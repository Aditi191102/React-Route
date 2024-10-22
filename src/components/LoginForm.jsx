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
    }

    return(
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup></p>
                <input
                    required
                    type="email"
                    placeholder="Enter email address"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                ></input>
            </label>

            <label>
                <p>Password <sup>*</sup></p>
                <input
                    type={visiblePassword ? ("text") : ("password")}
                    placeholder="Enter Password"
                    value={formData.password}
                    name="password"
                    onChange={changeHandler}
                    required
                >               
                </input>

                <span onClick={()=> setVisiblePassword((prev)=>!prev)}>
                    {
                        visiblePassword ? 
                        (<PiEye />) :
                        (<PiEyeClosed />)
                    }
                </span>
                
                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>
            </label>

            <button>
                Log In
            </button>
        </form>
    )
}
export default LoginForm;