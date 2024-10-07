import React, { useState } from 'react'
import './LoginForm.css'
import pic from '../../Assests/pic.png'
import pic2 from '../LoginForm/pic.png'
import { FaGoogle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";


const LoginForm = () => {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()

    const HandlerLoginSubmit = (e) =>{
        e.preventDefault()
        console.log({email,password})
        setEmail('')
        setPassword('')
    }
    return (
        <>
            <section>
                <div className="imageSection">
                    <img src={pic} alt='pic' />
                </div>

                <div className="formSection">
                    <img src={pic2} alt='pic'/>
                    <div className="formContainer">
                        <h2>Log in to your account</h2>

                        <div className="googleIcon">
                            <p className='googleClr'><FaGoogle size={20} color='blue'/></p>
                            <p style={{ fontWeight: '500', marginLeft: '8px', fontSize: '19px' }}>Sign in with Google</p>
                        </div>

                        <div className='or-divider'>
                            <span>or</span>
                        </div>
                        <form onSubmit={HandlerLoginSubmit}>   
                            <div className="form-group">
                                <label>Email</label>
                                <div className="input-icon-container">
                                    <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email" />
                                    <RxCrossCircled className="input-icon" />
                                </div>
                            </div>



                            <div className="form-group">
                                <label>Password</label>
                                <div className="input-icon-container">
                                    <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter your password" />
                                    <FaRegEyeSlash className="input-icon" />
                                </div>
                            </div>


                            <div className="checkBox">
                                <div className="remember-me">
                                    <input type="checkbox" id="remember" />
                                    <label for="remember">Remember me</label>
                                </div>

                                <div className="forget">
                                    <a href="#">Forget Password?</a>
                                </div>
                            </div>

                            <button type='submit'>Log in</button>

                            <p>Don't have an account?<span style={{ fontWeight: '700', marginLeft: '5px',textDecoration:'none',borderBottom:'2px solid rgb(108, 108, 250)' }}>Create</span></p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginForm;
