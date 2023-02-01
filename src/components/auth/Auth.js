/** @format */
import Login from './login/Login'
import Register from './register/Register'
import { useState } from 'react'
import './Auth.css'

//function to switch between login and register page
const Auth = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="Auth">
      {toggle ? <Register setToggle={setToggle} toggle={toggle} /> : <Login />}
      <label className="toggle">
        {toggle ? 'Have an account ' : 'Dont have an account '}
        <button className="buttonn" onClick={() => setToggle(!toggle)}>
          {toggle ? 'Login Here' : 'Register Here'}
        </button>
      </label>
    </div>
  )
}

export default Auth
