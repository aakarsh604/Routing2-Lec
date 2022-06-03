import React from 'react'
import { useContext } from 'react';
import { Link, useNavigate  } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const {isAuth, logout} = useContext(AuthContext)

    const handleLogin = () => {
        if ( isAuth ) {
            logout();
        } else {
            navigate("/login");
        }

    }
  return (
    <div style={{display: "flex", gap: "25px", padding: "15px", justifyContent: "center"}}>
        Navbar: 
        <Link to="">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/feeds">Feeds</Link>
        <button onClick={handleLogin}>{isAuth? "Logout" : "Login"}</button>
    </div>
  )
}

export default Navbar