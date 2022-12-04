import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import googleIcon from '../assets/google_icon.svg'
import '../modules/authentication/styles/auth.scss'
import { LocalStorage } from '../services/localStorageService'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const userNameRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  const handleLogin = () => {
    const email = userNameRef.current.value
    const password = passwordRef.current.value

    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        LocalStorage.addKey({
          key: 'authToken',
          value: user.accessToken
        })
        navigate('/home')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log('Login Unsuccessful', errorCode, errorMessage)
      })
  }

  return (
    <div className='login-container'>
      <div className='login-form-wrapper'>
        <div className='app-info-wrapper'></div>
        <div className='login-form'>
          <div className='main-header'>Fair Salon</div>
          <div className='sub-header'>Salon Manager</div>
          <div className='input-wrapper'>
            <label className='usename-password-label'>Username or Email</label>
            <input
              ref={userNameRef}
              aria-labelledby='usename'
              type='text'
            ></input>
          </div>
          <div className='input-wrapper'>
            <label className='usename-password-label'>Password</label>
            <input
              ref={passwordRef}
              aria-labelledby='password'
              type='password'
            ></input>
            <div className='forgot-password'>Forgot Password?</div>
          </div>
          <div className='sign-in-container'>
            <button
              onClick={() => handleLogin()}
              className='login-button'
              type='submit'
            >
              Sign In
            </button>
            <div className='divider'>
              <span>Or</span>
            </div>
            <div className='sign-in-google'>
              <img className='google-icon' src={googleIcon}></img> Sign in with
              Google
            </div>
          </div>
          <div className='create-account'>
            New User?{' '}
            <span style={{ color: '#728B65', textDecoration: 'underLine' }}>
              Create Account
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
