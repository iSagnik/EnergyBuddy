// import 'bulma/css/bulma.css';
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/authContext.js';
import { Link, useHistory } from "react-router-dom";
import loginBackground from '../media/loginBackground.mp4';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
import '../styles/login.css';

export default function Login() {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const { login, currentUser } = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            let a = await login(usernameRef.current.value, passwordRef.current.value);
            // history.push('/profile');
            // console.log(currentUser);
        } catch {
            setError("Account credentials are wrong");
        }
        
        setLoading(false);
    }

    return ( <div style={{ width: 'auto', height: 'auto'}}>
        <ResponsiveEmbed aspectRatio="16by9" style={{position: "fixed"}}>
            <video id="background-video" className="videoTag" autoPlay="autoplay" loop="loop" muted>
                <source type='video/mp4' src={loginBackground} />
            </video>
        </ResponsiveEmbed>
                
    <div className="login-container" style={{position:"fixed"}}>
        <div class="form-wrap">
            <div class="tabs">
                <h3 class="signup-tab"><a class="active" href="#signup-tab-content">Sign Up</a></h3>
                <h3 class="login-tab"><a href="#login-tab-content">Login</a></h3>
            </div>

            <div class="tabs-content">
                <div id="signup-tab-content" class="active">
                    <form class="signup-form" action="" method="post">
                        <input type="email" class="input" id="user_email" autocomplete="off" placeholder="Email"/>
                        <input type="text" class="input" id="user_name" autocomplete="off" placeholder="Username"/>
                        <input type="password" class="input" id="user_pass" autocomplete="off" placeholder="Password"/>
                        <input type="submit" class="button" value="Sign Up"/>
                    </form>
                </div>

                <div id="login-tab-content">
                    <form class="login-form" action="" method="post">
                        <input type="text" class="input" id="user_login" autocomplete="off" placeholder="Email or Username"/>
                        <input type="password" class="input" id="user_pass" autocomplete="off" placeholder="Password"/>
                        <input type="checkbox" class="checkbox" id="remember_me"/>
                        <label for="remember_me">Remember me</label>

                        <input type="submit" class="button" value="Login"/>
                    </form>
                    <div class="help-text">
                        <p><a href="#">Forget your password?</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        </div>                   
    );

    {/* <div style={{ width: 'auto', height: 'auto'}}>
                <ResponsiveEmbed aspectRatio="16by9" style={{position: "fixed"}}>
                    <video id="background-video" className="videoTag" autoPlay="autoplay" loop="loop" muted>
                        <source type='video/mp4' src={loginBackground} />
                    </video>
                </ResponsiveEmbed>
            </div>

            <div class="login-box">
                <h2>Login</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required=""></input>
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required=""></input>
                        <label>Password</label>
                    </div>
                    <a href="#">
                    Submit
                    </a>
                </form>
            </div> */}
}