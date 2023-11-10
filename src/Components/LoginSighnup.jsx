import React, { useState } from "react";
import "../styles/LoginSighnup.css";
const LoginSighnup = () => {
  let [name,setName]=useState('Sign up')
  return (
    <div className="main-sec">
      <div className="section">
        <div className="header">
          <div className="title">{name}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {name==='Login'? <div></div>:<div className="input">
            <span>
              <i className="fa-regular fa-user"></i>
            </span>
            <input type="text" name="" placeholder="Name" />
          </div>}
          
          <div className="input">
            <span>
              <i className="fa-sharp fa-solid fa-envelope"></i>
            </span>
            <input type="email" name="" placeholder="Email"/>
          </div>
          <div className="input">
            <span>
              <i className="fa-sharp fa-solid fa-lock"></i>
            </span>
            <input type="password" name="" placeholder="Password"/>
          </div>


          {name==='Login'?<div></div>:<div className="forgot">Forgot your password?<span>Click here</span></div>}

          <div className="btn">
            <button className={name==='Login'?"gray":'submit'} onClick={()=>{setName('Sign up')}} >Sign up</button>
            <button className={name==='Sign up'?'gray':'submit'} onClick={()=>{setName('Login')}} >Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSighnup;
