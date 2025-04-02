import React from "react";
import { useState } from "react";
import Logo from "../img/logo.png";
import Icon from "../img/icon.png"
import GoogleSvg from "../img/icons8-google.svg";
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'

const Login: React.FC = () => {
  const [ showPassword, setShowPassword ] = useState(false);
  return (
    <>
    {/* <Header /> */}
    <div className="login-main">
      <div className="login-left">
        <img src={Logo} className="" alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Icon} alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <input type="email" placeholder="Email" />
              <div className="pass-input-div">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                {showPassword ? <EyeSlashIcon className="size-6"  onClick={() => {setShowPassword(!showPassword)}} /> : <EyeIcon className="size-6"  onClick={() => {setShowPassword(!showPassword)}} />}
                
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember for 30 days
                  </label>
                </div>
                <a href="#" className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
              <div className="login-center-buttons">
                <button type="button">Log In</button>
                <button type="button">
                  <img src={GoogleSvg} alt="" />
                  Log In with Google
                </button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
