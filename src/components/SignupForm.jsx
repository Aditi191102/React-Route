import React from "react";

function SignupForm(){
    return(
        <form>
            <label> First Name
                <input placeholder="First Name"></input>
            </label>
            <label> Last Name
                <input placeholder="Last Name"></input>
            </label>
            <label> Email Address
                <input 
                required
                placeholder="Email Address"
                type="email"
                ></input>
            </label>
        </form>
    )
}
export default SignupForm;