import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Login = () => {

    const {login} = useContext(AuthContext);

    const [form, setform] = React.useState({});

    const onChange = (e) => {
        const {name, value} = e.target;
        setform({
            ...form, 
            [name] : value,
        })
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        login();
    }

  return (
    <div>LOGIN
        <form style={{display: "flex", flexDirection: "column", gap: "15px", width: "300px", margin: "auto"}}>
                <input name="email" type="email" placeholder='Enter Email' onChange={onChange}/>
                <input name="password" type="password" placeholder='Enter Password' onChange={onChange}/>
                <input type="submit" value="Login" onClick={handlesubmit}/>
        </form>
    </div>
  )
}

export default Login