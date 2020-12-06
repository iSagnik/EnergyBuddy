// import 'bulma/css/bulma.css';
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/authContext.js';
import { Link, useHistory } from "react-router-dom";
import loginBackground from '../media/loginBackground.mp4';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import '../styles/login.css';
import axios from 'axios';

export default function Login() {

    // login
    const usernameRef = useRef();
    const passwordRef = useRef();

    // signup
    const emailRef = useRef();
    const newPasswordRef = useRef();
    const secondPasswordRef = useRef();
    const roleRef = useRef();
    const nameRef = useRef();

    const [isLogin, setLogin] = useState(true);

    const { login, signup, currentUser } = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            let a = await login(usernameRef.current.value, passwordRef.current.value);
            history.push('/dashboard');
            // console.log(currentUser);
        } catch {
            setError("Account credentials are wrong");
        }
        
        setLoading(false);
    }

    async function setData() {
        const username = getUsername(emailRef.current.value);
        const result = await axios({
            method: 'put',
            url: `https://sustainability-goals-default-rtdb.firebaseio.com/users/${username}.json`,
            data: {
                name: nameRef.current.value,
                uniqueID: username,
                email: emailRef.current.value,
                goalsList: ["goal1"],
                inCircle: false,
                circleId: 10000, 
                Role: roleRef.current.value,
                Points: 0
            }
        });
    }

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
    }

    function renderLogin() {
        return(<div className="tabs-content">
        <form className="loginform" onSubmit={handleLoginSubmit}>
                <input type="text" className="input" id="user_login" autoComplete="off" placeholder="Email or Username" ref={usernameRef}/>
                <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" ref={passwordRef}/>

                <input type="submit" className="button" value="Login"/>
            </form>
            <div className="help-text">
                <p><a href="#">Forget your password?</a></p>
            </div>
        </div>
        )
    }

    async function handleSignUpSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            // check password match
            // console.log(newPasswordRef.current.value, secondPasswordRef.current.value);
            if (newPasswordRef.current.value != secondPasswordRef.current.value) {
                setError("Passwords do not match")
            } else {
                setLoading(true);
                await signup(emailRef.current.value, newPasswordRef.current.value);
                setData(); 
                history.push('/goals'); 
            }           
        } catch {
            setError("Something went wrong. Try again");
        }
        setLoading(false);
    }

    function renderSignUp() {
        return (<div className="tabs-content">
            <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignUpSubmit}>
            {error && <h4 id="error">{error}</h4>}
                <div id="login-tab-content" className="active">
                    {/* <form className="signup-form" action="" method="post"> */}
                        <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Name" ref={nameRef}/>
                        <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" ref={emailRef}/>
                        <input type="text" className="input" id="user_role" autoComplete="off" placeholder="Role" ref={roleRef}/>
                        <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" ref={newPasswordRef}/>
                        <input type="password" className="input" id="user_confirmPass" autoComplete="off" placeholder="Re-enter Password"ref={secondPasswordRef}></input>
                        <input type="submit" className="button is-dark" value="Create Account"/>
                    {/* </form> */}
                </div>
            </form>
        </div>
        </div>
        )
    }

    function setLoginFalse() {
        setLogin(false);
    }

    function setLoginTrue() {
        setLogin(true);
    }

    function renderDarkLogin() {
        return (<div className="tabs">
            <h3><a href="#signup-tab-content" onClick={setLoginFalse}>Sign Up</a></h3>
            <h3><a className="active" href="#login-tab-content" onClick={setLoginTrue}>Login</a></h3>
        </div>
        )
    }

    function renderDarkSignUp() {
        return (<div className="tabs">
            <h3><a className="active" href="#signup-tab-content" onClick={setLoginFalse}>Sign Up</a></h3>
            <h3><a href="#login-tab-content" onClick={setLoginTrue}>Login</a></h3>
        </div>
        )
    }

    return ( <div style={{ width: 'auto', height: 'auto'}}>
        <ResponsiveEmbed aspectRatio="16by9" style={{position: "fixed"}}>
            <video id="background-video" className="videoTag" autoPlay="autoplay" loop="loop" muted>
                <source type='video/mp4' src={loginBackground} />
            </video>
        </ResponsiveEmbed>
                
    <div className="login-container" style={{position:"fixed"}}>
        <div className="form-wrap">
            {isLogin ? renderDarkLogin() : renderDarkSignUp()}

            {isLogin ? renderLogin() : renderSignUp()}
        </div>
    </div>
</div>               
    )
}