import { useState, useEffect, useContext } from "react";
import { assets } from "../assets/assets";
import { StoredContext } from "../Context/StoredContext";
import axios from 'axios'

const Login = ({setShowLogin}) => {
    const {url, setToken} = useContext(StoredContext)

    const[currState, setCurrState] = useState("Login")
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const changeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setData(data=>({...data, [name]:value}))
    }
    useEffect(()=>{
        console.log(data)
    },[data])

    const onLogin = async (event) =>{
        event.preventDefault()
        let newUrl =url;
        if (currState==='Login') {
            newUrl += "/api/user/login"
        }
        else{
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data)

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token)
            setShowLogin(false)
        }
        else{
            alert(response.data.message);
        }
    }

    return ( 
        <div className="login">
            <form action="" className="loginForm" onSubmit={onLogin}>
                <div className="loginTitle">
                    <h2>{currState}</h2>
                    <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="loginInputs">
                    {currState === "Login"? <></>:<input name="name" onChange={changeHandler} value={data.name} type="text" placeholder="Your name" required />}
                    
                    <input name="email" onChange={changeHandler} value={data.email} type="email" placeholder="Email" required />
                    <input name="password" onChange={changeHandler} value={data.password} type="password" placeholder="password" required />
                </div>
                <button type="submit">{currState==="Sign Up"?"Create Account" : "Login"}</button>
                <div className="loginCondition">
                    <input type="checkbox" required/>
                    <p>By continuing, I agree to the terms of use and policies</p>
                </div>
                {currState ==='Login'? <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Create account</span></p>:
                <p>Already have an account? <span onClick={()=> setCurrState("Login")}>Login here</span></p>}
                
                
            </form>
        </div>
     );
}
 
export default Login;