// import 'bulma/css/bulma.css';
import React, { useRef, useState } from 'react';
import { useAuth } from '../contexts/authContext.js';
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

export default function SignUp() {
    const { login, currentUser } = useAuth();

    const [isSignUp, setSignUp] = useState(false);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const history = useHistory();

    
}