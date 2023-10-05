import React, { useState } from 'react'
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
// import { useHistory } from "react-router-dom"


const Register = () => {
  // const history = useHistory()
const  navigate = useNavigate();
    const [user,setuser] = useState({name:""
    ,email:"",
    password:"",
    repassword:""})
    const handlecahnge = (e)=>{
        const {name,value} = e.target
        setuser({...user,[name]:value})
        console.log(e.target.value);
        console.log(user);
    }
    const register = () => {
      const { name, email, password, repassword } = user
      if( name && email && password && (password === repassword)){
          axios.post("http://localhost:5000/signup", user)
          // // http://localhost:4000/register
          .then( res => {
              // alert(res.data.message)
              // alert(data);
              console.log(res);
              navigate("/");
              alert("Registeration is completed")
          })
          // alert("hello world")
              // npm start
          
      } else {
          alert("invlid input")
      }
    }  

  return (
    <div>
    <h1>Register Page</h1>
    {console.log("user",user)}
    <label>Enter the name</label><br/>
    <input type='text' name="name" value={user.name} placeholder='Enter the name' onChange={handlecahnge}/><br/>
    <label>Enter the Email ID</label><br/>
    <input type='text' name="email" value={user.email} placeholder='Enter the Email ID' onChange={handlecahnge}/><br/>
    <label>password</label><br/>
    <input type='password' name="password" value={user.password} placeholder='Enter the password' onChange={handlecahnge}/><br/>
    <label> confirm password</label><br/>
    <input type='password' name="repassword" value={user.repassword} placeholder='Enter the confirm password' onChange={handlecahnge}/><br/>
  
    <div>or</div>
    <button onClick={register}>Register</button>
    </div>
  )
}

export default Register;