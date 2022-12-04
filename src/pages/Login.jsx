import React from "react";
import "../modules/authentication/styles/auth.scss";
import googleIcon from "../assets/google_icon.svg";
import { Link } from 'react-router-dom'

const Login = () => {
    return (<div className="login-container">
        <div className="login-form-wrapper">
            <div className="app-info-wrapper">
                {/* <div>Hello</div> */}
            </div>
            <div className="login-form">
                <div className="main-header">Fair Salon</div>
                <div className="sub-header">Salon Manager</div>
                <div className="input-wrapper">
                    <label className="usename-password-label">Username or Email</label>
                    <input aria-labelledby="usename" type="text"></input>
                </div>
                <div className="input-wrapper">
                    <label className="usename-password-label">Password</label>
                    <input aria-labelledby="password" type="password"></input>
                    <div className="forgot-password">Forgot Password?</div>
                </div>
                <div className="sign-in-container">
                    <Link to={'/home'}>
                        <button className="login-button" type="submit" >Sign In</button></Link>
                    <div className="divider"><span>Or</span></div>
                    <div className="sign-in-google"><img className="google-icon" src={googleIcon}></img> Sign in with Google</div>
                </div>
                <div className="create-account">New User? <span style={{ color: '#728B65', textDecoration: 'underLine' }}>Create Account</span></div>
            </div>
        </div>

    </div>);
}

export default Login;