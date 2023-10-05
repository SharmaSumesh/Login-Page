import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginPage = () =>
{

    const [user,setuser] = useState({email:"",password:""})
    const handlechange = (e)=>{
      const {name,value}=e.target;
        console.log(e.target.value)
        setuser({...user,[name]:value})
    }
    const  navigate = useNavigate();
  
    const Login = ()=>{
      
    const { email, password} = user
      if( email && password ){
          axios.post("http://localhost:5000/login", user)
          // // http://localhost:4000/register
          .then( res => {
              // alert(res.data.message)
              // alert(data);
              console.log(res);
              navigate("/");
              alert("login success")
          })
          // alert("hello world")
              // npm start
          
      } 
    }  
  
  return (
    <div>
        <h1>Login Page</h1>
    <form>
    <label>Email</label><br/>
    <input type='text' placeholder='Enter the Email' name='email' value={user.email} onChange={handlechange}/><br/>
    <label>Password</label><br/>
    <input type='password' placeholder='Enter the password' name='password' value={user.password} onChange={handlechange}/><br/>
    <button onClick={Login}>Login</button>
    </form>
    </div>
  )
}

export default LoginPage
