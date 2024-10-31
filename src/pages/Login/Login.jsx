import React, { useState } from 'react'
import "./Login.css"
import logo from '../../assets/logo.png'
import {login,signup} from '../../firebase'
import greatflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {
  const [signState, setSignState]= useState("Sign In");
const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);


const main_auth = async(event) => {
  event.preventDefault();
  setLoading(true);
  if(signState === "Sign In"){
    await login(email,password);
  }else {
    await signup(name,email,password);
  }
  setLoading(false);
}



  let handleChange = ()=> {
    setSignState("Sign Up");
  }
  
  
   return (
    loading  ? <div className="login-spinner">
      <img src={greatflix_spinner}alt="" />
    </div> :
    <div className="login">
      <img src={logo} alt="logo" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
          {signState ==="Sign Up" ? <input type="text" name="user" value={name} 
          onChange={(e)=>{setName(e.target.value)} } placeholder='Your Name' /> : <></>}
          <input type="email" placeholder='Email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)} }/>
          <input type="password" placeholder='Password' name='password'value={password} onChange={(e)=>{setPassword(e.target.value)} } />
          <button onClick={main_auth}  type='submit'> {signState}</button>
          <div className='form-help'>
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor=""> Remember Me</label>
            </div>
            <p>Need Help</p>

          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? <p>New to Greatflix <span onClick={handleChange}>Sign Up Now</span></p>: <p>Already have Account <span onClick={() => {setSignState("Sign")}}>Sign In Now</span></p> }
          
          
        </div>
      </div>
    </div>
  )
}

export default Login