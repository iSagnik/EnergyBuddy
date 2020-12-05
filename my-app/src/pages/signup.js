// import 'bulma/css/bulma.css';
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/authContext.js';
import { Link, useHistory } from "react-router-dom";



export default function SignUp() {

    const usernameRef = useRef();
    const passwordRef = useRef();
    const secondPasswordRef = useRef();

    const { signup, currentUser } = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            let a = await signup(usernameRef.current.value, passwordRef.current.value);
            // history.push('/profile');
            // console.log(currentUser);
        } catch {
            setError("Account credentials are wrong");
        }
        
        setLoading(false);
    }

    function getUsername(email) {
        let em_split = email.split('@');
        let username = em_split[0]+em_split[1].split('.')[0];
        return username;
    }

    return (<div className="login-container">
            <form className="loginform" onSubmit={handleSubmit}>
                <h1 className="title">Signup</h1>
                {error && <h2>{error}</h2>}
                <div className="field">
                    <label className="label">Enter email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Username" ref={usernameRef} name="username"></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Choose password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Password" ref={passwordRef} name="password"></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Re-enter password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="Password" ref={secondPasswordRef} name="password"></input>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <input className="button is-dark" type="submit" disabled={loading}/>
                        {/* <Link to="/signup"> */}
                            <input className="button is-dark" value="Create Account" type="submit"/>
                        {/* </Link> */}
                    </div>
                </div>
            </form>
        </div>);
}