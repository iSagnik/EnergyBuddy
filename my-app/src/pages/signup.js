// import 'bulma/css/bulma.css';
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/authContext.js';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

export default function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const secondPasswordRef = useRef();
    const roleRef = useRef();
    const nameRef = useRef();

    const { login, currentUser } = useAuth();

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            // setData(); 
            history.push('/goals');
        } catch {
            setError("Something went wrong. Try again");
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

    return (<div className="login-container">
            <form className="loginform" onSubmit={handleSubmit}>
                <h1 className="title">Signup</h1>
                {error && <h2>{error}</h2>}
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Name" ref={nameRef} name="name"></input>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Enter email</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Email" ref={emailRef} name="email"></input>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Role: </label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Role" ref={roleRef} name="role"></input>
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
                        {/* <input className="button is-dark" type="submit" disabled={loading}/> */}
                        {/* <Link to="/signup"> */}
                            <input className="button is-dark" value="Create Account" type="submit"/>
                        {/* </Link> */}
                    </div>
                </div>
            </form>
        </div>);
}