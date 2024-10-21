import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import {toast} from 'react-hot-toast';
import "../App.css"

const Navbar = (props) => {

    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    function logInHandler(){
        if(isLoggedIn===true){
            setIsLoggedIn(false);
            toast.success("Logged Out Successfully")
        }
        
        else{
            setIsLoggedIn(true);
            toast.success("Logged In Successfully")
        }
        
    }


    return(
        <div className="outer">
                <Link to="/">
                    <img src={Logo} alt="Logo" loading="lazy" width={160} height={32}></img>
                </Link> 
            
            <div className="outerlinks">
                <ul className="pageslinks">
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
            </div>

            <div className="pagesbtns">
            {!isLoggedIn &&
                <Link to='/login'>
                    <button onClick={logInHandler}>Login</button>
                </Link>
            }
            {!isLoggedIn &&
                <Link to='/signup'>
                    <button>Sign Up</button>
                </Link>
            }
            {isLoggedIn &&
                <Link to='/'>
                    <button onClick={logInHandler}>Logout</button>
                </Link>
            }
            {isLoggedIn &&
                <Link to='/dashboard'>
                    <button>Dashboard</button>
                </Link>
            }
            </div>
        </div>
    )
}
export default Navbar;