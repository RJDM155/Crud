import axios from 'axios';
import secureLocalStorage from 'react-secure-storage';
import { useEffect, useState } from 'react';


export default function Login({onLogin}){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


return(
    <>
    <label htmlFor='email'>Email</label>
    <input type={"text"} id = "email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>

    <label htmlFor='password'>Password</label>
    <input type={"password"} id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>

    <button onClick={()=>{
        const url= 'http://localhost:9000/login';
        const data = {
            user : email,
            pass : password
        }
        axios.post(url, JSON.stringify(data),
        {
            headers:{"Content-Type": "application/JSON"}
        }).then((Response)=>{
            secureLocalStorage.setItem("token", Response.data.token);
            onLogin(Response.data.token);
        }).catch((error)=>{
            console.log(error);
        })
    }}>Login</button>
    </>
    );
}
