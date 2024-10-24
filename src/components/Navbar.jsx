import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import {toast} from 'react-hot-toast';
import "../App.css"

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    // function logInHandler(){
    //     if(isLoggedIn===true){
    //         setIsLoggedIn(false);
    //         toast.success("Logged Out Successfully")
    //     }
        
    //     else{
    //         setIsLoggedIn(true);
    //         toast.success("Logged In Successfully")
    //     }
        
    // }


    return(
        <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto" >
                <Link to="/">
                    <img src={Logo} alt="Logo" loading="lazy" width={160} height={32}></img>
                </Link> 
            
            <nav>
                <ul className="text-richblack-100 flex gap-x-6">
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li >
                        <Link to="/about">About</Link>
                    </li>
                    <li >
                        <Link to="/contact">Contact</Link>
                    </li>    
                </ul>
            </nav>

            <div className="flex items-center gap-x-4 ">
            {!isLoggedIn &&
                <Link to='/login'>
                    <button className="bg-richblack-800 text-richblack-100 py-[8px]
                    px-[12px] rounded-[8px] border border-richblack-700">Log In</button>
                </Link>
            }
            {!isLoggedIn &&
                <Link to='/signup'>
                    <button className="bg-richblack-800 text-richblack-100 py-[8px]
                    px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
                </Link>
            }
            {isLoggedIn &&
                <Link to='/'>
                    <button className="bg-richblack-800 text-richblack-100 py-[8px]
                    px-[12px] rounded-[8px] border border-richblack-700"
                     onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out")
                    }}>Log out</button>
                </Link>
            }
            {isLoggedIn &&
                <Link to='/dashboard'>
                    <button className="bg-richblack-800 text-richblack-100 py-[8px]
                    px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
                </Link>
            }
            </div>
        </div>
    )
}
export default Navbar;