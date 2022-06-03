import { useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isAuth, setisAuth] = useState(false);
    const navigate = useNavigate();
    const {state} = useLocation();

    const login = () => {
        setisAuth(true);
        if ( state.from){
            navigate(state.from, {replace : true})
        } else {
            navigate("/")
        }
        
    }

    const logout = () => {
        setisAuth(false);
        navigate("/");
    }

    return <AuthContext.Provider value={{isAuth, setisAuth, login, logout}}>{children}</AuthContext.Provider>
}